import fonts from './fonts.json';
import { lookUp } from './utils';
import { LETTER_ART_FONTS } from './letterArt';
import { FRAMES, frameText } from './frames';
import { shapeText } from './shapes';
import { upside_down } from './upsideDown';
import {
  mockingCase,
  keycaps,
  cherokeeAlike,
  regionalLetters,
  staircase,
  speechBubble,
  binaryCode,
} from './playStyles';

export interface IFont {
  name: string;
  value: string;
  category: string;
}

export type TFonts = Array<IFont>;

/**
 * @returns All font styles with their names
 */
export default function getAll(string: string): TFonts {
  const iterable = Object.keys(fonts);
  const result = [];

  for (const name of iterable) {
    const value = lookUp(name, string);
    // @ts-ignore
    const category = fonts[name].category || 'Other';

    result.push({ name, value, category });
  }

  result.push({ name: 'upside_down', value: upside_down(string), category: 'Funky' });
  result.push({ name: 'mocking_case', value: mockingCase(string), category: 'Funky' });
  result.push({ name: 'cherokee_alike', value: cherokeeAlike(string), category: 'Funky' });
  result.push({ name: 'keycaps', value: keycaps(string), category: 'Bubble' });
  result.push({ name: 'binary_code', value: binaryCode(string), category: 'Secret' });

  LETTER_ART_FONTS.forEach(f =>
    result.push({ name: f.name, value: f.fn(string), category: 'Art' })
  );

  result.push({ name: 'regional_letters', value: regionalLetters(string), category: 'Art' });
  result.push({ name: 'staircase', value: staircase(string), category: 'Art' });
  result.push({ name: 'speech_bubble', value: speechBubble(string), category: 'Art' });

  result.push({
    name: 'shapes',
    value: shapeText(string, 'heart', 'inside'),
    category: 'Art',
  });

  result.push({
    name: 'frames',
    value: frameText(string, FRAMES[0].id),
    category: 'Art',
  });

  return result;
}
