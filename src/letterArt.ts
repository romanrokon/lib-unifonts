// @ AI Context: every cell is a fullwidth char (charCode + 0xFEE0) or U+3000, so all cells have equal
// width even in proportional fonts, and U+3000 is not collapsed as whitespace by Instagram/WhatsApp.
// @ AI Context: emoji fills use a visible background from pickBackground because no invisible char matches emoji width; U+3000 blanks skewed heart rows on iPhone (2026-11-17). Only U+3000 blanks are trimmed so emoji art stays rectangular.
// @ AI Context: background history: 🤍 (rejected, too loud) → ▫️ (white squares fought red hearts on dark, 2026-11-25) → ▪️, which nearly vanishes in dark-mode chats. Dark fills get ▫️ instead. The app dims EMOJI_BACKGROUNDS in its card preview.

export const BLANK = '　';
export const EMOJI_BLANK = '▪️';
export const EMOJI_BACKGROUNDS = ['▪️', '▫️'];

type Fill = 'self' | { emoji: string };

export const EMOJI_FILLS = ['❤️', '🔥', '⭐', '🌸', '💀', '✨', '🍀', '💜'];

const DARK_FILLS = ['▪️', '🖤', '⬛', '◾', '🌑', '🐈‍⬛'];
const HEART_EMOJI = '❤️';
const GLYPH_SIZE = 5;

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

// @ AI Context: 3×5 glyphs used when the input has 3+ glyphs, so 3 letters fit the same 11-cell
// band width that 2 letters take at 5×5. The 5×5-only stacked output for "ILOVE" was ~30 rows
// tall in the card (reported 2026-11-25); choosing glyph size by length keeps it compact.
export const SLIM_GLYPHS: Record<string, string[]> = {
  A: ['.#.', '#.#', '###', '#.#', '#.#'],
  B: ['##.', '#.#', '##.', '#.#', '##.'],
  C: ['.##', '#..', '#..', '#..', '.##'],
  D: ['##.', '#.#', '#.#', '#.#', '##.'],
  E: ['###', '#..', '##.', '#..', '###'],
  F: ['###', '#..', '##.', '#..', '#..'],
  G: ['.##', '#..', '#.#', '#.#', '.##'],
  H: ['#.#', '#.#', '###', '#.#', '#.#'],
  I: ['###', '.#.', '.#.', '.#.', '###'],
  J: ['..#', '..#', '..#', '#.#', '.#.'],
  K: ['#.#', '#.#', '##.', '#.#', '#.#'],
  L: ['#..', '#..', '#..', '#..', '###'],
  M: ['#.#', '###', '###', '#.#', '#.#'],
  N: ['##.', '#.#', '#.#', '#.#', '#.#'],
  O: ['###', '#.#', '#.#', '#.#', '###'],
  P: ['##.', '#.#', '##.', '#..', '#..'],
  Q: ['.#.', '#.#', '#.#', '##.', '.##'],
  R: ['##.', '#.#', '##.', '#.#', '#.#'],
  S: ['.##', '#..', '.#.', '..#', '##.'],
  T: ['###', '.#.', '.#.', '.#.', '.#.'],
  U: ['#.#', '#.#', '#.#', '#.#', '###'],
  V: ['#.#', '#.#', '#.#', '#.#', '.#.'],
  W: ['#.#', '#.#', '###', '###', '#.#'],
  X: ['#.#', '#.#', '.#.', '#.#', '#.#'],
  Y: ['#.#', '#.#', '.#.', '.#.', '.#.'],
  Z: ['###', '..#', '.#.', '#..', '###'],
  '0': ['.#.', '#.#', '#.#', '#.#', '.#.'],
  '1': ['.#.', '##.', '.#.', '.#.', '###'],
  '2': ['##.', '..#', '.#.', '#..', '###'],
  '3': ['##.', '..#', '.#.', '..#', '##.'],
  '4': ['#.#', '#.#', '###', '..#', '..#'],
  '5': ['###', '#..', '##.', '..#', '##.'],
  '6': ['.##', '#..', '###', '#.#', '###'],
  '7': ['###', '..#', '.#.', '.#.', '.#.'],
  '8': ['###', '#.#', '###', '#.#', '###'],
  '9': ['###', '#.#', '###', '..#', '##.'],
  HEART: ['...', '#.#', '###', '###', '.#.'],
  BLOB: ['.#.', '###', '###', '###', '.#.'],
};

