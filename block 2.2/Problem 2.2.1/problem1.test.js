import { isEmpty, isEmptyWithProtos } from "./problem1";

describe("isEmpty", () => {
  test("должна возвращать true на пустой объект без прототипа", () => {
    const obj = Object.create(null);
    expect(isEmpty(obj)).toBe(true);
  });

  test("должна возвращать true на пустой объект с прототипом", () => {
    const obj = {};
    expect(isEmpty(obj)).toBe(true);
  });

  test("должна возвращать false на не пустой объект", () => {
    const obj = { prop: "value" };
    expect(isEmpty(obj)).toBe(false);
  });
});

describe("isEmptyWithProtos", () => {
  test("должна возвращать true на пустой объект без прототипа", () => {
    const obj = Object.create(null);
    expect(isEmptyWithProtos(obj)).toBe(true);
  });

  test("должна возвращать true на пустой объект с прототипом Object.prototype", () => {
    const emptyObject = {};
    expect(isEmptyWithProtos(emptyObject)).toBe(true);
  });

  test("должна возвращать true на пустой объект с пустым прототипом", () => {
    const protoObj = Object.create(null);
    const obj = Object.create(protoObj);
    expect(isEmptyWithProtos(obj)).toBe(true);
  });

  test("должна возвращать false на объект с прототипом со свойствами", () => {
    const protoObj = { someProp: "someValue" };
    const obj = Object.create(protoObj);
    expect(isEmptyWithProtos(obj)).toBe(false);
  });

  test("должна возвращать false на не пустой объект", () => {
    const obj = { prop: "value" };
    expect(isEmptyWithProtos(obj)).toBe(false);
  });
});
