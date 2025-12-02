import {
  getAll,
  serif,
  sansSerif,
  script,
  fraktur,
  monospace,
  double_struck,
  circle,
  box,
  inverted_square,
  fat_text,
  asian_script,
  asian_2,
  indian_like,
  russian_way,
  hacker,
  a1z26_cipher,
  diametric_angle_frame,
  thick_box,
  diametric_box,
  arrow_box,
  dot_box,
  weird_box,
  thick_block,
  curly_brace,
  wide,
  flipped,
  flipped_reverse,
  just_reversed,
  arrow,
  arrow_underline,
  batman,
  bottom_border,
  bottom_plus,
  bottom_star,
  creepy_glitch,
  cross,
  double_arrow,
  double_cross,
  double_slash_through,
  double_underline,
  god_mode,
  slash_through,
  strike_through,
  subscript,
  superscript,
  tilde_strike_through,
  top_border,
  underline,
  connected,
  dots,
  dotty,
  hash_between,
  hearts,
  single_wavy,
  star_between,
  wavy,
  zigzag,
  squiggle,
  squiggle_2,
  squiggle_3,
  squiggle_4,
  squiggle_5,
  squiggle_6,
  squiggle_7,
  squiggle_8,
  squiggle_9,
  squiggle_10,
  squiggle_11,
  squiggle_12,
  squiggle_13,
  squiggle_14,
  squiggle_15,
  squiggle_symbol,
  squiggle_symbol_2,
  squiggle_symbol_3,
  squiggle_symbol_4,
  squiggle_symbol_5,
  squiggle_symbol_6,
  symbolic,
  morse_code,
  atbash_cipher,
  full_width,
  russian,
  andalusia,
  manga,
  rune,
  comic,
  bent,
  side_squiggles,
  top_squiggles,
  box_lines,
  serif_normal,
  serif_bold,
  serif_italic,
  serif_bold_italic,
  monospace_normal,
  sans_serif_normal,
  sans_serif_bold,
  sans_serif_italic,
  sans_serif_bold_italic,
  double_struck_bold,
  script_normal,
  accent,
  acute,
  arabic,
  bubble_black,
  fraktur_bold,
  fraktur_normal,
  funky,
  heavy,
  inverted,
  japanese,
  japanese_script,
  leet_extreme,
  linear,
  math_bold,
  math_italic,
  math_sans,
  math_sans_bold,
  math_sans_bold_italic,
  math_sans_italic,
  parenthesis,
  rock_dots,
  script_bold,
  squared,
  stroked,
} from '../src';

const unTouchStr = '我爱你';
const origin =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' + unTouchStr;
const origin_alpha =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' + unTouchStr;

test('getAll', () => {
  expect(getAll(origin)).toBeInstanceOf(Array);
});

test('serif', () => {
  expect(serif('hello, world!')).toEqual('hello, world!');
  expect(serif()).toEqual('');
  expect(serif(origin, { fontStyle: 'italic' })).toEqual(
    '𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧0123456789我爱你'
  );
});

test('sansSerif', () => {
  expect(sansSerif(origin)).toEqual(
    '𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫我爱你'
  );
});

test('script', () => {
  expect(script(origin)).toEqual(
    '𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏0123456789我爱你'
  );
});

test('fraktur', () => {
  expect(fraktur(origin, { fontStyle: 'bold' })).toEqual(
    '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟0123456789我爱你'
  );
});

test('monospace', () => {
  expect(monospace(origin)).toEqual(
    '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿我爱你'
  );
});

test('double_struck', () => {
  expect(double_struck(origin)).toEqual(
    '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡我爱你'
  );
});

test('circle', () => {
  expect(circle(origin)).toEqual(
    'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⓪①②③④⑤⑥⑦⑧⑨我爱你'
  );
});

test('box', () => {
  expect(box(origin)).toEqual(
    '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉0123456789我爱你'
  );
});

test('inverted_square', () => {
  expect(inverted_square(origin)).toEqual(
    '🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉0123456789我爱你'
  );
});

test('fat_text', () => {
  expect(fat_text(origin)).toEqual(
    'ᗩᗷᑕᗪᗴᖴǤᕼᎥᒎᛕᒪᗰᑎᗝᑭɊᖇᔕ丅ᑌᐯᗯ᙭Ƴ乙ᗩᗷᑕᗪᗴᖴǤᕼᎥᒎᛕᒪᗰᑎᗝᑭɊᖇᔕ丅ᑌᐯᗯ᙭Ƴ乙0123456789我爱你'
  );
});

test('asian_script', () => {
  expect(asian_script(origin)).toEqual(
    '卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙0123456789我爱你'
  );
});

test('asian_2', () => {
  expect(asian_2(origin)).toEqual(
    'ﾑ乃ᄃり乇ｷムんﾉﾌズﾚﾶ刀のｱゐ尺丂ｲひ√Wﾒﾘ乙ﾑ乃ᄃり乇ｷムんﾉﾌズﾚﾶ刀のｱゐ尺丂ｲひ√Wﾒﾘ乙0123456789我爱你'
  );
});

test('indian_like', () => {
  expect(indian_like(origin)).toEqual(
    'คც८ძ૯Բ૭ҺɿʆқՆɱՈ૦ƿҩՐς੮υ౮ω૪עઽคც८ძ૯Բ૭ҺɿʆқՆɱՈ૦ƿҩՐς੮υ౮ω૪עઽ0123456789我爱你'
  );
});

test('russian_way', () => {
  expect(russian_way(origin)).toEqual(
    'АБCДЄFGHЇJКГѪЙѲPФЯ$TЦѴШЖЧЗабcдёfgнїjкгѫпѳpфя$тцѵщжчз0123456789我爱你'
  );
});

test('hacker', () => {
  expect(hacker(origin)).toEqual(
    '48CD3F6HIJKLMN0PQR57UVWXY2@bcdef9h1jklmn0pqrstuvwxyz0123456789我爱你'
  );
});

test('a1Z26_cipher', () => {
  expect(a1z26_cipher(origin_alpha)).toEqual(
    '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 我爱你'
  );
});

test('wide', () => {
  expect(wide(origin)).toEqual(
    'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９我爱你'
  );
});

test('flipped', () => {
  expect(flipped(origin)).toEqual(
    '∀ᙠƆᗡƎℲ⅁HIſ⋊˥WNOԀΌᴚS⊥∩ΛMX⅄Zɐqɔpǝɟɓɥıɾʞlɯuodbɹsʇnʌʍxʎz0⇂ᄅƐㄣގ9ㄥ86我爱你'
  );
});

test('flipped_reverse', () => {
  expect(flipped_reverse(origin)).toEqual(
    'Z⅄XMΛ∩⊥SᴚΌԀONW˥⋊ſIH⅁ℲƎᗡƆᙠ∀zʎxʍʌnʇsɹbdouɯlʞɾıɥɓɟǝpɔqɐ68ㄥ9ގㄣƐᄅ⇂0我爱你'
  );
});

test('just_reversed', () => {
  expect(just_reversed(origin)).toEqual(
    'ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba0123456789我爱你'
  );
});

test('superscript', () => {
  expect(superscript(origin)).toEqual(
    'ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ⁰¹²³⁴⁵⁶⁷⁸⁹我爱你'
  );
});

test('subscript', () => {
  expect(subscript(origin)).toEqual(
    'ₐBCDₑFGHᵢⱼKLMNₒPQᵣSTᵤᵥWₓYZₐ𝚋𝚌𝚍ₑfg𝓱ᵢⱼ𝓴ᄂᗰ𝚗ₒ𝐩qᵣ𝘴𝚝ᵤᵥwₓyz₀₁₂₃₄₅₆₇₈₉我爱你'
  );
});