const SLIM_FROM_GLYPH_COUNT = 3;
const MAX_BAND_CELLS = 11;

type GlyphSet = Record<string, string[]>;

function glyphsFor(tokens: Token[]): GlyphSet {
  const count = tokens.filter(token => token.kind === 'glyph').length;

  return count >= SLIM_FROM_GLYPH_COUNT ? SLIM_GLYPHS : GLYPHS;
}

function bandSize(glyphs: GlyphSet): number {
  const width = glyphs.A[0].length;

  return Math.floor((MAX_BAND_CELLS + 1) / (width + 1));
}

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

export function firstEmoji(s: string): string | undefined {
  const found = splitGraphemes(s).filter(isEmoji)[0];

  return found === '❤' ? HEART_EMOJI : found;
}

export function pickBackground(fill: string): string {
  return DARK_FILLS.indexOf(fill) !== -1 ? '▫️' : EMOJI_BLANK;
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
  if (fill !== 'self') {
    return fill.emoji;
  }

  if (ALPHANUMERIC_PATTERN.test(g)) {
    return String.fromCharCode(g.charCodeAt(0) + 0xfee0);
  }

  if (g === '❤') {
    return HEART_EMOJI;
  }

  return g;
}

function blankFor(cell: string, fill: Fill): string {
  if (fill !== 'self') {
    return pickBackground(fill.emoji);
  }

  return isEmoji(cell) ? EMOJI_BLANK : BLANK;
}

function isBlankCell(cell: string): boolean {
  return cell === BLANK;
}

