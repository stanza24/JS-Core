// Импортируем функции и классы ошибок
import {
  getRepeatableData,
  NotFoundError,
  AttemptsLimitExceeded,
  TemporaryError,
} from "./problem3";

describe("getRepeatableData", () => {
  test("возвращает данные, когда getData успешно выполняется", () => {
    const getDataMock = jest.fn(() => "hello1");
    expect(getRepeatableData(getDataMock, "1", 3)).toBe("hello1");
    expect(getDataMock).toHaveBeenCalledWith("1");
  });

  test("повторяет попытки при TemporaryError и в конце успешно возвращает данные", () => {
    const temporaryError = new Error("TemporaryError");
    temporaryError.name = "TemporaryError";
    const getDataMock = jest
      .fn()
      .mockImplementationOnce(() => {
        throw temporaryError;
      })
      .mockImplementationOnce(() => "hello1");

    expect(getRepeatableData(getDataMock, "1", 3)).toBe("hello1");
    expect(getDataMock).toHaveBeenCalledTimes(2);
  });

  test("выбрасывает исключение AttemptsLimitExceeded при превышении максимального числа запросов", () => {
    const temporaryError = new Error("TemporaryError");
    temporaryError.name = "TemporaryError";
    const getDataMock = jest.fn(() => {
      throw temporaryError;
    });

    expect(() => getRepeatableData(getDataMock, "1", 2)).toThrow(
      AttemptsLimitExceeded
    );
    expect(getDataMock).toHaveBeenCalledTimes(2); // Изначальный вызов + 2 попытки
  });

  test("выбрасывает исключение NotFoundError без повторных попыток", () => {
    const notFoundError = new Error("NotFoundError");
    notFoundError.name = "NotFoundError";
    const getDataMock = jest.fn(() => {
      throw notFoundError;
    });

    expect(() => getRepeatableData(getDataMock, "1", 3)).toThrow(NotFoundError);
    expect(getDataMock).toHaveBeenCalledTimes(1);
  });
});
