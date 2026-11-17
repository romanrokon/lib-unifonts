import { getAll, shapeText, SHAPES, splitGraphemes } from '../src';

const ZWSP = '​';

function cells(row: string): string[] {
  return splitGraphemes(row.split(ZWSP).join(''));
}

function gridRows(out: string, count: number): string[] {
  return out.split('\n').slice(0, count);
}

test('empty heart is a 13-wide grid', () => {
  const rows = shapeText('', 'heart', 'inside').split('\n');

  expect(rows).toHaveLength(11);
  rows.forEach(row => expect(cells(row)).toHaveLength(13));
});

test('I love you inside heart keeps rows equal and avoids flags', () => {
  const out = shapeText('I love you', 'heart', 'inside');

  gridRows(out, 11).forEach(row => expect(cells(row)).toHaveLength(13));
  expect(out).toContain('🇮');
  expect(out).not.toContain('🇮🇱');
  expect(out).not.toContain('🇱🇴');
});

test('adjacent indicators are separated by a zero-width space', () => {
  const out = shapeText('IL', 'circle', 'inside');

  expect(out).toContain('🇮' + ZWSP + '🇱' + ZWSP);
  expect(out).not.toContain('🇮🇱');
});

test('too long text falls back to below', () => {
  const out = shapeText('supercalifragilistic', 'heart', 'inside');
  const lines = out.split('\n');

  expect(lines[lines.length - 1]).toContain('supercalifragilistic');
  expect(out).not.toContain('🇸');
});

test('love inside circle is centred', () => {
  const rows = shapeText('love', 'circle', 'inside').split('\n');
  const row = rows.filter(r => r.indexOf('🇱') !== -1)[0];
  const c = cells(row);
  const first = c.indexOf('🇱');
  const lastTile = c.indexOf('🇪');
  const interior = c.indexOf('🔵') === -1 ? 0 : c.indexOf('🔵');
  const rightOutline = c.lastIndexOf('🔵');
  const left = first - interior - 1;
  const right = rightOutline - lastTile - 1;

  expect(Math.abs(left - right)).toBeLessThanOrEqual(1);
});

test('star rows are all equal width', () => {
  const rows = shapeText('hi', 'star', 'inside').split('\n');

  expect(rows).toHaveLength(12);
  rows.forEach(row => expect(cells(row)).toHaveLength(13));
});

test('star rows 4-6 have room for text', () => {
  const star = SHAPES.filter(s => s.id === 'star')[0];

  star.textRows.forEach(i => {
    const row = star.rows[i];

    expect(row.lastIndexOf('#') - row.indexOf('#') - 1).toBeGreaterThanOrEqual(5);
  });
});

test('non-Latin text falls back to below', () => {
  const out = shapeText('রোমান', 'heart', 'inside');
  const lines = out.split('\n');

  expect(lines[lines.length - 1]).toContain('রোমান');
  expect(out).not.toContain('🇷');
});

test('below mode appends plain text', () => {
  const out = shapeText('Roman', 'star', 'below');
  const lines = out.split('\n');

  expect(lines).toHaveLength(14);
  expect(lines[13]).toContain('Roman');
});

test('getAll includes shapes', () => {
  const found = getAll('hi').filter(f => f.name === 'shapes')[0];

  expect(found.category).toBe('Art');
});
