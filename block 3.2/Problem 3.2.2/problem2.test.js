// problem2.test.js
import { getUsersInfo } from "./problem2";
import * as db from "./db"; // предполагается, что db - это файл, откуда вы импортируете функции

// Мокаем весь модуль db
jest.mock("./db", () => ({
  getUsersIds: jest.fn(),
  getUserInfo: jest.fn(),
}));

beforeEach(() => {
  db.getUsersIds.mockImplementation((callback) => {
    setTimeout(() => callback(["id1", "id2"]), 100);
  });

  db.getUserInfo.mockImplementation((id, callback) => {
    const users = {
      id1: { name: "Alex", age: 70 },
      id2: { name: "Elon" },
    };
    setTimeout(() => callback(users[id]), 100);
  });
});

test("should fetch users info based on ids", (done) => {
  getUsersInfo((users) => {
    expect(users).toEqual([{ name: "Alex", age: 70 }, { name: "Elon" }]);
    expect(db.getUsersIds).toHaveBeenCalledTimes(1);
    expect(db.getUserInfo).toHaveBeenCalledTimes(2);
    done();
  });
});
