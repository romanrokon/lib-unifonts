// @ AI Context: every cell is a fullwidth char (charCode + 0xFEE0) or U+3000, so all cells have equal
// width even in proportional fonts, and U+3000 is not collapsed as whitespace by Instagram/WhatsApp.
// @ AI Context: EMOJI_BLANK is a visible 🤍 because no invisible char matches emoji width; U+3000 blanks skewed heart rows on iPhone (2026-11-17). Only U+3000 blanks are trimmed so emoji art stays rectangular.

export const BLANK = '　';
export const EMOJI_BLANK = '🤍';

type Fill = 'self' | 'heart';

const HEART_EMOJI = '❤️';
const GLYPH_SIZE = 5;
const SPACE_WIDTH = 3;

export const GLYPHS: Record<string, string[]> = {
  A: ['.###.', '#...#', '#####', '#...#', '#...#'],
  B: ['####.', '#...#', '####.', '#...#', '####.'],
  C: ['.####', '#....', '#....', '#....', '.####'],
  D: ['####.', '#...#', '#...#', '#...#', '####.'],
  E: ['#####', '#....', '####.', '#....', '#####'],
  F: ['#####', '#....', '####.', '#....', '#....'],
  G: ['.####', '#....', '#..##', '#...#', '.###.'],
  H: ['#...#', '#...#', '#####', '#...#', '#...#'],
  I: ['#####', '..#..', '..#..', '..#..', '#####'],
  J: ['..###', '...#.', '...#.', '#..#.', '.##..'],
  K: ['#...#', '#..#.', '###..', '#..#.', '#...#'],
  L: ['#....', '#....', '#....', '#....', '#####'],
  M: ['#...#', '##.##', '#.#.#', '#...#', '#...#'],
  N: ['#...#', '##..#', '#.#.#', '#..##', '#...#'],
  O: ['.###.', '#...#', '#...#', '#...#', '.###.'],
  P: ['####.', '#...#', '####.', '#....', '#....'],
  Q: ['.###.', '#...#', '#.#.#', '#..#.', '.##.#'],
  R: ['####.', '#...#', '####.', '#..#.', '#...#'],
  S: ['.####', '#....', '.###.', '....#', '####.'],
  T: ['#####', '..#..', '..#..', '..#..', '..#..'],
  U: ['#...#', '#...#', '#...#', '#...#', '.###.'],
  V: ['#...#', '#...#', '#...#', '.#.#.', '..#..'],
  W: ['#...#', '#...#', '#.#.#', '##.##', '#...#'],
  X: ['#...#', '.#.#.', '..#..', '.#.#.', '#...#'],
  Y: ['#...#', '.#.#.', '..#..', '..#..', '..#..'],
  Z: ['#####', '....#', '...#.', '..#..', '#####'],
  '0': ['.###.', '#..##', '#.#.#', '##..#', '.###.'],
  '1': ['..#..', '.##..', '..#..', '..#..', '.###.'],
  '2': ['.###.', '#...#', '..##.', '.#...', '#####'],
  '3': ['####.', '....#', '.###.', '....#', '####.'],
  '4': ['#..#.', '#..#.', '#####', '...#.', '...#.'],
  '5': ['#####', '#....', '####.', '....#', '####.'],
  '6': ['.###.', '#....', '####.', '#...#', '.###.'],
  '7': ['#####', '....#', '...#.', '..#..', '..#..'],
  '8': ['.###.', '#...#', '.###.', '#...#', '.###.'],
  '9': ['.###.', '#...#', '.####', '....#', '.###.'],
  HEART: ['.#.#.', '#####', '#####', '.###.', '..#..'],
  BLOB: ['.###.', '#####', '#####', '#####', '.###.'],
};

const HEART_GRAPHEMES = [
  '❤️',
  '❤',
  '♥',
  '🩷',
  '🧡',
  '💛',
  '💚',
  '💙',
  '💜',
  '🖤',
  '🤍',
  '🤎',
  '💖',
  '💗',
  '💕',
];

const GRAPHEME_PATTERN =
  '\\p{Extended_Pictographic}(?:\\uFE0F|\\u200D\\p{Extended_Pictographic}\\uFE0F?|[\\u{1F3FB}-\\u{1F3FF}])*|[\\s\\S]';
const EMOJI_PATTERN = '\\p{Extended_Pictographic}';
const WHITESPACE_PATTERN = /^\s+$/;
const ALPHANUMERIC_PATTERN = /^[A-Za-z0-9]$/;

export function splitGraphemes(s: string): string[] {
  return s.match(new RegExp(GRAPHEME_PATTERN, 'gu')) || [];
}

export function isEmoji(g: string): boolean {
  return new RegExp(EMOJI_PATTERN, 'u').test(g);
}

type Shape = { kind: 'glyph'; key: string } | { kind: 'space' } | { kind: 'other' };

