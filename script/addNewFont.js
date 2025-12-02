#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const fonts = require('../src/fonts.json');
const { getExportStatement, getTestCase } = require('./utils.script.js');

const externalFontsPath = path.join(__dirname, 'external_fonts.json');

if (!fs.existsSync(externalFontsPath)) {
  throw new Error(
    'external_fonts.json not found! Read ./script/instructions.md\n'
  );
  if (lower.includes('italic')) return 'Classic';
  if (lower.includes('bubble') || lower.includes('circled')) return 'Bubble';
  if (lower.includes('square') || lower.includes('box')) return 'Funky';
  if (lower.includes('gothic') || lower.includes('fraktur')) return 'Gothic';
  if (lower.includes('mono')) return 'Retro';
  if (lower.includes('math')) return 'Classic';
  if (lower.includes('secret') || lower.includes('cipher') || lower.includes('code')) return 'Secret';
  return 'Funky';
};

const toArray = (input) => {
  if (Array.isArray(input)) return input;
  if (typeof input === 'string') return [...input];
  return [];
};

let addedCount = 0;

externalFonts.forEach(fontData => {
  const name = getCleanName(fontData.fontName);
  const category = getCategory(fontData.fontName);

  let newCharsArray = [
    ...toArray(fontData.fontUpper),
    ...toArray(fontData.fontLower),
    ...(fontData.fontDigits ? toArray(fontData.fontDigits) : defaultDigits),
  ];

  const charsLength = 62;

  if (newCharsArray.length !== charsLength) {
    console.warn(
      `Expected new characters length to be ${charsLength}, instead got ${newCharsArray.length} for ${name}! Skipping.`
    );
    return;
  }

  if (fonts[name]) {
    console.warn(`A font with the name "${name}" already exists. Skipping.`);
    return;
  }

  // add the new property
  fonts[name] = {
    category,
    map: newCharsArray,
  };

  try {
    // Append export statement to src/index.ts
    fs.writeFileSync(
      path.join(__dirname, '../src/index.ts'),
      getExportStatement(name),
      {
        flag: 'a+',
      }
    );
    console.log(`Export statement for "${name}" appended to src/index.ts`);

    // Append test case to tests/index.test.ts
    fs.writeFileSync(
      path.join(__dirname, '../tests/index.test.ts'),
      getTestCase(name, newCharsArray),
      {
        flag: 'a+',
      }
    );
    console.log(`Test case for "${name}" appended to tests/index.test.ts`);

    console.log(
      `New font "${name}" successfully added in fonts.json with category "${category}"`
    );
    addedCount++;
  } catch (error) {
    throw new Error(error);
  }
});

if (addedCount > 0) {
  try {
    fs.writeFileSync(
      path.join(__dirname, '../src/fonts.json'),
      JSON.stringify(fonts, null, 2),
      'utf-8'
    );
    console.log(`\nSuccessfully added ${addedCount} new fonts to fonts.json`);
  } catch (error) {
    throw new Error(error);
  }
} else {
  console.log('\nNo new fonts added.');
}
