import { merge } from "./problem4";

describe("merge", () => {
  test("должна использовать оператор spread", () => {
    const functionString = merge.toString();
    console.log(functionString);
    expect(functionString).toMatch("objectSpread");
  });

  test("должна объединять объекты", () => {
    const obj1 = { name: "John" };
    const obj2 = { age: 22 };
    const obj3 = { hobby: "chess" };
    const result = merge(obj1, obj2, obj3);

    expect(result).toEqual({ name: "John", age: 22, hobby: "chess" });
  });

  test("должна перезаписывать повторяющиеся поля", () => {
    const obj1 = { name: "John", age: 22 };
    const obj2 = { age: 30 };
    const result = merge(obj1, obj2);

    expect(result).toEqual({ name: "John", age: 30 });
  });

  // Дополнительный тест: должна корректно обрабатывать входные данные без объектов
  test("должна возвращать пустой объект, если не переданы аргументы", () => {
    const result = merge();
    expect(result).toEqual({});
  });

  // Дополнительный тест: должна корректно обрабатывать необъектные аргументы
  test("должна игнорировать необъектные аргументы", () => {
    const obj1 = { name: "John" };
    const notAnObj = "Not an object";
    const result = merge(obj1, notAnObj);

    expect(result).toEqual({ name: "John" });
  });
});
