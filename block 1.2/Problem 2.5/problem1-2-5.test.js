import { areBracketsBalanced } from "./problem1-2-5";

describe("are Brackets Balanced", () => {
  it("должны быть верными", () => {
    const str1 = "()";
    expect(areBracketsBalanced(str1)).toBe(true);
    const str2 = "(())";
    expect(areBracketsBalanced(str2)).toBe(true);
    const str3 = "((()())())";
    expect(areBracketsBalanced(str3)).toBe(true);
    const str4 = "";
    expect(areBracketsBalanced(str4)).toBe(true);
    const str5 = " ";
    expect(areBracketsBalanced(str5)).toBe(true);
  });
  it("должны быть неверными", () => {
    const str1 = ")(";
    expect(areBracketsBalanced(str1)).toBe(false);
    const str2 = "())(()";
    expect(areBracketsBalanced(str2)).toBe(false);
    const str3 = "())(";
    expect(areBracketsBalanced(str3)).toBe(false);
  });
});
