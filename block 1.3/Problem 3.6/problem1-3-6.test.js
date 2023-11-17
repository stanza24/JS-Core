import { inArray, inRange, notInArray } from "./problem1-3-6";

describe("Array Filters", () => {
  describe("inRange", () => {
    it("должна возвращать функцию", () => {
      expect(typeof inRange(1, 2)).toBe("function");
    });

    it("должна возвращать false для всех элементов, если a > b", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(arr.filter(inRange(5, 3))).toEqual([]);
    });

    it("должна удалять из массива значения, не лежащие в данном промежутке или не являющиеся числом", () => {
      const arr = [1, 2, 3, 4, 5, "6", "text", undefined, NaN];
      expect(arr.filter(inRange(3, 5))).toEqual([3, 4, 5]);
    });
  });

  describe("inArray", () => {
    it("должны возвращать функции", () => {
      expect(typeof inArray([1, 2, 3])).toBe("function");
    });

    it("должна удалять из фильтруемого массива значения, не находящиеся в массиве, переданном в аргументы inArray", () => {
      const arr = [1, 2, 4, 5];
      expect(arr.filter(inArray([1, 2, 3]))).toEqual([1, 2]);
    });
  });

  describe("notInArray", () => {
    it("должны возвращать функции", () => {
      expect(typeof notInArray([1, 2, 3])).toBe("function");
    });

    it("должна удалять из фильтруемого массива значения, находящиеся в массиве, переданном в аргументы notInArray", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(arr.filter(notInArray([1, 2, 3]))).toEqual([4, 5]);
    });
  });
});