test('underline', () => {
  expect(underline(origin)).toEqual(
    'A̲̲B̲̲C̲̲D̲̲E̲̲F̲̲G̲̲H̲̲I̲̲J̲̲K̲̲L̲̲M̲̲N̲̲O̲̲P̲̲Q̲̲R̲̲S̲̲T̲̲U̲̲V̲̲W̲̲X̲̲Y̲̲Z̲̲a̲̲b̲̲c̲̲d̲̲e̲̲f̲̲g̲̲h̲̲i̲̲j̲̲k̲̲l̲̲m̲̲n̲̲o̲̲p̲̲q̲̲r̲̲s̲̲t̲̲u̲̲v̲̲w̲̲x̲̲y̲̲z̲̲0̲̲1̲̲2̲̲3̲̲4̲̲5̲̲6̲̲7̲̲8̲̲9̲我爱你'
  );
});

test('double_underline', () => {
  expect(double_underline(origin)).toEqual(
    'A̳̳B̳̳C̳̳D̳̳E̳̳F̳̳G̳̳H̳̳I̳̳J̳̳K̳̳L̳̳M̳̳N̳̳O̳̳P̳̳Q̳̳R̳̳S̳̳T̳̳U̳̳V̳̳W̳̳X̳̳Y̳̳Z̳̳a̳̳b̳̳c̳̳d̳̳e̳̳f̳̳g̳̳h̳̳i̳̳j̳̳k̳̳l̳̳m̳̳n̳̳o̳̳p̳̳q̳̳r̳̳s̳̳t̳̳u̳̳v̳̳w̳̳x̳̳y̳̳z̳̳0̳̳1̳̳2̳̳3̳̳4̳̳5̳̳6̳̳7̳̳8̳̳9̳我爱你'
  );
});

test('arrow_underline', () => {
  expect(arrow_underline(origin)).toEqual(
    'A͢B͢C͢D͢E͢F͢G͢H͢I͢J͢K͢L͢M͢N͢O͢P͢Q͢R͢S͢T͢U͢V͢W͢X͢Y͢Z͢a͢b͢c͢d͢e͢f͢g͢h͢i͢j͢k͢l͢m͢n͢o͢p͢q͢r͢s͢t͢u͢v͢w͢x͢y͢z͢0͢1͢2͢3͢4͢5͢6͢7͢8͢9͢我爱你'
  );
});

test('strike_through', () => {
  expect(strike_through(origin)).toEqual(
    'A̶̶B̶̶C̶̶D̶̶E̶̶F̶̶G̶̶H̶̶I̶̶J̶̶K̶̶L̶̶M̶̶N̶̶O̶̶P̶̶Q̶̶R̶̶S̶̶T̶̶U̶̶V̶̶W̶̶X̶̶Y̶̶Z̶̶a̶̶b̶̶c̶̶d̶̶e̶̶f̶̶g̶̶h̶̶i̶̶j̶̶k̶̶l̶̶m̶̶n̶̶o̶̶p̶̶q̶̶r̶̶s̶̶t̶̶u̶̶v̶̶w̶̶x̶̶y̶̶z̶̶0̶̶1̶̶2̶̶3̶̶4̶̶5̶̶6̶̶7̶̶8̶̶9̶我爱你'
  );
});

test('tilde_strike_through', () => {
  expect(tilde_strike_through(origin)).toEqual(
    'A̴̴B̴̴C̴̴D̴̴E̴̴F̴̴G̴̴H̴̴I̴̴J̴̴K̴̴L̴̴M̴̴N̴̴O̴̴P̴̴Q̴̴R̴̴S̴̴T̴̴U̴̴V̴̴W̴̴X̴̴Y̴̴Z̴̴a̴̴b̴̴c̴̴d̴̴e̴̴f̴̴g̴̴h̴̴i̴̴j̴̴k̴̴l̴̴m̴̴n̴̴o̴̴p̴̴q̴̴r̴̴s̴̴t̴̴u̴̴v̴̴w̴̴x̴̴y̴̴z̴̴0̴̴1̴̴2̴̴3̴̴4̴̴5̴̴6̴̴7̴̴8̴̴9̴我爱你'
  );
});

test('slash_through', () => {
  expect(slash_through(origin)).toEqual(
    '𝙰̷𝙱̷𝙲̷𝙳̷𝙴̷𝙵̷𝙶̷𝙷̷𝙸̷𝙹̷𝙺̷𝙻̷𝙼̷𝙽̷𝙾̷𝙿̷𝚀̷𝚁̷𝚂̷𝚃̷𝚄̷𝚅̷𝚆̷𝚇̷𝚈̷𝚉̷𝚊̷𝚋̷𝚌̷𝚍̷𝚎̷𝚏̷𝚐̷𝚑̷𝚒̷𝚓̷𝚔̷𝚕̷𝚖̷𝚗̷𝚘̷𝚙̷𝚚̷𝚛̷𝚜̷𝚝̷𝚞̷𝚟̷𝚠̷𝚡̷𝚢̷𝚣̷𝟶̷𝟷̷𝟸̷𝟹̷𝟺̷𝟻̷𝟼̷𝟽̷𝟾̷𝟿̷我爱你'
  );
});

test('double_slash_through', () => {
  expect(double_slash_through(origin)).toEqual(
    'A̷̷B̷̷C̷̷D̷̷E̷̷F̷̷G̷̷H̷̷I̷̷J̷̷K̷̷L̷̷M̷̷N̷̷O̷̷P̷̷Q̷̷R̷̷S̷̷T̷̷U̷̷V̷̷W̷̷X̷̷Y̷̷Z̷̷a̷̷b̷̷c̷̷d̷̷e̷̷f̷̷g̷̷h̷̷i̷̷j̷̷k̷̷l̷̷m̷̷n̷̷o̷̷p̷̷q̷̷r̷̷s̷̷t̷̷u̷̷v̷̷w̷̷x̷̷y̷̷z̷̷0̷̷1̷̷2̷̷3̷̷4̷̷5̷̷6̷̷7̷̷8̷̷9̷我爱你'
  );
});

test('batman', () => {
  expect(batman(origin)).toEqual(
    'A̼B̼C̼D̼E̼F̼G̼H̼I̼J̼K̼L̼M̼N̼O̼P̼Q̼R̼S̼T̼U̼V̼W̼X̼Y̼Z̼a̼b̼c̼d̼e̼f̼g̼h̼i̼j̼k̼l̼m̼n̼o̼p̼q̼r̼s̼t̼u̼v̼w̼x̼y̼z̼0̼1̼2̼3̼4̼5̼6̼7̼8̼9̼我爱你'
  );
});

test('bottom_star', () => {
  expect(bottom_star(origin)).toEqual(
    'A͙B͙C͙D͙E͙F͙G͙H͙I͙J͙K͙L͙M͙N͙O͙P͙Q͙R͙S͙T͙U͙V͙W͙X͙Y͙Z͙a͙b͙c͙d͙e͙f͙g͙h͙i͙j͙k͙l͙m͙n͙o͙p͙q͙r͙s͙t͙u͙v͙w͙x͙y͙z͙0͙1͙2͙3͙4͙5͙6͙7͙8͙9͙我爱你'
  );
});

test('bottom_plus', () => {
  expect(bottom_plus(origin)).toEqual(
    'A̟B̟C̟D̟E̟F̟G̟H̟I̟J̟K̟L̟M̟N̟O̟P̟Q̟R̟S̟T̟U̟V̟W̟X̟Y̟Z̟a̟b̟c̟d̟e̟f̟g̟h̟i̟j̟k̟l̟m̟n̟o̟p̟q̟r̟s̟t̟u̟v̟w̟x̟y̟z̟0̟1̟2̟3̟4̟5̟6̟7̟8̟9̟我爱你'
  );
});

test('top_border', () => {
  expect(top_border(origin)).toEqual(
    'A͆B͆C͆D͆E͆F͆G͆H͆I͆J͆K͆L͆M͆N͆O͆P͆Q͆R͆S͆T͆U͆V͆W͆X͆Y͆Z͆a͆b͆c͆d͆e͆f͆g͆h͆i͆j͆k͆l͆m͆n͆o͆p͆q͆r͆s͆t͆u͆v͆w͆x͆y͆z͆0͆1͆2͆3͆4͆5͆6͆7͆8͆9͆我爱你'
  );
});

