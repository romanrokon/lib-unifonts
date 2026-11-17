import { frameText, FRAMES, getAll } from '../src';

test('frameText wraps trimmed text', () => {
  expect(frameText('love', 'stars')).toBe('⋆｡°✩ love ✩°｡⋆');
});

test('blank input gives empty string', () => {
  expect(frameText('  ', 'stars')).toBe('');
});

test('unknown id falls back to first frame', () => {
  expect(frameText('x', 'nope')).toBe(frameText('x', FRAMES[0].id));
});

test('getAll includes new art names and drops heart ones', () => {
  const names = getAll('Hi').map(f => f.name);

  expect(names).toContain('emoji_letters');
  expect(names).toContain('emoji_letters_banner');
  expect(names).toContain('frames');
  expect(names).not.toContain('heart_letters');
});
