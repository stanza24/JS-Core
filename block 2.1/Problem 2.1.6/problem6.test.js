import { getArraysCounts } from "./problem6";

describe("getArraysCounts", () => {
  test("должна возвращать Map", () => {
    const data = [1, 2, 3];
    const counts = getArraysCounts(data);
    expect(counts).toBeInstanceOf(Map);
  });

  test("должна подсчитывать количество значений в массиве (примитивное значение)", () => {
    const data = [1, 1, 2, 2, 2, 3];
    const counts = getArraysCounts(data);
    expect(counts.get(1)).toBe(2);
    expect(counts.get(2)).toBe(3);
    expect(counts.get(3)).toBe(1);
  });

  test("должна подсчитывать количество значений в массиве (объект)", () => {
    const obj = { name: "test" };
    const data = [obj, obj, { name: "test" }, 1, 2];
    const counts = getArraysCounts(data);
    expect(counts.get(obj)).toBe(2);
    expect(counts.get({ name: "test" })).toBeUndefined(); // Объекты с одинаковыми данными не считаются одним и тем же ключом
    expect(counts.get(1)).toBe(1);
    expect(counts.get(2)).toBe(1);
  });

  test("должна корректно обрабатывать пустой массив", () => {
    const data = [];
    const counts = getArraysCounts(data);
    expect(counts.size).toBe(0);
  });

  test("должна учитывать разные типы данных", () => {
    const data = [1, "1", true, "true", null, undefined, null];
    const counts = getArraysCounts(data);
    expect(counts.get(1)).toBe(1);
    expect(counts.get("1")).toBe(1);
    expect(counts.get(true)).toBe(1);
    expect(counts.get("true")).toBe(1);
    expect(counts.get(null)).toBe(2);
    expect(counts.get(undefined)).toBe(1);
  });

  // Этот тест проверяет уникальность объектов в качестве ключей
  test("должна различать объекты, даже если они выглядят как идентичные", () => {
    const obj1 = { name: "obj" };
    const obj2 = { name: "obj" };
    const data = [obj1, obj1, obj2];
    const counts = getArraysCounts(data);
    expect(counts.get(obj1)).toBe(2);
    expect(counts.get(obj2)).toBe(1);
  });
});