test('bottom_border', () => {
  expect(bottom_border(origin)).toEqual(
    'A̺B̺C̺D̺E̺F̺G̺H̺I̺J̺K̺L̺M̺N̺O̺P̺Q̺R̺S̺T̺U̺V̺W̺X̺Y̺Z̺a̺b̺c̺d̺e̺f̺g̺h̺i̺j̺k̺l̺m̺n̺o̺p̺q̺r̺s̺t̺u̺v̺w̺x̺y̺z̺0̺1̺2̺3̺4̺5̺6̺7̺8̺9̺我爱你'
  );
});

test('arrow', () => {
  expect(arrow(origin)).toEqual(
    'A͎B͎C͎D͎E͎F͎G͎H͎I͎J͎K͎L͎M͎N͎O͎P͎Q͎R͎S͎T͎U͎V͎W͎X͎Y͎Z͎a͎b͎c͎d͎e͎f͎g͎h͎i͎j͎k͎l͎m͎n͎o͎p͎q͎r͎s͎t͎u͎v͎w͎x͎y͎z͎0͎1͎2͎3͎4͎5͎6͎7͎8͎9͎我爱你'
  );
});

test('double_arrow', () => {
  expect(double_arrow(origin)).toEqual(
    'A͎͎B͎͎C͎͎D͎͎E͎͎F͎͎G͎͎H͎͎I͎͎J͎͎K͎͎L͎͎M͎͎N͎͎O͎͎P͎͎Q͎͎R͎͎S͎͎T͎͎U͎͎V͎͎W͎͎X͎͎Y͎͎Z͎͎a͎͎b͎͎c͎͎d͎͎e͎͎f͎͎g͎͎h͎͎i͎͎j͎͎k͎͎l͎͎m͎͎n͎͎o͎͎p͎͎q͎͎r͎͎s͎͎t͎͎u͎͎v͎͎w͎͎x͎͎y͎͎z͎͎0͎͎1͎͎2͎͎3͎͎4͎͎5͎͎6͎͎7͎͎8͎͎9͎我爱你'
  );
});

test('cross', () => {
  expect(cross(origin)).toEqual(
    'A͓̽B͓̽C͓̽D͓̽E͓̽F͓̽G͓̽H͓̽I͓̽J͓̽K͓̽L͓̽M͓̽N͓̽O͓̽P͓̽Q͓̽R͓̽S͓̽T͓̽U͓̽V͓̽W͓̽X͓̽Y͓̽Z͓̽a͓̽b͓̽c͓̽d͓̽e͓̽f͓̽g͓̽h͓̽i͓̽j͓̽k͓̽l͓̽m͓̽n͓̽o͓̽p͓̽q͓̽r͓̽s͓̽t͓̽u͓̽v͓̽w͓̽x͓̽y͓̽z͓̽0͓̽1͓̽2͓̽3͓̽4͓̽5͓̽6͓̽7͓̽8͓̽9͓̽我爱你'
  );
});

test('double_cross', () => {
  expect(double_cross(origin)).toEqual(
    'A͓͓̽̽B͓͓̽̽C͓͓̽̽D͓͓̽̽E͓͓̽̽F͓͓̽̽G͓͓̽̽H͓͓̽̽I͓͓̽̽J͓͓̽̽K͓͓̽̽L͓͓̽̽M͓͓̽̽N͓͓̽̽O͓͓̽̽P͓͓̽̽Q͓͓̽̽R͓͓̽̽S͓͓̽̽T͓͓̽̽U͓͓̽̽V͓͓̽̽W͓͓̽̽X͓͓̽̽Y͓͓̽̽Z͓͓̽̽a͓͓̽̽b͓͓̽̽c͓͓̽̽d͓͓̽̽e͓͓̽̽f͓͓̽̽g͓͓̽̽h͓͓̽̽i͓͓̽̽j͓͓̽̽k͓͓̽̽l͓͓̽̽m͓͓̽̽n͓͓̽̽o͓͓̽̽p͓͓̽̽q͓͓̽̽r͓͓̽̽s͓͓̽̽t͓͓̽̽u͓͓̽̽v͓͓̽̽w͓͓̽̽x͓͓̽̽y͓͓̽̽z͓͓̽̽0͓͓̽̽1͓͓̽̽2͓͓̽̽3͓͓̽̽4͓͓̽̽5͓͓̽̽6͓͓̽̽7͓͓̽̽8͓͓̽̽9͓̽我爱你'
  );
});

test('god_mode', () => {
  expect(god_mode(origin)).toEqual(
    'A҉҉B҉҉C҉҉D҉҉E҉҉F҉҉G҉҉H҉҉I҉҉J҉҉K҉҉L҉҉M҉҉N҉҉O҉҉P҉҉Q҉҉R҉҉S҉҉T҉҉U҉҉V҉҉W҉҉X҉҉Y҉҉Z҉҉a҉҉b҉҉c҉҉d҉҉e҉҉f҉҉g҉҉h҉҉i҉҉j҉҉k҉҉l҉҉m҉҉n҉҉o҉҉p҉҉q҉҉r҉҉s҉҉t҉҉u҉҉v҉҉w҉҉x҉҉y҉҉z҉҉0҉҉1҉҉2҉҉3҉҉4҉҉5҉҉6҉҉7҉҉8҉҉9҉我爱你'
  );
});

