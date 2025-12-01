import { decodeMorse, decodeA1Z26, detectCipher } from '../src';

test('decodeMorse', () => {
  expect(decodeMorse('.... . .-.. .-.. ---')).toEqual('HELLO');
  expect(decodeMorse('.... . .-.. .-.. ---  .-- --- .-. .-.. -..')).toEqual(
    'HELLO WORLD'
  );
  expect(decodeMorse('.... . .-.. .-.. --- / .-- --- .-. .-.. -..')).toEqual(
    'HELLO WORLD'
  );
});

test('decodeA1Z26', () => {
  expect(decodeA1Z26('8 5 12 12 15')).toEqual('HELLO');
  expect(decodeA1Z26('1  2')).toEqual('A B');
});

test('detectCipher', () => {
  expect(detectCipher('.... . .-.. .-.. ---')).toBe('morse_code');
  expect(detectCipher('8 5 12 12 15')).toBe('a1z26_cipher');
  expect(detectCipher('Hello World')).toBeNull();
});

