const { add, subtract, multiply, divide } = require('./math.utils');

describe('Math Utils', () => {
  test('add function should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, -1)).toBe(-2);
    expect(add(0, 0)).toBe(0);
  });

  test('subtract function should subtract two numbers', () => {
    expect(subtract(2, 1)).toBe(1);
    expect(subtract(-1, -1)).toBe(0);
    expect(subtract(0, 0)).toBe(0);
  });

  test('multiply function should multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, -1)).toBe(1);
    expect(multiply(0, 5)).toBe(0);
  });

  test('divide function should divide two numbers', () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(-4, -2)).toBe(2);
    expect(divide(0, 1)).toBe(0);
  });
});