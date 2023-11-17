import { findAllIdx } from "./problem1-2-6";

describe("FindAllIdx", () => {
  it("должна находить индексы, когда элемент стоит на первом или последнем месте", () => {
    expect(findAllIdx([4, 2, 3, 4, 2, 2, 4], 4)).toStrictEqual([0, 3, 6]);
    expect(findAllIdx([0, 5, 10, 10000], 0)).toStrictEqual([0]);
    expect(findAllIdx([1, 1, 1, 1, 1, 1], 1)).toStrictEqual([0, 1, 2, 3, 4, 5]);
    expect(findAllIdx([4, 2, 3, 4, 2, 2, 4], 4)).toStrictEqual([0, 3, 6]);
  });
  it("должна возвращать пустой массив, если элемента нет в массиве", () => {
    expect(findAllIdx([], 4)).toStrictEqual([]);
    expect(findAllIdx([4, 2, 3, 4, 2, 2, 4], 5)).toStrictEqual([]);
  });
  it("должна корректно работать со строками", () => {
    expect(findAllIdx([5, 2, 3, "5", 2, 5, 4], "5")).toStrictEqual([3]);
    expect(findAllIdx([5, 2, 3, "5", 2, 5, 4], 5)).toStrictEqual([0, 5]);
  });
  it("должна корректно работать с undefined", () => {
    expect(findAllIdx([5, undefined, 4], undefined)).toStrictEqual([1]);
    expect(findAllIdx([5, null, undefined], undefined)).toStrictEqual([2]);
    expect(findAllIdx([], undefined)).toStrictEqual([]);
  });
});
