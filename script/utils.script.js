/**
 * @param {String} name
 * @returns String
 */
function getExportStatement(name) {
  return `export const ${name} = (s: string) => lookUp('${name}', s);\n\n`;
}

/**
 * @param {String} name
 * @param {String} newCharsArray
 * @returns String
 */
function getTestCase(name, newCharsArray) {
  return `test('${name}', () => {
  expect(${name}(origin)).toEqual(
    '${newCharsArray.join('')}我爱你'
  );
});\n\n`;
}

module.exports = { getExportStatement, getTestCase };
