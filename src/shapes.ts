import { splitGraphemes, pickBackground } from './letterArt';

// @ AI Context: letters inside a shape are regional indicators (emoji-width), so the emoji grid stays exact. Every tile is followed by U+200B so adjacent indicators never merge into a flag ligature (I+L = 🇮🇱). 'below' mode exists for any script and any length: plain text under the shape, approximately centred.

export type ShapeId = 'heart' | 'star' | 'circle';
export type ShapeMode = 'inside' | 'below';

export const SHAPES: {
  id: ShapeId;
  fill: string;
  rows: string[];
  textRows: number[];
}[] = [
  {
    id: 'heart',
    fill: '❤️',
    textRows: [3, 4, 5, 6],
    rows: [
      '..###...###..',
      '.#...#.#...#.',
      '#.....#.....#',
      '#...........#',
      '#...........#',
      '.#.........#.',
      '..#.......#..',
      '...#.....#...',
      '....#...#....',
      '.....#.#.....',
      '......#......',
    ],
  },
  {
    id: 'star',
    fill: '⭐',
    textRows: [4, 5, 6],
    rows: [
      '......#......',
      '.....#.#.....',
      '.....#.#.....',
      '#####...#####',
      '#...........#',
      '.#.........#.',
      '..#.......#..',
      '...#.....#...',
      '..#...#...#..',
      '..#..#.#..#..',
      '.#..#...#..#.',
      '.###.....###.',
    ],
  },
  {
    id: 'circle',
    fill: '🔵',
    textRows: [3, 4, 5, 6, 7],
    rows: [
      '...#####...',
      '.##.....##.',
      '.#.......#.',
      '#.........#',
      '#.........#',
      '#.........#',
      '#.........#',
      '#.........#',
      '.#.......#.',
      '.##.....##.',
      '...#####...',
    ],
  },
];

const ZWSP = '​';
const BLANK = '　';
const LETTER_PATTERN = /^[A-Za-z]$/;
const DIGIT_PATTERN = /^[0-9]$/;
const WHITESPACE_PATTERN = /^\s+$/;

function findShape(id: ShapeId) {
  return SHAPES.filter(s => s.id === id)[0] || SHAPES[0];
}

function tileFor(g: string): string | undefined {
  if (LETTER_PATTERN.test(g)) {
    const index = g.toUpperCase().charCodeAt(0) - 65;

    return String.fromCodePoint(0x1f1e6 + index) + ZWSP;
  }

  if (DIGIT_PATTERN.test(g)) {
    return g + '️⃣' + ZWSP;
  }

  return undefined;
}

function toWords(text: string): string[][] {
  const words: string[][] = [];
  let current: string[] = [];

  splitGraphemes(text.trim()).forEach(g => {
    if (WHITESPACE_PATTERN.test(g)) {
      words.push(current);
      current = [];

      return;
    }

    const tile = tileFor(g);

    if (tile) {
      current.push(tile);
    }
  });

  words.push(current);

  return words.filter(w => w.length > 0);
}

function wrap(words: string[][], limit: number): string[][] {
  const lines: string[][] = [];

  words.forEach(word => {
    const last = lines[lines.length - 1];

    if (last && last.length + 1 + word.length <= limit) {
      lines[lines.length - 1] = last.concat([''], word);

      return;
    }

    lines.push(word.slice());
  });

  return lines;
}

function interiorOf(row: string): { start: number; capacity: number } {
  const first = row.indexOf('#');
  const last = row.lastIndexOf('#');

  return { start: first + 1, capacity: last - first - 1 - 2 };
}

function placeInside(
  grid: string[][],
  words: string[][],
  rows: string[],
  textRows: number[],
  background: string
): boolean {
  const capacities = textRows.map(i => interiorOf(rows[i]).capacity);
  const maxCap = Math.max.apply(null, capacities);

  for (let limit = maxCap; limit >= 1; limit--) {
    const lines = wrap(words, limit);

    if (lines.length > textRows.length) {
      continue;
    }

    const offset = Math.floor((textRows.length - lines.length) / 2);
    const fits = lines.every(
      (line, i) => line.length <= capacities[offset + i]
    );

    if (!fits) {
      continue;
    }

    lines.forEach((line, i) => {
      const rowIndex = textRows[offset + i];
      const { start, capacity } = interiorOf(rows[rowIndex]);
      const interior = capacity + 2;
      const left = Math.floor((interior - line.length) / 2);

      line.forEach((tile, j) => {
        grid[rowIndex][start + left + j] = tile === '' ? background : tile;
      });
    });

    return true;
  }

  return false;
}

function belowText(width: number, text: string): string {
  const length = splitGraphemes(text).length;
  const pad = Math.max(0, Math.floor((width * 1.25 - length * 0.55) / 2));
  let indent = '';

  for (let i = 0; i < pad; i++) {
    indent += BLANK;
  }

  return BLANK + '\n' + indent + text;
}

export function shapeText(s: string, shape: ShapeId, mode: ShapeMode): string {
  const def = findShape(shape);
  const background = pickBackground(def.fill);
  const grid = def.rows.map(row =>
    row.split('').map(mark => (mark === '#' ? def.fill : background))
  );
  const text = (s || '').trim();
  const width = def.rows[0].length;
  let inside = mode === 'inside' && text !== '';

  if (inside) {
    const words = toWords(text);

    inside =
      words.length > 0 &&
      placeInside(grid, words, def.rows, def.textRows, background);
  }

  const shapeOnly = grid.map(row => row.join('')).join('\n');

  if (text === '' || inside) {
    return shapeOnly;
  }

  const clean = grid.map(row => row.join(''));

  return clean.join('\n') + '\n' + belowText(width, text);
}
