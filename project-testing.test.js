const source = require('./project-testing');

// capitalize()
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


// reverse()
test('Reverse 1', () => {
  expect(source.reverse('Racecar')).toBe('racecaR');
});

test('Reverse 2', () => {
  expect(source.reverse('hello world')).toBe('dlrow olleh');
});

// calculator 
// add
test('Adding', () => {
  expect(source.calculator.add(5, 6)).toBe(11);
})

// subtract
test('Subtracting', () => {
  expect(source.calculator.subtract(5, 6)).toBe(-1);
})

// divide
test('Dividing', () => {
  expect(source.calculator.divide(10, 5)).toBe(2);
})

test('Dividing by zero', () => {
  expect(source.calculator.divide(10, 0)).toBe(Infinity);
})

// multiply
test('Multiplying', () => {
  expect(source.calculator.multiply(10, 5)).toBe(50);
})
test('Multiplying by zero', () => {
  expect(source.calculator.multiply(10, 0)).toBe(0);
})