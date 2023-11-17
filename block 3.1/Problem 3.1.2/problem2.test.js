import { incrementCounter } from "./problem2";

const localStorageMock = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(global, "localStorage", { value: localStorageMock });
Object.defineProperty(global, "window", {
  value: { localStorage: localStorageMock },
});

describe("incrementCounter tests", () => {
  // Создаем шпионов для localStorage
  let getItemSpy;
  let setItemSpy;

  beforeEach(() => {
    // Очищаем моки перед каждым тестом
    getItemSpy = jest.spyOn(window.localStorage, "getItem");
    setItemSpy = jest.spyOn(window.localStorage, "setItem");
  });

  afterEach(() => {
    // Восстанавливаем оригинальную реализацию после каждого теста
    jest.restoreAllMocks();
  });

  test("счетчик увеличивается при валидном localStorage с единственным значением", () => {
    getItemSpy.mockReturnValue(JSON.stringify({ bannerClick: 5 }));
    expect(incrementCounter("bannerClick")).toBe(6);
    expect(setItemSpy).toHaveBeenCalledWith(
      "counters",
      JSON.stringify({ bannerClick: 6 })
    );
  });

  test("счетчик увеличивается при валидном localStorage с несколькими значениями", () => {
    getItemSpy.mockReturnValue(
      JSON.stringify({ bannerClick: 5, bannerClose: 3 })
    );
    expect(incrementCounter("bannerClose")).toBe(4);
    expect(setItemSpy).toHaveBeenCalledWith(
      "counters",
      JSON.stringify({ bannerClick: 5, bannerClose: 4 })
    );
  });

  test("счетчик устанавливается при невалидном JSON", () => {
    getItemSpy.mockReturnValue("невалидный JSON");
    expect(incrementCounter("invalidCounter")).toBe(1);
    expect(setItemSpy).toHaveBeenCalledWith(
      "counters",
      JSON.stringify({ invalidCounter: 1 })
    );
  });
});
