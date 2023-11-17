import { promiseAll } from "./problem5";

describe("promiseAll", () => {
  test("должна возвращать массив результатов с результатами в правильном порядке", async () => {
    const firstPromise = new Promise((resolve) =>
      setTimeout(() => resolve(300), 300)
    );
    const secondPromise = new Promise((resolve) =>
      setTimeout(() => resolve(200), 200)
    );
    const thirdPromise = new Promise((resolve) =>
      setTimeout(() => resolve(100), 100)
    );

    const result = await promiseAll([
      firstPromise,
      secondPromise,
      thirdPromise,
    ]);
    expect(result).toEqual([300, 200, 100]);
  });

  test("должна возвращать Promise<[]> на вызов с пустым массивом", async () => {
    const result = await promiseAll([]);
    expect(result).toEqual([]);
  });

  test("не должна вызывать Promise.all стандартной библиотеки", () => {
    const spy = jest.spyOn(global.Promise, "all");
    promiseAll([]);
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
});
