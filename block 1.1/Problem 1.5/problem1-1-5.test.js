const reverseLongWords = require("./problem1-1-5");

describe("reverseLongWords", () => {
  it("должна заменять слова с >= 5 символов на написанные наоборот", () => {
    expect(reverseLongWords("Hey fellow warriors")).toBe("Hey wollef sroirraw");
    expect(reverseLongWords("This is a test")).toBe("This is a test");
    expect(reverseLongWords("This is another test")).toBe(
      "This is rehtona test"
    );
  });
});
