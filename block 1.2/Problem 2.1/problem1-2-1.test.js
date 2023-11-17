import { lettersCount } from "./problem1-2-1";

describe("letters count", () => {
  it("должен вычислять количество букв в строке", () => {
    expect(lettersCount("aaabbccde")).toEqual({
      a: 3,
      b: 2,
      c: 2,
      d: 1,
      e: 1,
    });
  });
  it("должен работать с пустой строкой", () => {
    expect(lettersCount("")).toEqual({});
  });
  it("должен приводить все символы к нижнему регистру перед подсчетом", () => {
    expect(lettersCount("BBccDe")).toEqual({
      b: 2,
      c: 2,
      d: 1,
      e: 1,
    });
  });
});
