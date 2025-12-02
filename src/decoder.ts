import fonts from './fonts.json';

const ALPHABET = fonts['serif_normal'].map;

const getReverseMap = (fontName: string): Record<string, string> => {
  // @ts-ignore
  const fontData = fonts[fontName];
  // @ts-ignore
  const map = fontData ? (fontData.map ? fontData.map : fontData) : [];

  const reverseMap: Record<string, string> = {};

  map.forEach((value: string, index: number) => {
    if (index < ALPHABET.length) {
      // Trim the value (e.g. ".- " -> ".-")
      const key = value.trim();
      // Only set if not already set (prefer first occurrence -> Uppercase)
      if (!reverseMap[key]) {
        reverseMap[key] = ALPHABET[index];
      }
    }
  });

  return reverseMap;
};

const morseMap = getReverseMap('morse_code');
const a1z26Map = getReverseMap('a1z26_cipher');

export const decodeMorse = (text: string): string => {
  // Our generator produces 1 space after each letter.
  // So "A B" becomes ".-  -... " (2 spaces between letters).
  // "AB" becomes ".- -... " (1 space between letters).
  // Standard Morse often uses / for words.

  // Split by "  " (2 spaces) or " / " for words
  const words = text.split(/  | \/ /);

  return words
    .map(word => {
      return word
        .trim()
        .split(' ')
        .map(char => {
          return morseMap[char] || '';
        })
        .join('');
    })
    .join(' ');
};

export const decodeA1Z26 = (text: string): string => {
  // "1 2" -> AB
  // "1  2" -> A B
  return text
    .split(' ')
    .map(char => {
      if (char === '') return ' '; // Preserve extra spaces
      return a1z26Map[char] || char;
    })
    .join('');
};

export const detectCipher = (
  text: string
): 'morse_code' | 'a1z26_cipher' | null => {
  const trimmed = text.trim();
  if (!trimmed) return null;

  // Morse: Only dots, dashes, spaces, slashes
  if (/^[\.\- \/]+$/.test(trimmed)) {
    // Must have at least one dot or dash
    if (/[\.\-]/.test(trimmed)) return 'morse_code';
  }

  // A1Z26: Only digits, spaces, dashes (maybe?)
  // Our encoder uses "1 ", "2 ".
  // User might type "1-26-5".
  if (/^[\d \-]+$/.test(trimmed)) {
    // Check if numbers are within 1-26 range?
    // Heuristic: if it looks like a list of numbers
    return 'a1z26_cipher';
  }

  return null;
};