test('creepy_glitch', () => {
  expect(creepy_glitch(origin)).toEqual(
    'Ạ̴̵̗̟̯̼̙̟͙͔̖̤̹̣͕̪̯̹́̎̀̓̀B̸̷̨̡̲̦̫͈̮̺̝̣͂̏͗́̅͛͗̆͊̈́̅C̸̸̡̧͈̪̗̖̭̤͔͇̘̬͇̖̫̿́́̌͆̔̅̉̿̔̈́͐̕͘̕̚̕͠ͅD̷̷̢͓͓̫̦̦͙̙̥̲̣̥͛͛̌̓̐̑͛̋́͘͘̕͜Ę̸̷͚͈̻̖̘̺͕̩͍̰͔̺̹̗̺̭͎̜̀̈́̐̇̈́̓̃̆̓͜͠F̷̵̛̙̝̺̹͉̭̮̟̲̉̍̊͗͂̊̎͒͆̚͜͠Ğ̴̴̼͍͖͉͇̤̬͕̺̬̺̾̄̀͆̎̊̉̏͘͜͝H̸̶̢̩̹͙̩͇͎̜̼̣̜̟̥̬͕́͒͊̂̽͋̒̀̈́͊͜͠͝͝Ị̸̷̛̪̳͈̞̗̦̞̯͚̻̭̲̭̈̀̎̉̔͒̉͑̃̾̋̎̃̄͘J̶̶̡̬̠͚̟̲̩̺̯̓̀̇̀̑̆͗̏̈́̊͒̃͘̕K̶̶̨̛̠̲̺̜͎͇̻̩̮͇̞̩̮̯̏̔͗͑̐̂̂̋̈́̈̓͆͛̉͛̊̕͝͠L̵̷̨̳̳͚̭̪͈͚̙̜͇͓͆̈́̒͑̇̋͗̃̋̓̏͋̋͘͜͝͝ͅM̶̷̙̼̥̦͚͍̣̙̫̝̏̃͛̀̾͊̍̕ͅN̶̸̜̹̘̩͕̹̱̪̯̞̼͉̭̿̊͒̅̍̈́̐̎͂͘͘̕͘͝ͅǪ̶̸͙̠̮͔̔̉͑͌́̉̂̋̐́͌̍̋͂̆̅̈̆̓P̴̶̨̛̛͇̦̠̫̱̖͔̬͔̠̀̌̍̊̔Q̶̴̨͎̪̖̗̗̩̰̦̮̠̝̩̬̏̒̏̀͗́̈̊̂́̄͂̌͆̓̆̀͘͜͝͠ͅR̴̴̢̜̫̰͖̣̦̼͎̱͙̬̞͓̈́̇̓̓̿̇͛̐̌̃̿̇̚͘͝͝S̷̵̡̡̮̝̥̜̣͖̼͓̹̠̮͙̟̥͊͒͑̇̊́̑̀͝ͅT̴̶͎̱͎̗̠̪́̑́̕͜Ų̴̶̡̗̗̙͓̻̯̣̗͑̑̃̐̇͂̓̽͒̿̕̕͜͜ͅV̴̷͙̥̣̻̼͆̏̑͛̋͌̀͊́̇̆̏͗́̅̀͘Ẁ̷̶̛̻̠̭̬͎̇̈́́͊̇̀̌͝X̶̶̨̛͚͎͈̦̪̟̠̘͌͗̔̽͒̓̔̒̐͑̓͘Ÿ̷̷̨̧̬̤͇̱̱̙̳̮͓̉́̿̔̎́̾͑̊͗̀̚͜͠͠Z̷̷̡̧̹̣͕͎͎͓͍͙̖̃͂̏̎̈́̀̐̆̓͗̍̐̓̓͆͜͝ͅa̴̶̢͚̰̪͓͈̦̺̯͙̺̮̭͇̋̃́̉̐̈́̑̂̓̀̈́̍͘͝b̸̸̧̨̦͈̹̣̰̙̲͓̞̏̅̑̿̓̃͑̈̕̕̕ͅç̴̶̝̼͙͖̜̹͚̱̺̱͇̫̲͚͋̊̅̉̈͑̌̌ͅͅd̴̴̡̨̠̠̺͓̳̞̺̫̥̳͈̤͍̜̅̀͋̚e̷̴̘̥͔̼̲͇͉̪̩̟͙̲͈͆̿̅͑̇̓̒͘͘͠f̶̷̨̩̫͖͔̬̥̪̞̠͓͒̑̽̏̈́͋̍͑̏̃͆̋̍̚͝͝ͅg̴̵̯̰͖̠̣̘̬͙͎̃͑̔̃̌́̅h̷̸̨̛̛̜͙̙̪̳̯̩̻̼͂̎͐͂̈̉̿̕͝í̴̷̼̮̗̮̮̱̹̼̟̬̘̬͙͓̦̀̔j̸̸̱̤̻̭̼̹̱̩́̅́̈́̊̈̍̂̚̕͠͝ķ̵̶̧̻̺̱̟̲̺͔͇̬̱̩̖͐́̔̾͗̑͋͋͜l̶̶̡̢̡͉̜̺̲̝͈̩̲̓̒̉̋̒̄̇m̶̶̡̧̙̜̣̯̺͙̫̿͑̐́̒͊̿̇͊̊͝ṇ̶̶̝͍͇̱̗͆̏̈́̀͌̚ō̵̸̧̞̜̟͙̩̮̹͍̲͇̫͙͚̖̰̣̘͛̄̄̓̔̄͑̈̄̚̕͝p̷̴̲͍͈̭͙͙̠̤͈͕͓̯̙̃̅̇̀̇̓̈́̑̉̎͐͘͜q̷̷̡̨̛̘͔͕̻̗͓̗̝͙̲͓̩͈̬̈̃̋̈́̒ͅr̷̷͕̤͍̖̻̬̞̤̟̮̳̪̘̞̖͌̿͐͛͗͒̎́̓̾́̈̚͠ș̴̵͔̠̳̥̲̪̦̣̯̖̄̎̿̾̾̍͌̃́́͑̑̕͘͘̚t̶̷̨̨͈͓̗̙̩̹͍̟͓̟̼̬͌͂̀̒̒͗͊͗̀̓̈́̚͝u̶̶̮̞̼̯̺̮̹̰͕̻̜̖̽̋͊̐̋͆̎́͂͛ͅv̴̷̢̨̛̙̹̮͈̝̟̿̾̈́̊̂͋͗̾́̈́̂̉̅͘̚͘͜͝͝͝w̸̶̛̖̙̟̪͈̹͈̘͎̫̘̓̏́̉͊̎̌̃̿̃̓̍̂̕͝x̸̴̧̺̗͉͍͍̊͂̄́̀͑̽̇͗̅̽͆̈́͑̒̐̂͝͝y̴̶̧̩̯͔͍̼̝̰̬͑̊͐̎̓͐̓̒͌͊̍̃́̿̈̆͘͜z̶̶̧͇͇͈̘̦̥̤͖͙̋̔͆̏͗̀́͋̋͠0̴̴̨͉̠̤̼̫̭͓̙̹͙̣̆͛̈̈͗̃͆̾̃̑̚͝1̸̵͕̭̙̉̀͒̓̚͝ͅ2̷̸̧͙̜̤̯̳̼̼͚̘̹̟̦͑̈́̀̔́̇̈́̿͜͝3̶̴̧̞̲͖͍͚͕͇̓͌̿̀̿̿̆4̶̴͔̠̜͛̽́̆͒̀̈́̌̏̈́̏͆͝5̵̷̨̛͇̟͖̖͍̞͌̈͋͂͂̔̅̎̔͐͗͑̎̂̚͜͝͠6̵̵̥̥̱͔̗̮͚̘̣̾̈͛̑̀̃̾̽͂͝7̷̶̨̡͕̠̞̖̙͈͐̊̄̏̽͑̀̔͂̎̎͘̚8̵̶̡̣͇͔̰̮̣̻̳̒̏͂̾́̾̃͐̀̾̈́̾͜͝ͅ9̶͙̮̠͓͈̜̦̰̥̍͜͝我爱你'
  );
});

test('hash_between', () => {
  expect(hash_between(origin)).toEqual(
    'A⨳B⨳C⨳D⨳E⨳F⨳G⨳H⨳I⨳J⨳K⨳L⨳M⨳N⨳O⨳P⨳Q⨳R⨳S⨳T⨳U⨳V⨳W⨳X⨳Y⨳Z⨳a⨳b⨳c⨳d⨳e⨳f⨳g⨳h⨳i⨳j⨳k⨳l⨳m⨳n⨳o⨳p⨳q⨳r⨳s⨳t⨳u⨳v⨳w⨳x⨳y⨳z⨳0⨳1⨳2⨳3⨳4⨳5⨳6⨳7⨳8⨳9⨳我爱你'
  );
});

test('star_between', () => {
  expect(star_between(origin)).toEqual(
    'A⋆B⋆C⋆D⋆E⋆F⋆G⋆H⋆I⋆J⋆K⋆L⋆M⋆N⋆O⋆P⋆Q⋆R⋆S⋆T⋆U⋆V⋆W⋆X⋆Y⋆Z⋆a⋆b⋆c⋆d⋆e⋆f⋆g⋆h⋆i⋆j⋆k⋆l⋆m⋆n⋆o⋆p⋆q⋆r⋆s⋆t⋆u⋆v⋆w⋆x⋆y⋆z⋆0⋆1⋆2⋆3⋆4⋆5⋆6⋆7⋆8⋆9⋆我爱你'
  );
});

test('hearts', () => {
  expect(hearts(origin)).toEqual(
    'A♥B♥C♥D♥E♥F♥G♥H♥I♥J♥K♥L♥M♥N♥O♥P♥Q♥R♥S♥T♥U♥V♥W♥X♥Y♥Z♥a♥b♥c♥d♥e♥f♥g♥h♥i♥j♥k♥l♥m♥n♥o♥p♥q♥r♥s♥t♥u♥v♥w♥x♥y♥z♥0♥1♥2♥3♥4♥5♥6♥7♥8♥9♥我爱你'
  );
});

test('wavy', () => {
  expect(wavy(origin)).toEqual(
    'A≋B≋C≋D≋E≋F≋G≋H≋I≋J≋K≋L≋M≋N≋O≋P≋Q≋R≋S≋T≋U≋V≋W≋X≋Y≋Z≋a≋b≋c≋d≋e≋f≋g≋h≋i≋j≋k≋l≋m≋n≋o≋p≋q≋r≋s≋t≋u≋v≋w≋x≋y≋z≋0≋1≋2≋3≋4≋5≋6≋7≋8≋9≋我爱你'
  );
});