function shapeFor(g: string): Shape {
  const upper = g.toUpperCase();

  if (ALPHANUMERIC_PATTERN.test(g) && GLYPHS[upper]) {
    return { kind: 'glyph', key: upper };
  }

  if (HEART_GRAPHEMES.indexOf(g) !== -1) {
    return { kind: 'glyph', key: 'HEART' };
  }

  if (isEmoji(g)) {
    return { kind: 'glyph', key: 'BLOB' };
  }

  if (WHITESPACE_PATTERN.test(g)) {
    return { kind: 'space' };
  }

  return { kind: 'other' };
}

function fillCell(g: string, fill: Fill): string {
  if (fill === 'heart') {
    return HEART_EMOJI;
  }

  if (ALPHANUMERIC_PATTERN.test(g)) {
    return String.fromCharCode(g.charCodeAt(0) + 0xfee0);
  }

  if (g === '❤') {
    return HEART_EMOJI;
  }

  return g;
}

function blankFor(cell: string): string {
  return isEmoji(cell) ? EMOJI_BLANK : BLANK;
}

function isBlankCell(cell: string): boolean {
  return cell === BLANK;
}

function renderCells(g: string, fill: Fill): string[][] {
  const shape = shapeFor(g);

  if (shape.kind === 'glyph') {
    const cell = fillCell(g, fill);
    const blank = blankFor(cell);

    return GLYPHS[shape.key].map(row =>
      row.split('').map(mark => (mark === '#' ? cell : blank))
    );
  }

  const rows: string[][] = [];

  for (let i = 0; i < GLYPH_SIZE; i++) {
    rows.push([i === 2 ? g : BLANK]);
  }

  return rows;
}

export function renderGlyph(g: string, fill: Fill): string[] {
  return renderCells(g, fill).map(row => row.join(''));
}

function trimTrailingBlanks(cells: string[]): string[] {
  const trimmed = cells.slice();

  while (trimmed.length > 0 && isBlankCell(trimmed[trimmed.length - 1])) {
    trimmed.pop();
  }

  return trimmed;
}

type Token = { kind: 'glyph'; g: string } | { kind: 'space' };

function tokenize(s: string): Token[] {
  const tokens: Token[] = [];

  splitGraphemes(s).forEach(g => {
    const isSpace = shapeFor(g).kind === 'space';
    const last = tokens[tokens.length - 1];

    if (!isSpace) {
      tokens.push({ kind: 'glyph', g });

      return;
    }

    if (tokens.length > 0 && last.kind !== 'space') {
      tokens.push({ kind: 'space' });
    }
  });

  if (tokens.length > 0 && tokens[tokens.length - 1].kind === 'space') {
    tokens.pop();
  }

  return tokens;
}

export function stacked(s: string, fill: Fill): string {
  const lines: string[] = [];
  let extraSeparators = 0;

  tokenize(s).forEach(token => {
    if (token.kind === 'space') {
      extraSeparators = 1;

      return;
    }

    if (lines.length > 0) {
      for (let i = 0; i < 1 + extraSeparators; i++) {
        lines.push(BLANK);
      }
    }

    extraSeparators = 0;
    renderCells(token.g, fill).forEach(row => {
      const trimmed = trimTrailingBlanks(row).join('');

      lines.push(trimmed === '' ? BLANK : trimmed);
    });
  });

  return lines.join('\n');
}

export function banner(s: string, fill: Fill): string {
  const gap = fill === 'heart' ? EMOJI_BLANK : BLANK;
  const tokens = tokenize(s);

  if (tokens.length === 0) {
    return '';
  }

  const rows: string[][] = [];

  for (let i = 0; i < GLYPH_SIZE; i++) {
    rows.push([]);
  }

  tokens.forEach((token, index) => {
    const columns =
      token.kind === 'space'
        ? rows.map(() => new Array(SPACE_WIDTH).fill(gap))
        : renderCells(token.g, fill);

    rows.forEach((row, rowIndex) => {
      if (index > 0) {
        row.push(gap);
      }

      columns[rowIndex].forEach(cell => row.push(cell));
    });
  });

  return rows.map(row => trimTrailingBlanks(row).join('')).join('\n');
}

export const bigLetters = (s: string) => stacked(s, 'self');

export const bigLettersBanner = (s: string) => banner(s, 'self');

export const heartLetters = (s: string) => stacked(s, 'heart');

export const heartLettersBanner = (s: string) => banner(s, 'heart');

export const LETTER_ART_FONTS: { name: string; fn: (s: string) => string }[] = [
  { name: 'big_letters', fn: bigLetters },
  { name: 'big_letters_banner', fn: bigLettersBanner },
  { name: 'heart_letters', fn: heartLetters },
  { name: 'heart_letters_banner', fn: heartLettersBanner },
];
