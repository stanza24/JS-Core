const capitalize = require("./problem1-1-4");

const dataset1 = ["iT iS tHE oPPOSITE"];
const dataset2 = ["anOthEr VeRy lonG StRing"];
const dataset3 = ["True String"];

describe("capitalize", () => {
  it("should correctly capitalize", () => {
    dataset1.forEach((str) =>
      expect(capitalize(str)).toBe("It Is The Opposite")
    );
    dataset2.forEach((str) =>
      expect(capitalize(str)).toBe("Another Very Long String")
    );
    dataset3.forEach((str) => expect(capitalize(str)).toBe("True String"));
  });
});
