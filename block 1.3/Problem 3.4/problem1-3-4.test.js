import { partition } from "./problem1-3-4";

describe("partition function", () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const users = [
    { user: "barney", age: 36, active: false },
    { user: "fred", age: 40, active: true },
    { user: "pebbles", age: 1, active: false },
  ];

  it("partition работает корректно", () => {
    expect(partition(numbers, (element) => element > 3)).toEqual([
      [4, 5, 6],
      [1, 2, 3],
    ]);
    expect(partition(users, (element) => element.active)).toEqual([
      [{ user: "fred", age: 40, active: true }],
      [
        { user: "barney", age: 36, active: false },
        { user: "pebbles", age: 1, active: false },
      ],
    ]);
  });

  it("функция callback должна вызываться с нужными параметрами", () => {
    const mockCallback = jest.fn();
    partition(numbers, mockCallback);
    expect(mockCallback).toHaveBeenNthCalledWith(1, 1);
    expect(mockCallback).toHaveBeenNthCalledWith(2, 2);
  });

  it("функция callback должна вызываться нужное количество раз", () => {
    const mockCallback = jest.fn();
    partition(numbers, mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(numbers.length);
  });

  it("вызов partition должен возвращать новый массив", () => {
    const originalArray = [...numbers];
    const resultArray = partition(numbers, (element) => element > 3);
    expect(resultArray).not.toBe(numbers);
    expect(numbers).toEqual(originalArray);
  });

  it("все значения в trueArray должны соответствовать условию callback", () => {
    const trueArray = partition(numbers, (element) => element > 3)[0];
    trueArray.forEach((element) => {
      expect(element).toBeGreaterThan(3);
    });
  });

  it("все значения в falseArray должны соответствовать условию callback", () => {
    const falseArray = partition(numbers, (element) => element > 3)[1];
    falseArray.forEach((element) => {
      expect(element).not.toBeGreaterThan(3);
    });
  });

  it("верно отрабатывает если callback не передан", () => {
    const result = partition([1, false, 2, 0, 3, ""]);
    expect(result).toEqual([
      [1, 2, 3],
      [false, 0, ""],
    ]);
  });

  it("не должна менять изначальный массив", () => {
    const originalArray = [...numbers];
    partition(numbers, (element) => element > 3);
    expect(numbers).toEqual(originalArray);
  });
});
