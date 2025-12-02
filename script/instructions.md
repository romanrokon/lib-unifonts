# Instructions for creating new font

1. Open `script/external_fonts.json`.
2. Add a new font object to the array in the following format:

```json
{
    "fontName": "MyNewFont",
    "fontLower": "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ",
    "fontUpper": "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ",
    "fontDigits": "⓪①②③④⑤⑥⑦⑧⑨"
}
```

- `fontName`: The name of the font (CamelCase or Title Case). It will be converted to snake_case for the key.
- `fontLower`: String of 26 lowercase characters.
- `fontUpper`: String of 26 uppercase characters.
- `fontDigits`: String of 10 digits (optional, defaults to 0-9 if empty).

3. Run the script:

```bash
npm run add-font
```

**What happens next:**
- The script reads `external_fonts.json`.
- It checks for duplicates in `src/fonts.json`.
- If the font is new:
    - It appends the font to `src/fonts.json`.
    - It appends an export statement to `src/index.ts`.
    - It appends a test case to `tests/index.test.ts`.
- It logs the results.

**Note:** Existing fonts in `external_fonts.json` are skipped, so you can keep the history there.
