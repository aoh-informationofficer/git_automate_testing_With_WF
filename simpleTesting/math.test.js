// math.test.js
const { add, subtract, multiply, divide, power } = require("./math");

describe("Math functions", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("multiplies two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test("divides two numbers", () => {
    expect(divide(6, 3)).toBe(2);
  });

  test("throws error when dividing by zero", () => {
    expect(() => divide(6, 0)).toThrow("Cannot divide by zero");
  });

  test("return 1 if to the power is equal to 0", () => {
    expect(power(3,0)).toBe(1);
  });

  test("power two numbers", () => {
    expect(power(2,6)).toBe(64);
  });
});
