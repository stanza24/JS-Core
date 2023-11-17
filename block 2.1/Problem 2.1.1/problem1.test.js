import { invert } from "./problem1";

describe("invert", () => {
  test("должен переворачивать объект со строками", () => {
    expect(invert({ a: "1", b: "2", c: "3" })).toEqual({
      1: "a",
      2: "b",
      3: "c",
    });
  });

  test("должен переворачивать объект с числами", () => {
    expect(invert({ a: 1, b: 2, c: 3 })).toEqual({ 1: "a", 2: "b", 3: "c" });
  });

  test("должен использовать метод toString", () => {
    const mockValue = {
      toString: jest.fn().mockReturnValue("mocked value"),
    };
    const inverted = invert({ a: mockValue });
    expect(mockValue.toString).toHaveBeenCalled();
    expect(inverted["mocked value"]).toBe("a");
  });

  test("должен возвращать новый пустой объект на пустой объект", () => {
    expect(invert({})).toEqual({});
  });
});