test('single_wavy', () => {
  expect(single_wavy(origin)).toEqual(
    'A∿B∿C∿D∿E∿F∿G∿H∿I∿J∿K∿L∿M∿N∿O∿P∿Q∿R∿S∿T∿U∿V∿W∿X∿Y∿Z∿a∿b∿c∿d∿e∿f∿g∿h∿i∿j∿k∿l∿m∿n∿o∿p∿q∿r∿s∿t∿u∿v∿w∿x∿y∿z∿0∿1∿2∿3∿4∿5∿6∿7∿8∿9∿我爱你'
  );
});

test('zigzag', () => {
  expect(zigzag(origin)).toEqual(
    'A͛⦚B͛⦚C͛⦚D͛⦚E͛⦚F͛⦚G͛⦚H͛⦚I͛⦚J͛⦚K͛⦚L͛⦚M͛⦚N͛⦚O͛⦚P͛⦚Q͛⦚R͛⦚S͛⦚T͛⦚U͛⦚V͛⦚W͛⦚X͛⦚Y͛⦚Z͛⦚a͛⦚b͛⦚c͛⦚d͛⦚e͛⦚f͛⦚g͛⦚h͛⦚i͛⦚j͛⦚k͛⦚l͛⦚m͛⦚n͛⦚o͛⦚p͛⦚q͛⦚r͛⦚s͛⦚t͛⦚u͛⦚v͛⦚w͛⦚x͛⦚y͛⦚z͛⦚0͛⦚1͛⦚2͛⦚3͛⦚4͛⦚5͛⦚6͛⦚7͛⦚8͛⦚9͛⦚我爱你'
  );
});

test('dots', () => {
  expect(dots(origin)).toEqual(
    'Å⫶B̊⫶C̊⫶D̊⫶E̊⫶F̊⫶G̊⫶H̊⫶I̊⫶J̊⫶K̊⫶L̊⫶M̊⫶N̊⫶O̊⫶P̊⫶Q̊⫶R̊⫶S̊⫶T̊⫶Ů⫶V̊⫶W̊⫶X̊⫶Y̊⫶Z̊⫶å⫶b̊⫶c̊⫶d̊⫶e̊⫶f̊⫶g̊⫶h̊⫶i̊⫶j̊⫶k̊⫶l̊⫶m̊⫶n̊⫶o̊⫶p̊⫶q̊⫶r̊⫶s̊⫶t̊⫶ů⫶v̊⫶ẘ⫶x̊⫶ẙ⫶z̊⫶0̊⫶1̊⫶2̊⫶3̊⫶4̊⫶5̊⫶6̊⫶7̊⫶8̊⫶9̊⫶我爱你'
  );
});

test('connected', () => {
  expect(connected(origin)).toEqual(
    'A⊶B⊶C⊶D⊶E⊶F⊶G⊶H⊶I⊶J⊶K⊶L⊶M⊶N⊶O⊶P⊶Q⊶R⊶S⊶T⊶U⊶V⊶W⊶X⊶Y⊶Z⊶a⊶b⊶c⊶d⊶e⊶f⊶g⊶h⊶i⊶j⊶k⊶l⊶m⊶n⊶o⊶p⊶q⊶r⊶s⊶t⊶u⊶v⊶w⊶x⊶y⊶z⊶0⊶1⊶2⊶3⊶4⊶5⊶6⊶7⊶8⊶9⊶我爱你'
  );
});

test('dotty', () => {
  expect(dotty(origin)).toEqual(
    'A░B░C░D░E░F░G░H░I░J░K░L░M░N░O░P░Q░R░S░T░U░V░W░X░Y░Z░a░b░c░d░e░f░g░h░i░j░k░l░m░n░o░p░q░r░s░t░u░v░w░x░y░z░0░1░2░3░4░5░6░7░8░9░我爱你'
  );
});

test('diametric_angle_frame', () => {
  expect(diametric_angle_frame(origin)).toEqual(
    '『A』『B』『C』『D』『E』『F』『G』『H』『I』『J』『K』『L』『M』『N』『O』『P』『Q』『R』『S』『T』『U』『V』『W』『X』『Y』『Z』『a』『b』『c』『d』『e』『f』『g』『h』『i』『j』『k』『l』『m』『n』『o』『p』『q』『r』『s』『t』『u』『v』『w』『x』『y』『z』『0』『1』『2』『3』『4』『5』『6』『7』『8』『9』我爱你'
  );
});

test('thick_box', () => {
  expect(thick_box(origin)).toEqual(
    '⟦A⟧⟦B⟧⟦C⟧⟦D⟧⟦E⟧⟦F⟧⟦G⟧⟦H⟧⟦I⟧⟦J⟧⟦K⟧⟦L⟧⟦M⟧⟦N⟧⟦O⟧⟦P⟧⟦Q⟧⟦R⟧⟦S⟧⟦T⟧⟦U⟧⟦V⟧⟦W⟧⟦X⟧⟦Y⟧⟦Z⟧⟦a⟧⟦b⟧⟦c⟧⟦d⟧⟦e⟧⟦f⟧⟦g⟧⟦h⟧⟦i⟧⟦j⟧⟦k⟧⟦l⟧⟦m⟧⟦n⟧⟦o⟧⟦p⟧⟦q⟧⟦r⟧⟦s⟧⟦t⟧⟦u⟧⟦v⟧⟦w⟧⟦x⟧⟦y⟧⟦z⟧⟦0⟧⟦1⟧⟦2⟧⟦3⟧⟦4⟧⟦5⟧⟦6⟧⟦7⟧⟦8⟧⟦9⟧我爱你'
  );
});

test('diametric_box', () => {
  expect(diametric_box(origin)).toEqual(
    '⦑A⦒⦑B⦒⦑C⦒⦑D⦒⦑E⦒⦑F⦒⦑G⦒⦑H⦒⦑I⦒⦑J⦒⦑K⦒⦑L⦒⦑M⦒⦑N⦒⦑O⦒⦑P⦒⦑Q⦒⦑R⦒⦑S⦒⦑T⦒⦑U⦒⦑V⦒⦑W⦒⦑X⦒⦑Y⦒⦑Z⦒⦑a⦒⦑b⦒⦑c⦒⦑d⦒⦑e⦒⦑f⦒⦑g⦒⦑h⦒⦑i⦒⦑j⦒⦑k⦒⦑l⦒⦑m⦒⦑n⦒⦑o⦒⦑p⦒⦑q⦒⦑r⦒⦑s⦒⦑t⦒⦑u⦒⦑v⦒⦑w⦒⦑x⦒⦑y⦒⦑z⦒⦑0⦒⦑1⦒⦑2⦒⦑3⦒⦑4⦒⦑5⦒⦑6⦒⦑7⦒⦑8⦒⦑9⦒我爱你'
  );
});

test('arrow_box', () => {
  expect(arrow_box(origin)).toEqual(
    '⦏Â⦎⦏B̂⦎⦏Ĉ⦎⦏D̂⦎⦏Ê⦎⦏F̂⦎⦏Ĝ⦎⦏Ĥ⦎⦏Î⦎⦏Ĵ⦎⦏K̂⦎⦏L̂⦎⦏M̂⦎⦏N̂⦎⦏Ô⦎⦏P̂⦎⦏Q̂⦎⦏R̂⦎⦏Ŝ⦎⦏T̂⦎⦏Û⦎⦏V̂⦎⦏Ŵ⦎⦏X̂⦎⦏Ŷ⦎⦏Ẑ⦎⦏â⦎⦏b̂⦎⦏ĉ⦎⦏d̂⦎⦏ê⦎⦏f̂⦎⦏ĝ⦎⦏ĥ⦎⦏î⦎⦏ĵ⦎⦏k̂⦎⦏l̂⦎⦏m̂⦎⦏n̂⦎⦏ô⦎⦏p̂⦎⦏q̂⦎⦏r̂⦎⦏ŝ⦎⦏t̂⦎⦏û⦎⦏v̂⦎⦏ŵ⦎⦏x̂⦎⦏ŷ⦎⦏ẑ⦎⦏0̂⦎⦏1̂⦎⦏2̂⦎⦏3̂⦎⦏4̂⦎⦏5̂⦎⦏6̂⦎⦏7̂⦎⦏8̂⦎⦏9̂⦎我爱你'
  );
});

