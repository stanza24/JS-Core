const functions = require("./problem1-1-1");

const reference = functions.reference;
const type = functions.type;

describe("reference", () => {
  test("Должна быть функцией", () => {
    expect(typeof reference).toBe("function");
  });
  test("Должна возвращать ошибку ReferenceError", () => {
    expect(() => reference()).toThrow(ReferenceError);
  });
});

describe("type", () => {
  test("Должна быть функцией", () => {
    expect(typeof type).toBe("function");
  });
  test("Должна возвращать ошибку TypeError", () => {
    expect(() => type()).toThrow(TypeError);
  });
});
