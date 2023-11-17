import { optionalChaining } from "./problem1-3-3";

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Array) {
    let copy = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }

  if (obj instanceof Object) {
    let copy = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepClone(obj[key]);
      }
    }
    return copy;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");
}

describe("optionalChaining", () => {
  const obj = {
    a: {
      b: {
        c: {
          d: "Привет!",
          e: {
            f: function () {
              return "Функция";
            },
            g: [1, 2, 3],
          },
        },
      },
    },
  };
  const originalObj = deepClone(obj); // Проверь @stanzzza

  it("должна получать свойство по цепочке", () => {
    expect(optionalChaining(obj, ["a", "b", "c", "d"])).toBe("Привет!");
  });

  it("не должна изменять исходные объект", () => {
    optionalChaining(obj, ["a", "b", "c", "d"]);
    expect(obj).toEqual(originalObj);
  });

  it("должна получать свойство любого уровня вложенности", () => {
    expect(optionalChaining(obj, ["a", "b", "c"])).toEqual({
      d: "Привет!",
      e: { f: expect.any(Function), g: [1, 2, 3] },
    });
  });

  it("должна корректно возвращать объекты, функции и массивы", () => {
    expect(optionalChaining(obj, ["a", "b", "c", "e"])).toEqual({
      f: expect.any(Function),
      g: [1, 2, 3],
    });
    expect(optionalChaining(obj, ["a", "b", "c", "e", "f"])()).toBe("Функция");
    expect(optionalChaining(obj, ["a", "b", "c", "e", "g"])).toEqual([1, 2, 3]);
  });

  it("должна возвращать undefined если свойства по указанному пути нет", () => {
    expect(optionalChaining(obj, ["a", "b", "c", "d", "e"])).toBeUndefined();
    expect(optionalChaining(obj, ["a", "c", "d"])).toBeUndefined();
    expect(optionalChaining(obj, ["b", "d", "a"])).toBeUndefined();
  });

  it("должна возвращать undefined на пустом массиве параметров", () => {
    expect(optionalChaining(obj, [])).toBeUndefined();
  });
});
