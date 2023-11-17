import { replaceItemsClear, replaceItemsMutate } from "./problem1-2-7";

describe("ReplaceItemsClear", () => {
  test("Не должна мутировать входящий массив", () => {
    const inputArr = [1, 4, 3, 4, 5];
    const check = inputArr.slice();
    const result = replaceItemsClear(inputArr, 4, "replaced");
    expect(result).toEqual([1, "replaced", 3, "replaced", 5]);
    expect(result).not.toBe(inputArr);
    expect(inputArr).toEqual(check);
  });
  test("Должна корректно заменять первый и последний элементы", () => {
    const inputArr = [1, 4, 3, 4, 1];
    const check = inputArr.slice();
    const result = replaceItemsClear(inputArr, 1, "replaced");
    expect(result).toEqual(["replaced", 4, 3, 4, "replaced"]);
    expect(result).not.toBe(inputArr);
    expect(inputArr).toEqual(check);
  });
  test("Должна корректно работать со строками", () => {
    const inputArr = ["1", 4, 3, 4, 1];
    const check = inputArr.slice();
    const result = replaceItemsClear(inputArr, "1", "replaced");
    expect(result).toEqual(["replaced", 4, 3, 4, 1]);
    expect(result).not.toBe(inputArr);
    expect(inputArr).toEqual(check);
  });
});
describe("ReplaceItemsMutate", () => {
  test("Должна мутировать входящий массив", () => {
    const inputArr = [1, 4, 3, 4, 1];
    const result = replaceItemsMutate(inputArr, 4, "replaced");
    expect(result).toEqual([1, "replaced", 3, "replaced", 1]);
    expect(result).toBe(inputArr);
  });
  test("Должна корректно заменять первый и последний элементы", () => {
    const inputArr = [1, 4, 3, 4, 1];
    const result = replaceItemsMutate(inputArr, 1, "replaced");
    expect(result).toEqual(["replaced", 4, 3, 4, "replaced"]);
    expect(result).toBe(inputArr);
  });
  test("Должна корректно работать со строками", () => {
    const inputArr = ["1", 4, 3, 4, 1];
    const result = replaceItemsMutate(inputArr, "1", "replaced");
    expect(result).toEqual(["replaced", 4, 3, 4, 1]);
    expect(result).toBe(inputArr);
  });
});
