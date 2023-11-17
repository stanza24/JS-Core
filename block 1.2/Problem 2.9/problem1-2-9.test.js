import { hasArrays } from "./problem1-2-9";

it("Должен определять, есть ли массив в исходном массиве", () => {
  expect(hasArrays([false, true, [1, 2], {}, [], 1, 0, NaN])).toBe(true);
  expect(hasArrays([1, 2, 3])).toBe(false);
  expect(hasArrays([])).toBe(false);
  expect(hasArrays([{}])).toBe(false);
});
