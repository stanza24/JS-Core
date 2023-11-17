import { getUsersIds, getUserInfo } from "./db"; // Импорт функций напрямую из модуля db

function getUsersInfo(callback) {
  getUsersIds((ids) => {
    const usersInfo = [];
    let idsProcessed = 0;

    if (ids.length === 0) {
      callback(usersInfo); // если нет идентификаторов, возвращаем пустой массив
      return;
    }

    ids.forEach((id) => {
      getUserInfo(id, (userInfo) => {
        usersInfo.push(userInfo);
        idsProcessed++;
        if (idsProcessed === ids.length) {
          // Когда информация по всем пользователям собрана, вызываем колбэк
          callback(usersInfo);
        }
      });
    });
  });
}

export { getUsersInfo };
