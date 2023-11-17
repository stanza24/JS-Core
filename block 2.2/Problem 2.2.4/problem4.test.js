describe("object-create", () => {
  test("должен возвращать пустой объект при вызове с аргументом null", () => {
    const obj = Object.create(null);
    expect(Object.getPrototypeOf(obj)).toBe(null);
    expect(Object.getOwnPropertyNames(obj).length).toBe(0);
  });

  test("аргумент `prototype` отрабатывает должным образом", () => {
    const proto = { a: 1 };
    const obj = Object.create(proto);
    expect(Object.getPrototypeOf(obj)).toBe(proto);
    expect(obj.a).toBe(1);
  });

  test("аргумент `properties` отрабатывает должным образом", () => {
    const obj = Object.create(
      {},
      {
        p: {
          value: 42,
          writable: true,
          enumerable: true,
          configurable: true,
        },
      }
    );
    expect(obj.p).toBe(42);
  });

  test("объект A должен является прототипом объекта B", () => {
    const A = { a: 1 };
    const B = Object.create(A);
    expect(A.isPrototypeOf(B)).toBeTruthy();
  });

  test("объекты A и B должны быть разными", () => {
    const A = { a: 1 };
    const B = Object.create(A);
    expect(A).not.toBe(B);
  });

  test("без аргументов должна быть ошибка TypeError", () => {
    expect(() => Object.create()).toThrow(TypeError);
  });

  test("если первый параметр не является объектом или null, то должна быть ошибка TypeError", () => {
    expect(() => Object.create(undefined)).toThrow(TypeError);
    expect(() => Object.create(1)).toThrow(TypeError);
    expect(() => Object.create("string")).toThrow(TypeError);
    expect(() => Object.create(false)).toThrow(TypeError);
  });
});
