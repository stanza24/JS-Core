import { fizzbuzz } from "./problem1-2-3";

describe("final grade", () => {
  it("Функция должна вернуть число если оно не делится на 5 и на 3", () => {
    expect(fizzbuzz(1)).toBe(1);
    expect(fizzbuzz(7)).toBe(7);
    expect(fizzbuzz(11)).toBe(11);
  });
  it("Функция должна вернуть Fizz если число делится только на 3", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
    expect(fizzbuzz(6)).toBe("Fizz");
    expect(fizzbuzz(33)).toBe("Fizz");
  });
  it("Функция должна вернуть Buzz если число делится только на 5", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
    expect(fizzbuzz(25)).toBe("Buzz");
    expect(fizzbuzz(100)).toBe("Buzz");
  });
  it("Функция должна вернуть FizzBuzz если число делится только на 5 и на 3", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
    expect(fizzbuzz(45)).toBe("FizzBuzz");
    expect(fizzbuzz(0)).toBe("FizzBuzz");
    expect(fizzbuzz(105)).toBe("FizzBuzz");
  });
});
