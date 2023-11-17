import * as problem2 from "./problem1-3-2";

describe("getStringCount", () => {
  it("корректно считает строки в простых структурах", () => {
    const obj = {
      first: "string1",
      second: "string2",
      third: 123,
      fourth: true,
    };
    expect(problem2.getStringCount(obj)).toBe(2);
  });

  it("корректно считает строки во вложенных структурах", () => {
    const nestedObj = {
      first: "string1",
      second: {
        third: "string2",
        fourth: {
          fifth: "string3",
        },
      },
      sixth: 123,
    };
    expect(problem2.getStringCount(nestedObj)).toBe(3);
  });

  it("была использована рекурсия", () => {
    const spy = jest.spyOn(problem2, "getStringCount");
    const recursiveObj = {
      level1: {
        level2: {
          level3: "string1",
        },
        level2no2: "string2",
      },
    };
    problem2.getStringCount(recursiveObj);

    expect(spy).toHaveBeenCalledTimes(3);

    spy.mockRestore();
  });
});
