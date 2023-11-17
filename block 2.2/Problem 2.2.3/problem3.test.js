import { Addition } from "./problem3";

describe("prototypes decorator", () => {
  // Подменяем console.log для перехвата его вызовов
  const logMock = jest.spyOn(console, "log");

  beforeEach(() => {
    // Очищаем мок перед каждым тестом
    logMock.mockClear();
  });

  afterAll(() => {
    // Восстанавливаем реальную функциональность после всех тестов
    logMock.mockRestore();
  });

  test("функция выполняется в контексте экземпляра класса", () => {
    const instance = new Addition(5);
    expect(instance.add(1)).toBe(6);
  });

  test("вызовы add независимы", () => {
    const firstInstance = new Addition(5);
    const secondInstance = new Addition(10);
    firstInstance.add(1);
    secondInstance.add(1);
    expect(logMock).toHaveBeenCalledTimes(2);
  });

  test("экзэмпляры Addition независимы", () => {
    const firstInstance = new Addition(5);
    const secondInstance = new Addition(5);
    expect(firstInstance.add).toEqual(secondInstance.add);
  });

  test('функция логирует "called"', () => {
    const instance = new Addition(5);
    instance.add(2);
    expect(logMock).toHaveBeenCalledWith("called");
  });

  test("функция возвращает правильный результат при декорировании", () => {
    const instance = new Addition(5);
    const result = instance.add(3, 5, 6);
    expect(result).toBe(19);
    expect(logMock).toHaveBeenCalledWith("called");
  });
});
