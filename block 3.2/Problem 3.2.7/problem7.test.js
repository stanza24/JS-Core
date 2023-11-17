import { promisesInSeries } from "./problem7";

describe("promisesInSeries", () => {
  test("должна вызывать функции в правильной последовательности", async () => {
    // Используем флаги для отслеживания порядка выполнения
    let firstCalled = false;
    let secondCalled = false;

    const firstPromise = jest.fn(
      () =>
        new Promise((resolve) => {
          firstCalled = true; // Помечаем, что первая функция вызвана
          setTimeout(() => resolve("first"), 10);
        })
    );

    const secondPromise = jest.fn(
      () =>
        new Promise((resolve) => {
          expect(firstCalled).toBeTruthy(); // Проверяем, что первая функция была вызвана
          secondCalled = true; // Помечаем, что вторая функция вызвана
          setTimeout(() => resolve("second"), 10);
        })
    );

    const thirdPromise = jest.fn(
      () =>
        new Promise((resolve) => {
          expect(secondCalled).toBeTruthy(); // Проверяем, что вторая функция была вызвана
          setTimeout(() => resolve("third"), 10);
        })
    );

    // Запускаем функцию с моковыми промисами
    await promisesInSeries([firstPromise, secondPromise, thirdPromise]);

    // Проверяем, что каждая функция была вызвана
    expect(firstPromise).toHaveBeenCalled();
    expect(secondPromise).toHaveBeenCalled();
    expect(thirdPromise).toHaveBeenCalled();
  });

  test("должна возвращать Promise<undefined> на вызов без параметров", async () => {
    // Вызываем функцию без параметров и проверяем результат
    await expect(promisesInSeries([])).resolves.toBeUndefined();
  });
});
