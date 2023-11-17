const usersData = {
  id1: { name: "Alex", age: 70 },
  id2: { name: "Elon" },
  // Добавьте больше пользователей, если нужно
};

const getUsersIds = (callback) => {
  // Имитация асинхронного вызова, возвращающего ключи объекта usersData
  setTimeout(() => callback(Object.keys(usersData)), 100);
};

const getUserInfo = (userId, callback) => {
  // Имитация асинхронного вызова, возвращающего данные пользователя по userId
  setTimeout(() => callback(usersData[userId]), 100);
};

export { getUsersIds, getUserInfo };
