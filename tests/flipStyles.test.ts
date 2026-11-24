import { small_caps, upside_down, getAll } from '../src';

test('small caps keeps capitals and turns lowercase into small capitals', () => {
  expect(small_caps('Your Name')).toBe('Yᴏᴜʀ Nᴀᴍᴇ');
});

test('small caps leaves letters with no small capital and digits alone', () => {
  expect(small_caps('qx 42')).toBe('qx 42');
});

test('upside down flips letters and reverses order, so it reads when the phone is turned', () => {
  expect(upside_down('Hello')).toBe('oʃʃǝH');
});

test('upside down flips punctuation and digits', () => {
  expect(upside_down('hi!?')).toBe('¿¡ıɥ');
  expect(upside_down('2026')).toBe('9ᄅ0ᄅ');
});

test('upside down keeps grapheme clusters intact when reversing', () => {
  expect(upside_down('a😀b')).toBe('q😀ɐ');
});

test('both are listed by getAll', () => {
  const names = getAll('a').map(f => f.name);

  expect(names).toContain('small_caps');
  expect(names).toContain('upside_down');
});
