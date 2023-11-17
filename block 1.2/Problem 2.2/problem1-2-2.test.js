import { finalGrade } from "./problem1-2-2";

describe("final grade", () => {
  it("должен вычислять количество букв в строке", () => {
    expect(finalGrade(100, 12)).toBe(100);
    expect(finalGrade(99, 0)).toBe(100);
    expect(finalGrade(10, 15)).toBe(100);
    expect(finalGrade(85, 5)).toBe(90);
    expect(finalGrade(75, 5)).toBe(75);
    expect(finalGrade(85, 4)).toBe(75);
    expect(finalGrade(55, 3)).toBe(75);
    expect(finalGrade(55, 2)).toBe(75);
    expect(finalGrade(55, 0)).toBe(0);
    expect(finalGrade(20, 2)).toBe(0);
  });
});
