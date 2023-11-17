import { calculatePrice } from "./problem1-4-3";

describe("calculatePrice", () => {
  it("должна подсчитывать стоимость", () => {
    const data = [
      { type: "food", price: 130 },
      { type: "clothes", price: 7300 },
      { type: "other", price: 1400 },
    ];
    expect(calculatePrice(data)).toBe(8830);
  });

  it("стоимость пустого массива заказов должна быть равна нулю", () => {
    expect(calculatePrice([])).toBe(0);
  });

  it("если массив не передан, цена должна быть равна нулю", () => {
    expect(calculatePrice()).toBe(0);
  });

  it("если передан не массив, цена должна быть равна нулю", () => {
    expect(calculatePrice({})).toBe(0); // передаем объект
    expect(calculatePrice("string")).toBe(0); // передаем строку
  });

  it("если передан null, цена должна быть равна нулю", () => {
    expect(calculatePrice(null)).toBe(0);
  });
});
