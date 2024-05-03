const source = require('./project-testing');

test('Capitalize 1', ()=> {
  expect(source.capitalize('hello world!')).toBe('Hello world!');
});

test('Capitalize 2', ()=> {
  expect(source.capitalize('walter white')).toBe('Walter white');
});

test('Capitalize empty string', ()=> {
  expect(source.capitalize('')).toBe('');
});

test('Capitalize one character string', ()=> {
  expect(source.capitalize('a')).toBe('A');
});
