import { getFileSize, sumFileSizes, fileSizes } from "./problem1";

describe("sumFileSizes", () => {
  test("суммирует размеры двух файлов", (done) => {
    sumFileSizes("testFile1", "testFile2", (sum, error) => {
      expect(error).toBeUndefined();
      expect(sum).toBe(65 + 48);
      done();
    });
  });

  test("возвращает ошибку для несуществующего файла", (done) => {
    sumFileSizes("testFile1", "nonExistentFile", (sum, error) => {
      expect(error).toBeDefined();
      expect(error.message).toContain("not found");
      done();
    });
  });
});
