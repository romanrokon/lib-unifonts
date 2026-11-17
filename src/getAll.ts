import fonts from './fonts.json';
import { lookUp } from './utils';
import { LETTER_ART_FONTS } from './letterArt';
import { FRAMES, frameText } from './frames';
import { shapeText } from './shapes';

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

  LETTER_ART_FONTS.forEach(f =>
    result.push({ name: f.name, value: f.fn(string), category: 'Art' })
  );

  result.push({
    name: 'frames',
    value: frameText(string, FRAMES[0].id),
    category: 'Art',
  });

  result.push({
    name: 'shapes',
    value: shapeText(string, 'heart', 'inside'),
    category: 'Art',
  });

  return result;
}
