import fonts from './fonts.json';

type fontMap = {
  [key: string]: string | undefined;
};

export const toFontMap = (xs: string[]): fontMap => {
  // @ts-ignore
  const serifNormal = fonts['serif_normal'];
  // @ts-ignore
  const keys = (serifNormal.map ? serifNormal.map : serifNormal) as string[];
  return keys.reduce((acc, key, index) => {
    if (xs[index]) {
      acc[key] = xs[index];
    }
    return acc;
  }, {});
};

export const strMap = (f: (c: string) => string, s = ''): string => {
  let res = '';
  for (let character of s) {
    res += f(character);
  }
  return res;
};

export const lookUp = (fontName: string, s = ''): string => {
  const fontData = fonts[fontName];
  // @ts-ignore
  const map = fontData ? (fontData.map ? fontData.map : fontData) : [];
  const fontMap = toFontMap(map || {});
  return strMap(c => (fontMap[c] ? fontMap[c] : c), s);
};
