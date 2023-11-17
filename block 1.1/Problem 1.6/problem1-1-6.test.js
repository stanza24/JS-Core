const wrapInParagraph = require("./problem1-1-6");

const text1 = `Some
simple multiline
text`;
const text2 = "some\ntext";

describe("Wrap in paragraph", () => {
  it("должна корректно оборачивать в тег p", () => {
    expect(wrapInParagraph(text1)).toBe(
      "<p>Some</p>\n<p>simple multiline</p>\n<p>text</p>",
    );
    expect(wrapInParagraph(text2)).toBe("<p>some</p>\n<p>text</p>");
  });
});
