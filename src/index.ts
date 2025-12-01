import { lookUp } from './utils';
export { default as getAll, IFont, TFonts } from './getAll';

type fontStyle = 'normal' | 'bold' | 'italic' | 'bold-italic';

const fontStyleMap = {
  normal: true,
  bold: true,
  italic: true,
  'bold-italic': true,
};

const fontStyleHelper = (
  s: string,
  prefix = 'serif',
  options: { fontStyle: fontStyle } = { fontStyle: 'normal' }
) => {
  const suffix = fontStyleMap[options.fontStyle] ? options.fontStyle : 'normal';
  const fontName = `${prefix}.${suffix}`;
  return lookUp(fontName, s);
};

const scriptHelper = (
  s: string,
  prefix = 'script',
  options: { fontStyle: 'normal' | 'bold' } = { fontStyle: 'normal' }
) => {
  const suffix = options.fontStyle === 'bold' ? 'bold' : 'normal';
  return lookUp(`${prefix}.${suffix}`, s);
};

export const serif = (s?: string, options?: { fontStyle: fontStyle }) =>
  fontStyleHelper(s, 'serif', options);

export const sansSerif = (s?: string, options?: { fontStyle: fontStyle }) =>
  fontStyleHelper(s, 'sans-serif', options);

export const script = (
  s: string,
  options: { fontStyle: 'normal' | 'bold' } = { fontStyle: 'normal' }
) => scriptHelper(s, 'script', options);

export const fraktur = (
  s: string,
  options: { fontStyle: 'normal' | 'bold' } = { fontStyle: 'normal' }
) => scriptHelper(s, 'fraktur', options);

export const monospace = (s: string) => lookUp('monospace.normal', s);

export const double_struck = (s: string) => lookUp('double_struck.bold', s);

export const circle = (s: string) => lookUp('circle', s);

export const box = (s: string) => lookUp('box', s);

export const inverted_square = (s: string) => lookUp('inverted_square', s);

export const fat_text = (s: string) => lookUp('fat_text', s);

export const asian_script = (s: string) => lookUp('asian_script', s);

export const asian_2 = (s: string) => lookUp('asian_2', s);

export const indian_like = (s: string) => lookUp('indian_like', s);

export const russian_way = (s: string) => lookUp('russian_way', s);

export const hacker = (s: string) => lookUp('hacker', s);

export const a1z26_cipher = (s: string) => lookUp('a1z26_cipher', s);

export const wide = (s: string) => lookUp('wide', s);

export const flipped = (s: string) => lookUp('flipped', s);

export const flipped_reverse = (s: string) => lookUp('flipped_reverse', s);

export const just_reversed = (s: string) => lookUp('just_reversed', s);

export const superscript = (s: string) => lookUp('superscript', s);

export const subscript = (s: string) => lookUp('subscript', s);

export const underline = (s: string) => lookUp('underline', s);

export const double_underline = (s: string) => lookUp('double_underline', s);

export const arrow_underline = (s: string) => lookUp('arrow_underline', s);

export const strike_through = (s: string) => lookUp('strike_through', s);

export const tilde_strike_through = (s: string) =>
  lookUp('tilde_strike_through', s);

export const slash_through = (s: string) => lookUp('slash_through', s);

export const double_slash_through = (s: string) =>
  lookUp('double_slash_through', s);

export const batman = (s: string) => lookUp('batman', s);

export const bottom_star = (s: string) => lookUp('bottom_star', s);

export const bottom_plus = (s: string) => lookUp('bottom_plus', s);

export const top_border = (s: string) => lookUp('top_border', s);

export const bottom_border = (s: string) => lookUp('bottom_border', s);

export const arrow = (s: string) => lookUp('arrow', s);

export const double_arrow = (s: string) => lookUp('double_arrow', s);

export const cross = (s: string) => lookUp('cross', s);

export const double_cross = (s: string) => lookUp('double_cross', s);

export const god_mode = (s: string) => lookUp('god_mode', s);

export const creepy_glitch = (s: string) => lookUp('creepy_glitch', s);

export const hash_between = (s: string) => lookUp('hash_between', s);

export const star_between = (s: string) => lookUp('star_between', s);

export const hearts = (s: string) => lookUp('hearts', s);

export const wavy = (s: string) => lookUp('wavy', s);

export const single_wavy = (s: string) => lookUp('single_wavy', s);

export const zigzag = (s: string) => lookUp('zigzag', s);

export const dots = (s: string) => lookUp('dots', s);

export const connected = (s: string) => lookUp('connected', s);

export const dotty = (s: string) => lookUp('dotty', s);

export const diametric_angle_frame = (s: string) =>
  lookUp('diametric_angle_frame', s);

export const thick_box = (s: string) => lookUp('thick_box', s);

export const diametric_box = (s: string) => lookUp('diametric_box', s);

export const arrow_box = (s: string) => lookUp('arrow_box', s);

export const dot_box = (s: string) => lookUp('dot_box', s);

export const weird_box = (s: string) => lookUp('weird_box', s);

export const thick_block = (s: string) => lookUp('thick_block', s);

export const curly_brace = (s: string) => lookUp('curly_brace', s);

export const squiggle = (s: string) => lookUp('squiggle', s);

export const squiggle_2 = (s: string) => lookUp('squiggle_2', s);

export const squiggle_3 = (s: string) => lookUp('squiggle_3', s);

export const squiggle_4 = (s: string) => lookUp('squiggle_4', s);

export const squiggle_5 = (s: string) => lookUp('squiggle_5', s);

export const squiggle_6 = (s: string) => lookUp('squiggle_6', s);

export const squiggle_7 = (s: string) => lookUp('squiggle_7', s);

export const squiggle_8 = (s: string) => lookUp('squiggle_8', s);

export const squiggle_9 = (s: string) => lookUp('squiggle_9', s);

export const squiggle_10 = (s: string) => lookUp('squiggle_10', s);

export const squiggle_11 = (s: string) => lookUp('squiggle_11', s);

export const squiggle_12 = (s: string) => lookUp('squiggle_12', s);

export const squiggle_13 = (s: string) => lookUp('squiggle_13', s);

export const squiggle_14 = (s: string) => lookUp('squiggle_14', s);

export const squiggle_15 = (s: string) => lookUp('squiggle_15', s);

export const squiggle_symbol = (s: string) => lookUp('squiggle_symbol', s);

export const squiggle_symbol_2 = (s: string) => lookUp('squiggle_symbol_2', s);

export const squiggle_symbol_3 = (s: string) => lookUp('squiggle_symbol_3', s);

export const squiggle_symbol_4 = (s: string) => lookUp('squiggle_symbol_4', s);

export const squiggle_symbol_5 = (s: string) => lookUp('squiggle_symbol_5', s);

export const squiggle_symbol_6 = (s: string) => lookUp('squiggle_symbol_6', s);

export const symbolic = (s: string) => lookUp('symbolic', s);

export const morse_code = (s: string) => lookUp('morse_code', s);
