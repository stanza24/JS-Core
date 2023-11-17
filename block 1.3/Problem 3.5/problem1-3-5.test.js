import { once } from "./problem1-3-5";

describe("once function", () => {
  it("результирующая функция должна вызывать изначальную только единожды", () => {
    const mockFn = jest.fn();
    const onceFn = once(mockFn);

    onceFn();
    expect(mockFn).toHaveBeenCalledTimes(1);

    onceFn();
    expect(mockFn).toHaveBeenCalledTimes(1); // должен остаться 1 вызов

    onceFn();
    expect(mockFn).toHaveBeenCalledTimes(1); // и после третьего вызова тоже 1 вызов
  });

  it("не должна вызывать функцию, если изначальная функция выбросила исключение", () => {
    const errorFn = jest.fn(() => {
      throw new Error("Error in function");
    });
    const onceErrorFn = once(errorFn);

    expect(() => onceErrorFn()).toThrow("Error in function");
    onceErrorFn();
    expect(errorFn).toHaveBeenCalledTimes(1); // функция вызвалась и выбросила исключение только один раз
  });

  it("должна передавать аргументы в изначальную функцию", () => {
    const mockFn = jest.fn();
    const onceFn = once(mockFn);

    onceFn(1, 2, 3);
    expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
  });
  //@stanzzza
  it("должна возвращать тот же результат при повторном вызове", () => {
    const returnFn = jest.fn(() => "result");
    const onceReturnFn = once(returnFn);

    const firstCallResult = onceReturnFn();
    expect(firstCallResult).toBe("result");
    expect(returnFn).toHaveBeenCalledTimes(1); // Убедимся, что оригинальная функция была вызвана один раз

    const secondCallResult = onceReturnFn(); // Второй вызов, функция не должна выполниться
    expect(secondCallResult).toBe("result"); // Результат должен быть таким же, как и в первый раз
    expect(returnFn).toHaveBeenCalledTimes(1); // Функция всё ещё должна быть вызвана один раз
  });
});