function renderCells(g: string, fill: Fill, glyphs: GlyphSet = GLYPHS): string[][] {
  const shape = shapeFor(g);

  if (shape.kind === 'glyph') {
    const cell = fillCell(g, fill);
    const blank = blankFor(cell, fill);

    return glyphs[shape.key].map(row =>
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
  const tokens = tokenize(s);
  const glyphs = glyphsFor(tokens);
  let extraSeparators = 0;

  tokens.forEach(token => {
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
    renderCells(token.g, fill, glyphs).forEach(row => {
      const trimmed = trimTrailingBlanks(row).join('');

      lines.push(trimmed === '' ? BLANK : trimmed);
    });
  });

  return lines.join('\n');
}

// @ AI Context: banners wrap into bands at most MAX_BAND_CELLS wide (2 glyphs at 5×5, 3 at 3×5).
// A 4-letter band (22 cells) wrapped mid-row inside a WhatsApp bubble on phones and destroyed the
// shape (reported 2026-11-17). A space also starts a new band so words stay whole.

export function banner(s: string, fill: Fill): string {
  const gap = fill === 'self' ? BLANK : pickBackground(fill.emoji);
  const tokens = tokenize(s);
  const glyphs = glyphsFor(tokens);
  const bands = toBands(tokens, bandSize(glyphs));

  if (bands.length === 0) {
    return '';
  }

  return bands
    .map(band => renderBand(band, fill, gap, glyphs))
    .join('\n' + BLANK + '\n');
}

function toBands(tokens: Token[], size: number): string[][] {
  const bands: string[][] = [];
  let current: string[] = [];

  tokens.forEach(token => {
    if (token.kind === 'space' || current.length === size) {
      if (current.length > 0) {
        bands.push(current);
      }

      current = [];
    }

    if (token.kind !== 'space') {
      current.push(token.g);
    }
  });

  if (current.length > 0) {
    bands.push(current);
  }

  return bands;
}

function renderBand(
  graphemes: string[],
  fill: Fill,
  gap: string,
  glyphs: GlyphSet
): string {
  const rows: string[][] = [];

  for (let i = 0; i < GLYPH_SIZE; i++) {
    rows.push([]);
  }

  graphemes.forEach((g, index) => {
    const columns = renderCells(g, fill, glyphs);

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

export const emojiLetters = (s: string, fill = '❤️') =>
  stacked(s, { emoji: fill });

export const emojiLettersBanner = (s: string, fill = '❤️') =>
  banner(s, { emoji: fill });

// @ AI Context: braille dot art (owner chose it 2026-11-25 over ASCII/fullwidth punctuation).
// Braille cells are one fixed width in nearly every font, U+2800 blank included, so the art stays
// aligned in proportional chat fonts where '.', '-' and spaces don't. Each glyph pixel becomes a
// 2×2 block of dots (a braille cell is 2 dots wide, 4 tall), so a 5-row glyph is 10 dots, padded to
// 3 lines. One pixel column = one cell, so a glyph is `width` cells plus a 1-cell gap. Bands wrap
// at BRAILLE_BAND_CELLS (4 letters at 5×5, 6 at the slim 3×5) and at spaces. Graphemes with no
// glyph (punctuation) are dropped: a stray '!' can't sit between dot rows.
const BRAILLE_BASE = 0x2800;
const BRAILLE_BLANK = String.fromCharCode(BRAILLE_BASE);
const BRAILLE_BAND_CELLS = 23;
const BRAILLE_ROWS = 3;
// Dot bit for [dotRow][dotColumn] inside one cell.
const BRAILLE_BITS = [
  [0x01, 0x08],
  [0x02, 0x10],
  [0x04, 0x20],
  [0x40, 0x80],
];

function brailleBand(keys: string[], glyphs: GlyphSet): string {
  const pixelRows = glyphs.A.map((_, row) =>
    keys.map(key => glyphs[key][row]).join('.')
  );
  const cells = pixelRows[0].length;
  const lines: string[] = [];

  for (let line = 0; line < BRAILLE_ROWS; line++) {
    let text = '';

    for (let cell = 0; cell < cells; cell++) {
      let bits = 0;

      for (let dotRow = 0; dotRow < 4; dotRow++) {
        const pixelRow = pixelRows[Math.floor((line * 4 + dotRow) / 2)];

        if (pixelRow && pixelRow[cell] === '#') {
          bits |= BRAILLE_BITS[dotRow][0] | BRAILLE_BITS[dotRow][1];
        }
      }

      text += String.fromCharCode(BRAILLE_BASE + bits);
    }

    const trimmed = text.replace(new RegExp(BRAILLE_BLANK + '+$'), '');

    lines.push(trimmed === '' ? BRAILLE_BLANK : trimmed);
  }

  return lines.join('\n');
}

export function brailleLetters(s: string): string {
  const tokens = tokenize(s).filter(
    token => token.kind === 'space' || shapeFor(token.g).kind === 'glyph'
  );
  const glyphs = glyphsFor(tokens);
  const size = Math.floor((BRAILLE_BAND_CELLS + 1) / (glyphs.A[0].length + 1));
  const bands = toBands(tokens, size);

  return bands
    .map(band =>
      brailleBand(
        band.map(g => (shapeFor(g) as { key: string }).key),
        glyphs
      )
    )
    .join('\n' + BRAILLE_BLANK + '\n');
}

export const LETTER_ART_FONTS: { name: string; fn: (s: string) => string }[] = [
  { name: 'braille_letters', fn: brailleLetters },
  { name: 'big_letters', fn: bigLetters },
  { name: 'big_letters_banner', fn: bigLettersBanner },
  { name: 'emoji_letters', fn: s => emojiLetters(s) },
  { name: 'emoji_letters_banner', fn: s => emojiLettersBanner(s) },
];