test('dot_box', () => {
  expect(dot_box(origin)).toEqual(
    '꜍A꜉꜍B꜉꜍C꜉꜍D꜉꜍E꜉꜍F꜉꜍G꜉꜍H꜉꜍I꜉꜍J꜉꜍K꜉꜍L꜉꜍M꜉꜍N꜉꜍O꜉꜍P꜉꜍Q꜉꜍R꜉꜍S꜉꜍T꜉꜍U꜉꜍V꜉꜍W꜉꜍X꜉꜍Y꜉꜍Z꜉꜍a꜉꜍b꜉꜍c꜉꜍d꜉꜍e꜉꜍f꜉꜍g꜉꜍h꜉꜍i꜉꜍j꜉꜍k꜉꜍l꜉꜍m꜉꜍n꜉꜍o꜉꜍p꜉꜍q꜉꜍r꜉꜍s꜉꜍t꜉꜍u꜉꜍v꜉꜍w꜉꜍x꜉꜍y꜉꜍z꜉꜍0꜉꜍1꜉꜍2꜉꜍3꜉꜍4꜉꜍5꜉꜍6꜉꜍7꜉꜍8꜉꜍9꜉我爱你'
  );
});

test('weird_box', () => {
  expect(weird_box(origin)).toEqual(
    '[A̲̅][B̲̅][C̲̅][D̲̅][E̲̅][F̲̅][G̲̅][H̲̅][I̲̅][J̲̅][K̲̅][L̲̅][M̲̅][N̲̅][O̲̅][P̲̅][Q̲̅][R̲̅][S̲̅][T̲̅][U̲̅][V̲̅][W̲̅][X̲̅][Y̲̅][Z̲̅][a̲̅][b̲̅][c̲̅][d̲̅][e̲̅][f̲̅][g̲̅][h̲̅][i̲̅][j̲̅][k̲̅][l̲̅][m̲̅][n̲̅][o̲̅][p̲̅][q̲̅][r̲̅][s̲̅][t̲̅][u̲̅][v̲̅][w̲̅][x̲̅][y̲̅][z̲̅][0̲̅][1̲̅][2̲̅][3̲̅][4̲̅][5̲̅][6̲̅][7̲̅][8̲̅][9̲̅]我爱你'
  );
});

test('thick_block', () => {
  expect(thick_block(origin)).toEqual(
    '【A】【B】【C】【D】【E】【F】【G】【H】【I】【J】【K】【L】【M】【N】【O】【P】【Q】【R】【S】【T】【U】【V】【W】【X】【Y】【Z】【a】【b】【c】【d】【e】【f】【g】【h】【i】【j】【k】【l】【m】【n】【o】【p】【q】【r】【s】【t】【u】【v】【w】【x】【y】【z】【0】【1】【2】【3】【4】【5】【6】【7】【8】【9】我爱你'
  );
});

test('curly_brace', () => {
  expect(curly_brace(origin)).toEqual(
    '⧼A̼⧽⧼B̼⧽⧼C̼⧽⧼D̼⧽⧼E̼⧽⧼F̼⧽⧼G̼⧽⧼H̼⧽⧼I̼⧽⧼J̼⧽⧼K̼⧽⧼L̼⧽⧼M̼⧽⧼N̼⧽⧼O̼⧽⧼P̼⧽⧼Q̼⧽⧼R̼⧽⧼S̼⧽⧼T̼⧽⧼U̼⧽⧼V̼⧽⧼W̼⧽⧼X̼⧽⧼Y̼⧽⧼Z̼⧽⧼a̼⧽⧼b̼⧽⧼c̼⧽⧼d̼⧽⧼e̼⧽⧼f̼⧽⧼g̼⧽⧼h̼⧽⧼i̼⧽⧼j̼⧽⧼k̼⧽⧼l̼⧽⧼m̼⧽⧼n̼⧽⧼o̼⧽⧼p̼⧽⧼q̼⧽⧼r̼⧽⧼s̼⧽⧼t̼⧽⧼u̼⧽⧼v̼⧽⧼w̼⧽⧼x̼⧽⧼y̼⧽⧼z̼⧽⧼0̼⧽⧼1̼⧽⧼2̼⧽⧼3̼⧽⧼4̼⧽⧼5̼⧽⧼6̼⧽⧼7̼⧽⧼8̼⧽⧼9̼⧽我爱你'
  );
});

test('squiggle', () => {
  expect(squiggle(origin)).toEqual(
    'ค๒ς๔єŦﻮђเןкɭ๓ภ๏קợгรՇยשฬאץչค๒ς๔єŦﻮђเןкɭ๓ภ๏קợгรՇยשฬאץչ0123456789我爱你'
  );
});

test('squiggle_2', () => {
  expect(squiggle_2(origin)).toEqual(
    'ǟɮƈɖɛʄɢɦɨʝӄʟʍռօքզʀֆȶʊʋաӼʏʐǟɮƈɖɛʄɢɦɨʝӄʟʍռօքզʀֆȶʊʋաӼʏʐ0123456789我爱你'
  );
});

test('squiggle_3', () => {
  expect(squiggle_3(origin)).toEqual(
    'ąცƈɖɛʄɠɧıʝƙƖɱŋơ℘զཞʂɬų۷ῳҳყʑąცƈɖɛʄɠɧıʝƙƖɱŋơ℘զཞʂɬų۷ῳҳყʑ0123456789我爱你'
  );
});

test('squiggle_4', () => {
  expect(squiggle_4(origin)).toEqual(
    'ąცƈɖɛʄɠɧıʝƙƖɱŋơ℘զཞʂɬų۷ῳҳყʑąცƈɖɛʄɠɧıʝƙƖɱŋơ℘զཞʂɬų۷ῳҳყʑ0123456789我爱你'
  );
});

test('squiggle_5', () => {
  expect(squiggle_5(origin)).toEqual(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZαზƈԃҽϝɠԋιʝƙʅɱɳσρϙɾʂƚυʋɯxყȥ0123456789我爱你'
  );
});

test('squiggle_6', () => {
  expect(squiggle_6(origin)).toEqual(
    'ΛϦㄈÐƐFƓнɪﾌҚŁ௱ЛØþҨ尺らŤЦƔƜχϤẔΛϦㄈÐƐFƓнɪﾌҚŁ௱ЛØþҨ尺らŤЦƔƜχϤẔ0123456789我爱你'
  );
});

test('squiggle_7', () => {
  expect(squiggle_7(origin)).toEqual(
    'ԹՅՇԺȝԲԳɧɿʝƙʅʍՌԾρφՐՏԵՄעաՃՎՀԹՅՇԺȝԲԳɧɿʝƙʅʍՌԾρφՐՏԵՄעաՃՎՀ0123456789我爱你'
  );
});

test('squiggle_8', () => {
  expect(squiggle_8(origin)).toEqual(
    'მჩეძპfცhἶქκlოῆõρგΓჰནυὗwჯყɀმჩეძპfცhἶქκlოῆõρგΓჰནυὗwჯყɀ0123456789我爱你'
  );
});

test('squiggle_9', () => {
  expect(squiggle_9(origin)).toEqual(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZαႦƈԃҽϝɠԋιʝƙʅɱɳσρϙɾʂƚυʋɯxყȥ0123456789我爱你'
  );
});

test('squiggle_10', () => {
  expect(squiggle_10(origin)).toEqual(
    'ᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚ0123456789我爱你'
  );
});

test('squiggle_11', () => {
  expect(squiggle_11(origin)).toEqual(
    'ค๖¢໓ēfງhiวkl๓ຖ໐p๑rŞtนงຟxฯຊค๖¢໓ēfງhiวkl๓ຖ໐p๑rŞtนงຟxฯຊ0123456789我爱你'
  );
});

