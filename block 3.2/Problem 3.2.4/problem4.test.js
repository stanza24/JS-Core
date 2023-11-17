import { promiseRace } from "./problem4";

describe("promiseRace", () => {
  test("должна возвращать результат первого выполнившегося промиса", async () => {
    const firstPromise = new Promise((resolve) =>
      setTimeout(() => resolve(300), 300)
    );
    const secondPromise = new Promise((resolve) =>
      setTimeout(() => resolve(200), 200)
    );
    const thirdPromise = new Promise((resolve) =>
      setTimeout(() => resolve(100), 100)
    );

    await expect(
      promiseRace([firstPromise, secondPromise, thirdPromise])
    ).resolves.toBe(100);
  });

  test("должна прокидывать ошибку", async () => {
    const promise1 = Promise.resolve(200);
    const promise2 = Promise.reject(new Error("our test error"));

    await expect(promiseRace([promise2, promise1])).rejects.toThrow(
      "our test error"
    );
  });

  test("не должна вызывать Promise.race стандартной библиотеки", () => {
    const spy = jest.spyOn(global.Promise, "race");
    promiseRace([]);
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
});
