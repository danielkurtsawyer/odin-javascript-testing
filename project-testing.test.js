const source = require('./project-testing');

test('Capitalize', ()=> {
  expect(source.capitalize('hello world!')).toBe('Hello world!');
});
