import { brailleLetters, LETTER_ART_FONTS, getAll } from '../src';

const BRAILLE_BLANK = '⠀';
const isBraille = (ch: string) => ch.charCodeAt(0) >= 0x2800 && ch.charCodeAt(0) <= 0x28ff;

test('L is a 2x-scaled glyph: full left column, then a bottom bar of top-half dots', () => {
  expect(brailleLetters('L')).toBe(['⣿', '⣿', '⠛⠛⠛⠛⠛'].join('\n'));
});

test('output is only braille cells and newlines', () => {
  const out = brailleLetters('Good vibes 123');

  out.replace(/\n/g, '').split('').forEach(ch => expect(isBraille(ch)).toBe(true));
});

test('a 4-letter word stays on one band of 3 lines', () => {
  expect(brailleLetters('Your').split('\n')).toHaveLength(3);
});

test('a space starts a new band after a blank braille line', () => {
  const lines = brailleLetters('A B').split('\n');

  expect(lines).toHaveLength(7);
  expect(lines[3]).toBe(BRAILLE_BLANK);
});

test('characters without a glyph are dropped', () => {
  expect(brailleLetters('A!')).toBe(brailleLetters('A'));
});

test('empty and whitespace input give an empty string', () => {
  expect(brailleLetters('   ')).toBe('');
});

test('registered as braille_letters in getAll', () => {
  expect(LETTER_ART_FONTS.map(f => f.name)).toContain('braille_letters');
  expect(getAll('Hi').find(f => f.name === 'braille_letters')?.value).toBe(brailleLetters('Hi'));
});
