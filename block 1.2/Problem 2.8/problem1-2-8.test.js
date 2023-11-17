import { moveToStart } from "./problem1-2-8";

describe("moveToStart", () => {
  it("Функция не должна мутировать исходный массив", () => {
    const setFn = jest.fn(() => {
      return true;
    });
    const data = [1, 2, 3, 4, 5];
    const proxyData = new Proxy(data, {
      set: setFn,
    });
    const result = moveToStart(proxyData, 3);
    expect(setFn).not.toBeCalled();
    expect(result === proxyData).not.toBe(true);
  });
  it("Должна передвинуть n элементов массива из конца в начало", () => {
    const data = [1, 2, 3, 4, 5];
    const result = moveToStart(data, 3);
    expect(result).toEqual([3, 4, 5, 1, 2]);
    const data1 = [1, 2, 3, 4, 5, 1, 2];
    const result1 = moveToStart(data1, 3);
    expect(result1).toEqual([5, 1, 2, 1, 2, 3, 4]);
  });
  it("Должна возвращать массив с изначальным порядком, если n больше или равна длине массива", () => {
    const data2 = [1, 2, 3, 4, 5];
    const result2 = moveToStart(data2, data2.length);
    expect(result2).toEqual([1, 2, 3, 4, 5]);
    const result3 = moveToStart(data2, 6);
    expect(result3).toEqual([1, 2, 3, 4, 5]);
  });
});