test('squiggle_12', () => {
  expect(squiggle_12(origin)).toEqual(
    'ĂβČĎĔŦĞĤĨĴĶĹМŃŐРQŔŚŤÚVŴЖŶŹĂβČĎĔŦĞĤĨĴĶĹМŃŐРQŔŚŤÚVŴЖŶŹ0123456789我爱你'
  );
});

test('squiggle_13', () => {
  expect(squiggle_13(origin)).toEqual(
    'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ0123456789我爱你'
  );
});

test('squiggle_14', () => {
  expect(squiggle_14(origin)).toEqual(
    'αɓ૮∂εƒɠɦเʝҡℓɱɳσρφ૨รƭµѵωאყƶαɓ૮∂εƒɠɦเʝҡℓɱɳσρφ૨รƭµѵωאყƶ0123456789我爱你'
  );
});

test('squiggle_15', () => {
  expect(squiggle_15(origin)).toEqual(
    'άвςȡέғģħίјķĻмήόρqŕşţùνώxчžάвςȡέғģħίјķĻмήόρqŕşţùνώxчž0123456789我爱你'
  );
});

test('squiggle_symbol', () => {
  expect(squiggle_symbol(origin)).toEqual(
    'ꋫꃃꏸꁕꍟꄘꁍꑛꂑꀭꀗ꒒ꁒꁹꆂꉣꁸ꒓ꌚ꓅ꐇꏝꅐꇓꐟꁴꋫꃃꏸꁕꍟꄘꁍꑛꂑꀭꀗ꒒ꁒꁹꆂꉣꁸ꒓ꌚ꓅ꐇꏝꅐꇓꐟꁴ0123456789我爱你'
  );
});

test('squiggle_symbol_2', () => {
  expect(squiggle_symbol_2(origin)).toEqual(
    'ꍏꌃꉓꀸꍟꎇꁅꃅꀤꀭꀘ꒒ꂵꈤꂦꉣꆰꋪꌗ꓄ꀎꃴꅏꊼꌩꁴꍏꌃꉓꀸꍟꎇꁅꃅꀤꀭꀘ꒒ꂵꈤꂦꉣꆰꋪꌗ꓄ꀎꃴꅏꊼꌩꁴ0123456789我爱你'
  );
});

test('squiggle_symbol_3', () => {
  expect(squiggle_symbol_3(origin)).toEqual(
    'αßςdεƒghïյκﾚmη⊕pΩrš†u∀ωxψzαßςdεƒghïյκﾚmη⊕pΩrš†u∀ωxψz0123456789我爱你'
  );
});

test('squiggle_symbol_4', () => {
  expect(squiggle_symbol_4(origin)).toEqual(
    'ΔβĆĐ€₣ǤĦƗĴҜŁΜŇØƤΩŘŞŦỮVŴЖ¥ŽΔβĆĐ€₣ǤĦƗĴҜŁΜŇØƤΩŘŞŦỮVŴЖ¥Ž0123456789我爱你'
  );
});

test('squiggle_symbol_5', () => {
  expect(squiggle_symbol_5(origin)).toEqual(
    'ꍏꌃꉓꀸꍟꎇꁅꃅꀤꀭꀘ꒒ꂵꈤꂦꉣꆰꋪꌗ꓄ꀎꃴꅏꊼꌩꁴꍏꌃꉓꀸꍟꎇꁅꃅꀤꀭꀘ꒒ꂵꈤꂦꉣꆰꋪꌗ꓄ꀎꃴꅏꊼꌩꁴ0123456789我爱你'
  );
});

test('squiggle_symbol_6', () => {
  expect(squiggle_symbol_6(origin)).toEqual(
    'ꋬꃳꉔ꒯ꏂꊰꍌꁝ꒐꒻ꀘ꒒ꂵꋊꄲꉣꆰꋪꇙ꓄꒤꒦ꅐꉧꌦꁴꋬꃳꉔ꒯ꏂꊰꍌꁝ꒐꒻ꀘ꒒ꂵꋊꄲꉣꆰꋪꇙ꓄꒤꒦ꅐꉧꌦꁴ0123456789我爱你'
  );
});

test('symbolic', () => {
  expect(symbolic(origin)).toEqual(
    '₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ0123456789我爱你'
  );
});

test('morse_code', () => {
  expect(morse_code(origin)).toEqual(
    '.- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --.. .- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --.. ----- .---- ..--- ...-- ....- ..... -.... --... ---.. ----. 我爱你'
  );
});
test('atbash_cipher', () => {
  expect(atbash_cipher(origin)).toEqual(
    'ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba0123456789我爱你'
  );
});

test('serif_normal', () => {
  expect(serif_normal(origin)).toEqual(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789我爱你'
  );
});

test('serif_bold', () => {
  expect(serif_bold(origin)).toEqual(
    '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗我爱你'
  );
});

test('serif_italic', () => {
  expect(serif_italic(origin)).toEqual(
    '𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧0123456789我爱你'
  );
});

test('serif_bold_italic', () => {
  expect(serif_bold_italic(origin)).toEqual(
    '𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛0123456789我爱你'
  );
});

test('monospace_normal', () => {
  expect(monospace_normal(origin)).toEqual(
    '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿我爱你'
  );
});

test('sans_serif_normal', () => {
  expect(sans_serif_normal(origin)).toEqual(
    '𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫我爱你'
  );
});

test('sans_serif_bold', () => {
  expect(sans_serif_bold(origin)).toEqual(
    '𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵我爱你'
  );
});

test('sans_serif_italic', () => {
  expect(sans_serif_italic(origin)).toEqual(
    '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻0123456789我爱你'
  );
});

test('sans_serif_bold_italic', () => {
  expect(sans_serif_bold_italic(origin)).toEqual(
    '𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯0123456789我爱你'
  );
});

test('double_struck_bold', () => {
  expect(double_struck_bold(origin)).toEqual(
    '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡我爱你'
  );
});

test('script_normal', () => {
  expect(script_normal(origin)).toEqual(
    '𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏0123456789我爱你'
  );
});

test('script_bold', () => {
  expect(script_bold(origin)).toEqual(
    '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃0123456789我爱你'
  );
});

test('fraktur_normal', () => {
  expect(fraktur_normal(origin)).toEqual(
    '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷0123456789我爱你'
  );
});

test('fraktur_bold', () => {
  expect(fraktur_bold(origin)).toEqual(
    '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟0123456789我爱你'
  );
});

test('a1z26_cipher', () => {
  expect(a1z26_cipher(origin)).toEqual(
    '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 0123456789我爱你'
  );
});

test('bubble_black', () => {
  expect(bubble_black(origin)).toEqual(
    '🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩⓿➊➋➌➍➎➏➐➑➒我爱你'
  );
});

test('parenthesis', () => {
  expect(parenthesis(origin)).toEqual(
    '⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵0⑴⑵⑶⑷⑸⑹⑺⑻⑼我爱你'
  );
});

test('math_bold', () => {
  expect(math_bold(origin)).toEqual(
    '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳0123456789我爱你'
  );
});

test('math_italic', () => {
  expect(math_italic(origin)).toEqual(
    '𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛0123456789我爱你'
  );
});

test('math_sans', () => {
  expect(math_sans(origin)).toEqual(
    '𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓0123456789我爱你'
  );
});

test('math_sans_italic', () => {
  expect(math_sans_italic(origin)).toEqual(
    '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻0123456789我爱你'
  );
});

test('math_sans_bold', () => {
  expect(math_sans_bold(origin)).toEqual(
    '𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇0123456789我爱你'
  );
});

test('math_sans_bold_italic', () => {
  expect(math_sans_bold_italic(origin)).toEqual(
    '𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯0123456789我爱你'
  );
});

test('japanese', () => {
  expect(japanese(origin)).toEqual(
    '卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙0123456789我爱你'
  );
});

test('arabic', () => {
  expect(arabic(origin)).toEqual(
    'ค๒ς๔єŦﻮђเןкl๓ภ๏קợгรtยשฬץאzค๒ς๔єŦﻮђเןкl๓ภ๏קợгรtยשฬץאz0123456789我爱你'
  );
});

test('squared', () => {
  expect(squared(origin)).toEqual(
    '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉0123456789我爱你'
  );
});

