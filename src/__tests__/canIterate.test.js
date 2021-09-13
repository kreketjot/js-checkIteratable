import canIterate from '../canIterate';

test.each([
  [new Map(), true],
  [new Set(), true],
  [new WeakSet(), false],
  [null, false],
  [10, false],
  ['Netology', true],
  ['', true],
])('iteratable', (obj, expected) => expect(canIterate(obj)).toBe(expected));
