import { getNumbersByParity } from "./problem1-2-10";

const PARITY = {
  EVEN: "even",
  ODD: "odd",
};

describe("parity", () => {
  const dataset1 = [1, 2, 3, 4, 5, 6];
  const dataset2 = [1, 3, 5];
  const dataset3 = [1, 1, 1, 2, 2, 2, 3, 3, 3];
  const dataset4 = [0, 0, 0, 1, 2];

  it("должна работать с четными числами", () => {
    expect(getNumbersByParity(dataset1, PARITY.EVEN)).toEqual([2, 4, 6]);
    expect(getNumbersByParity(dataset2, PARITY.EVEN)).toEqual([]);
    expect(getNumbersByParity(dataset3, PARITY.EVEN)).toEqual([2, 2, 2]);
    expect(getNumbersByParity(dataset4, PARITY.EVEN)).toEqual([0, 0, 0, 2]);
  });
  it("должна работать с нечетными числами", () => {
    expect(getNumbersByParity(dataset1, PARITY.ODD)).toEqual([1, 3, 5]);
    expect(getNumbersByParity(dataset2, PARITY.ODD)).toEqual([1, 3, 5]);
    expect(getNumbersByParity(dataset3, PARITY.ODD)).toEqual([
      1, 1, 1, 3, 3, 3,
    ]);
    expect(getNumbersByParity(dataset4, PARITY.ODD)).toEqual([1]);
  });
  it("должна корректно работать с пустым массивом на входе", () => {
    expect(getNumbersByParity([], PARITY.ODD)).toEqual([]);
    expect(getNumbersByParity([], PARITY.EVEN)).toEqual([]);
  });
});