test('funky', () => {
  expect(funky(origin)).toEqual(
    'αв¢∂єƒgнιנкℓмησρqяѕтυνωχуzαв¢∂єƒgнιנкℓмησρqяѕтυνωχуz0123456789我爱你'
  );
});

test('acute', () => {
  expect(acute(origin)).toEqual(
    'ÁBĆDÉFǴHíJḰĹḾŃŐṔQŔśTŰVẂXӲŹábćdéfǵhíjḱĺḿńőṕqŕśtúvẃxӳź0123456789我爱你'
  );
});

test('rock_dots', () => {
  expect(rock_dots(origin)).toEqual(
    'ÄḄĊḊЁḞĠḦЇJḲḶṀṄÖṖQṚṠṪÜṾẄẌŸŻäḅċḋëḟġḧïjḳḷṁṅöṗqṛṡẗüṿẅẍÿż0123456789我爱你'
  );
});

test('stroked', () => {
  expect(stroked(origin)).toEqual(
    'ȺɃȻĐɆFǤĦƗɈꝀŁMNØⱣꝖɌSŦᵾVWXɎƵȺƀȼđɇfǥħɨɉꝁłmnøᵽꝗɍsŧᵾvwxɏƶ0123456789我爱你'
  );
});

test('inverted', () => {
  expect(inverted(origin)).toEqual(
    '∀ᗺƆᗡƎℲ⅁HIſꓘ˥WNOԀტᴚS⊥∩ΛMX⅄Zɐqɔpǝɟƃɥıɾʞןɯuodbɹsʇnʌʍxʎz0ƖᘔƐ߈95ㄥ86我爱你'
  );
});

test('leet_extreme', () => {
  expect(leet_extreme(origin)).toEqual(
    '@8(|)3/=6#!_||<|_/V\\/\\/0|*Q?57(_)\\/vv><Y2@8(|)3/=6#!_||<|_/V\\/\\/0|*Q?57(_)\\/vv><Y20123456789我爱你'
  );
});

test('heavy', () => {
  expect(heavy(origin)).toEqual(
    'ΛＢＣＤΞＦＧＨＩＪＫＬＭＮ♢ＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９我爱你'
  );
});

test('accent', () => {
  expect(accent(origin)).toEqual(
    'ÄßÇÐÈ£GHÌJKLMñÖþQR§†ÚVWX¥Zåß¢Ðê£ghïjklmñðþqr§†µvwx¥z0123456789我爱你'
  );
});

test('linear', () => {
  expect(linear(origin)).toEqual(
    'ΛBᄃDΣFGΉIJKᄂMПӨPQЯƧƬЦVЩXYZΛBᄃDΣFGΉIJKᄂMПӨPQЯƧƬЦVЩXYZ0123456789我爱你'
  );
});

test('japanese_script', () => {
  expect(japanese_script(origin)).toEqual(
    'ﾑ乃ᄃり乇ｷムんﾉﾌズﾚﾶ刀のｱゐ尺丂ｲひ√Wﾒﾘ乙ﾑ乃ᄃり乇ｷムんﾉﾌズﾚﾶ刀のｱゐ尺丂ｲひ√Wﾒﾘ乙0123456789我爱你'
  );
});

test('box_lines', () => {
  expect(box_lines(origin)).toEqual(
    '[̲̅A][̲̅B][̲̅C][̲̅D][̲̅E][̲̅F][̲̅G][̲̅H][̲̅I][̲̅J][̲̅K][̲̅L][̲̅M][̲̅N][̲̅O][̲̅P][̲̅Q][̲̅R][̲̅S][̲̅T][̲̅U][̲̅V][̲̅W][̲̅X][̲̅Y][̲̅Z][̲̅a][̲̅b][̲̅c][̲̅d][̲̅e][̲̅f][̲̅g][̲̅h][̲̅i][̲̅j][̲̅k][̲̅l][̲̅m][̲̅n][̲̅o][̲̅p][̲̅q][̲̅r][̲̅s][̲̅t][̲̅u][̲̅v][̲̅w][̲̅x][̲̅y][̲̅z][̲̅0][̲̅1][̲̅2][̲̅3][̲̅4][̲̅5][̲̅6][̲̅7][̲̅8][̲̅9]我爱你'
  );
});

test('bent', () => {
  expect(bent(origin)).toEqual(
    'ᗩᗷᑢᕲᘿᖴᘜᕼᓰᒚᐸᒪᘻᘉᓍᕵᕴᖇSᖶᑘᐺᘺ᙭ᖻᗱᗩᗷᑢᕲᘿᖴᘜᕼᓰᒚᐸᒪᘻᘉᓍᕵᕴᖇSᖶᑘᐺᘺ᙭ᖻᗱ0123456789我爱你'
  );
});

test('side_squiggles', () => {
  expect(side_squiggles(origin)).toEqual(
    '̴AB̴C̴D̴E̴F̴G̴H̴I̴J̴K̴L̴M̴N̴O̴P̴Q̴R̴S̴T̴U̴V̴W̴X̴Y̴Z̴̴ab̴c̴d̴e̴f̴g̴h̴i̴j̴k̴l̴m̴n̴o̴p̴q̴r̴s̴t̴u̴v̴w̴x̴y̴z̴0123456789我爱你'
  );
});

test('top_squiggles', () => {
  expect(top_squiggles(origin)).toEqual(
    'A̾B̾C̾D̾E̾F̾G̾H̾I̾J̾K̾L̾M̾N̾O̾P̾Q̾R̾S̾T̾U̾V̾W̾X̾Y̾Z̾̾ab̾c̾d̾e̾f̾g̾h̾i̾j̾k̾l̾m̾n̾o̾p̾q̾r̾s̾t̾u̾v̾w̾x̾y̾z̾0̾1̾2̾3̾4̾5̾6̾7̾8̾9̾我爱你'
  );
});

test('comic', () => {
  expect(comic(origin)).toEqual(
    'ᗩᗷᑕᗪᗴᖴᘜᕼIᒍKᒪᗰᑎOᑭᑫᖇՏTᑌᐯᗯ᙭YᘔᗩᗷᑕᗪᗴᖴᘜᕼIᒍKᒪᗰᑎOᑭᑫᖇՏTᑌᐯᗯ᙭Yᘔ0123456789我爱你'
  );
});

test('andalusia', () => {
  expect(andalusia(origin)).toEqual(
    'ꪖ᥇ᥴᦔꫀᠻᧁꫝ𝓲𝓳𝘬ꪶꪑꪀꪮρ𝘲𝘳𝘴𝓽ꪊꪜ᭙᥊ꪗɀꪖ᥇ᥴᦔꫀᠻᧁꫝ𝓲𝓳𝘬ꪶꪑꪀꪮρ𝘲𝘳𝘴𝓽ꪊꪜ᭙᥊ꪗɀ0123456789我爱你'
  );
});

test('manga', () => {
  expect(manga(origin)).toEqual(
    '卂乃匚ᗪ乇千ᘜ卄|ﾌҜㄥ爪几ㄖ卩Ҩ尺丂ㄒㄩᐯ山乂ㄚ乙卂乃匚ᗪ乇千ᘜ卄|ﾌҜㄥ爪几ㄖ卩Ҩ尺丂ㄒㄩᐯ山乂ㄚ乙0123456789我爱你'
  );
});

test('rune', () => {
  expect(rune(origin)).toEqual(
    'ልጌርዕቿቻኗዘጎጋጕረጠክዐየዒዪነፕሁሀሠሸሃጊልጌርዕቿቻኗዘጎጋጕረጠክዐየዒዪነፕሁሀሠሸሃጊ0123456789我爱你'
  );
});

test('russian', () => {
  expect(russian(origin)).toEqual(
    'АБCДЄFGHЇJКГѪЙѲPФЯ$TЦѴШЖЧЗабcдёfgнїjкгѫпѳpфя$тцѵщжчз0123456789我爱你'
  );
});

test('full_width', () => {
  expect(full_width(origin)).toEqual(
    'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９我爱你'
  );
});







