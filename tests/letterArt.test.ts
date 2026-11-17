import {
  bigLetters,
  bigLettersBanner,
  emojiLetters,
  emojiLettersBanner,
  firstEmoji,
  splitGraphemes,
  BLANK,
  LETTER_ART_FONTS,
  getAll,
} from '../src';

const HEART = '❤️';

test('stacked L is 5 rows with trailing blanks trimmed', () => {
  const fill = 'Ｌ';
  const expected = [fill, fill, fill, fill, fill.repeat(5)].join('\n');

  expect(bigLetters('L')).toBe(expected);
});

test('L❤️VE stacks 4 glyphs with 3 separator lines and a heart block', () => {
  const lines = bigLetters('L❤️VE').split('\n');

  expect(lines).toHaveLength(4 * 5 + 3);
  expect(lines.filter(line => line === BLANK)).toHaveLength(3);
  expect(lines[6]).toContain(HEART);
  expect(lines.join('')).toContain(HEART);
});

test('banner LO has 5 rows with a BLANK gap between glyphs', () => {
  const rows = bigLettersBanner('LO').split('\n');

  expect(rows).toHaveLength(5);
  rows.forEach(row => expect(row).toContain(BLANK));
  expect(rows[0]).toBe('Ｌ' + BLANK.repeat(4) + BLANK + BLANK + 'ＯＯＯ');
});

test('emoji fill uses only the fill and its background', () => {
  const output = emojiLetters('L', '🔥');
  const stripped = output.split('🔥').join('').split('\n').join('').split('🤍').join('');

  expect(output).toContain('🔥');
  expect(output).toContain('🤍');
  expect(stripped).toBe('');
});

test('light fill gets a dark background', () => {
  const output = emojiLetters('L', '🤍');

  expect(output).toContain('🖤');
  expect(output).not.toContain('🤍🖤🤍');
});

test('emoji banner rows have equal grapheme count', () => {
  const rows = emojiLettersBanner('HI', '⭐').split('\n');
  const counts = rows.map(row => splitGraphemes(row).length);

  expect(rows).toHaveLength(5);
  counts.forEach(c => expect(c).toBe(counts[0]));
});

test('firstEmoji', () => {
  expect(firstEmoji('ab🔥c')).toBe('🔥');
  expect(firstEmoji('abc')).toBeUndefined();
  expect(firstEmoji('❤')).toBe('❤️');
});

test('lowercase l renders fullwidth lowercase', () => {
  expect(bigLetters('l')).toContain('ｌ');
  expect(bigLetters('l')).not.toContain('Ｌ');
});

test('unknown characters do not throw', () => {
  expect(() => bigLetters('রো')).not.toThrow();
  expect(() => bigLettersBanner('?')).not.toThrow();
  expect(bigLetters('?')).toContain('?');
});

test('empty and whitespace-only input give empty string', () => {
  expect(bigLetters('')).toBe('');
  expect(bigLettersBanner('   ')).toBe('');
  expect(emojiLetters('')).toBe('');
  expect(emojiLettersBanner('')).toBe('');
});

test('getAll includes the 4 letter art styles in category Art', () => {
  const all = getAll('Hi');

  LETTER_ART_FONTS.map(f => f.name).forEach(name => {
    const found = all.find(font => font.name === name);

    expect(found).toBeDefined();
    expect(found.category).toBe('Art');
  });
  expect(LETTER_ART_FONTS.map(f => f.name)).toEqual([
    'big_letters',
    'big_letters_banner',
    'emoji_letters',
    'emoji_letters_banner',
  ]);
});
