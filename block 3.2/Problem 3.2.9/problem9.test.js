import { debounce } from "./problem9";

jest.useFakeTimers();

describe("debounce", () => {
  test("должна блокировать вызовы функции в течение времени задержки, пока функция вызывается снова ранее, чем прошло время задержки", () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 200);

    debouncedFunc();
    expect(func).not.toHaveBeenCalled(); // функция не должна вызываться сразу

    // До истечения задержки снова вызываем функцию
    for (let i = 1; i <= 4; i++) {
      jest.advanceTimersByTime(100);
      debouncedFunc();
    }

    expect(func).not.toHaveBeenCalled(); // функция все еще не должна быть вызвана

    // После последнего вызова ждем, когда пройдет время задержки
    jest.advanceTimersByTime(200);
    expect(func).toHaveBeenCalledTimes(1); // функция должна быть вызвана один раз
  });

  test("должна передать контекст вызова и аргументы debounced-функции в оригинальную функцию", () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 200);
    const context = { a: 1 };
    const args = [1, 2, 3];

    debouncedFunc.apply(context, args);

    // После истечения времени задержки
    jest.advanceTimersByTime(200);

    expect(func).toHaveBeenCalledWith(...args); // функция должна быть вызвана с правильными аргументами
    expect(func).toHaveBeenLastCalledWith(...args); // последний вызов с этими же аргументами
    expect(func.mock.instances[0]).toBe(context); // контекст вызова должен быть передан
  });
});
