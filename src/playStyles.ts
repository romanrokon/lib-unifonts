import { splitGraphemes } from './letterArt';

// @ AI Context: owner-picked styles (2026-11-26). Invisible characters are written as \u escapes; the
// Cherokee map uses literal glyphs. RTL look-alikes (Hebrew, Arabic presentation forms) are excluded on purpose:
// they trigger bidi reordering and scramble the line, the same reason as in upsideDown.ts.

export const mockingCase = (s: string): string => {
  let upper = false;

  return splitGraphemes(s)
    .map(g => {
      if (g.toLowerCase() === g.toUpperCase()) {
        return g;
      }

      const out = upper ? g.toUpperCase() : g.toLowerCase();
      upper = !upper;

      return out;
    })
    .join('');
};

export const keycaps = (s: string): string =>
  splitGraphemes(s.toUpperCase())
    .map(g => (g.trim() ? g + '⃣' : g))
    .join('');

// Only letters with a close Cherokee twin; F, N, O, Q, U and X have none and stay Latin.
const CHEROKEE: Record<string, string> = {
  A: 'Ꭺ', B: 'Ᏼ', C: 'Ꮯ', D: 'Ꭰ', E: 'Ꭼ', G: 'Ꮐ', H: 'Ꮋ',
  I: 'Ꭵ', J: 'Ꭻ', K: 'Ꮶ', L: 'Ꮮ', M: 'Ꮇ', P: 'Ꮲ', R: 'Ꭱ',
  S: 'Ꮪ', T: 'Ꭲ', V: 'Ꮩ', W: 'Ꮃ', Y: 'Ꭹ', Z: 'Ꮓ',
};

export const cherokeeAlike = (s: string): string =>
  splitGraphemes(s.toUpperCase())
    .map(g => CHEROKEE[g] ?? g)
    .join('');

// Adjacent regional indicators form a flag (U+1F1FA U+1F1F8 is 🇺🇸), so a ZWSP sits between tiles.
export const regionalLetters = (s: string): string =>
  splitGraphemes(s)
    .map(g => {
      const code = g.toUpperCase().charCodeAt(0);

      return g.length === 1 && code >= 65 && code <= 90
        ? String.fromCodePoint(0x1f1e6 + code - 65)
        : g;
    })
    .join('\u200B');

// U+2800 (blank braille) indents instead of spaces, which chat apps trim from line starts. It is
// narrow in most fonts, so each step is two of them.
export const staircase = (s: string): string =>
  splitGraphemes(s)
    .filter(g => g.trim())
    .map((g, i) => '\u2800\u2800'.repeat(i) + g)
    .join('\n');

// A box-drawn bubble cannot line up: its rules are sized in characters while the text renders in a
// proportional font (2026-11-26 render check). A thought cloud has no rule to match, so it holds.
export const speechBubble = (s: string): string =>
  [`( ${s.trim() || ' '} )`, ' o', '°'].join('\n');

// encodeURIComponent yields UTF-8 as %XX escapes; unreserved ASCII passes through as itself.
export const binaryCode = (s: string): string =>
  (encodeURIComponent(s).match(/%[0-9A-F]{2}|[^%]/g) ?? [])
    .map(t => (t.length === 3 ? parseInt(t.slice(1), 16) : t.charCodeAt(0)))
    .map(n => n.toString(2).padStart(8, '0'))
    .join(' ');
