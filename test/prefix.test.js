const expect = require('expect');
const {prefix} = require('./_30s.js');

test('prefix is a Function', () => {
  expect(prefix).toBeInstanceOf(Function);
});
