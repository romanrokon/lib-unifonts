import {
  mockingCase,
  keycaps,
  cherokeeAlike,
  regionalLetters,
  staircase,
  speechBubble,
  binaryCode,
} from '../src/playStyles';
import getAll from '../src/getAll';

test('mocking case alternates letters only, starting lower', () => {
  expect(mockingCase('your name!')).toBe('yOuR nAmE!');
});

test('keycaps puts a keycap mark after every non-space character', () => {
  expect(keycaps('Hi 1')).toBe('H⃣I⃣ 1⃣');
});

test('cherokee look-alike maps the letters it has and keeps the rest uppercase', () => {
  expect(cherokeeAlike('Ab f')).toBe('ᎪᏴ F');
});

test('regional letters split with ZWSP so pairs never merge into flags', () => {
  expect(regionalLetters('us')).toBe('\u{1F1FA}​\u{1F1F8}');
  expect(regionalLetters('a b')).toBe('\u{1F1E6}​ ​\u{1F1E7}');
});

test('staircase steps each letter one place right and skips spaces', () => {
  expect(staircase('ab c')).toBe('a\n⠀⠀b\n⠀⠀⠀⠀c');
});

test('speech bubble is a thought cloud that needs no width matching', () => {
  expect(speechBubble(' hi ')).toBe('( hi )\n o\n°');
});

test('binary code encodes UTF-8 bytes', () => {
  expect(binaryCode('Hi')).toBe('01001000 01101001');
  expect(binaryCode('é')).toBe('11000011 10101001');
});

test('getAll exposes the new styles in their categories', () => {
  const byName = getAll('Hi').reduce<Record<string, string>>((acc, f) => {
    acc[f.name] = f.category;

    return acc;
  }, {});

  expect(byName).toMatchObject({
    mocking_case: 'Funky',
    keycaps: 'Bubble',
    cherokee_alike: 'Funky',
    binary_code: 'Secret',
    regional_letters: 'Art',
    staircase: 'Art',
    speech_bubble: 'Art',
  });
});

test('Art keeps braille first and frames last', () => {
  const art = getAll('Hi').filter(f => f.category === 'Art').map(f => f.name);

  expect(art[0]).toBe('braille_letters');
  expect(art[art.length - 1]).toBe('frames');
});
