#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const fonts = require('../src/fonts.json');
const {
  getCleanName,
  getExportStatement,
  getTestCase,
} = require('./utils.script.js');

const input = fs.readFileSync(path.join(__dirname, 'input'), 'utf-8');

let name;
let category = 'Other';
let newCharsArray;
const nameIdentifier = 'name: ';
const categoryIdentifier = 'category: ';
const charsLength = 62;

if (input === '') {
  throw new Error('./script/input is empty! Read ./script/instructions.md\n');
}

if (!input.includes(nameIdentifier)) {
  throw new Error(
    'Font name not specified in input file! Read ./script/instructions.md\n'
  );
}

input
  .trim()
  .split(/\n/)
  .map(line => {
    if (line.includes(nameIdentifier)) {
      name = line.replace(nameIdentifier, '').replace(/\r/, '');
      return;
    }

    if (line.includes(categoryIdentifier)) {
      category = line.replace(categoryIdentifier, '').replace(/\r/, '');
      return;
    }

    newCharsArray = line.split(/\s/);
  });

if (newCharsArray.length !== charsLength) {
  throw new Error(
    `Expected new characters length to be ${charsLength}, instead got ${newCharsArray.length}!
       Look for extra spaces between characters

       ${newCharsArray}
    `
  );
}

if (fonts[name]) {
  throw new Error(`A font with the name "${name}" already exists.`);
}

// add the new property
fonts[name] = {
  category,
  map: newCharsArray,
};

try {
  fs.writeFileSync(
    path.join(__dirname, '../src/fonts.json'),
    JSON.stringify(fonts, null, 2),
    'utf-8'
  );

  console.log(
    `New font "${name}" successfully added in fonts.json with category "${category}"`
  );

  fs.truncateSync(path.join(__dirname, 'input'), 0);

  console.log('Input file cleared');

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
} catch (error) {
  throw new Error(error);
}
