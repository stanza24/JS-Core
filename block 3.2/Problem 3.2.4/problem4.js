function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    // Для каждого промиса в массиве
    promises.forEach((promise) => {
      // Используем Promise.resolve для обработки всех типов значений (например, если это не промис).
      Promise.resolve(promise).then(
        (value) => resolve(value), // Если промис выполнился, резолвим основной промис
        (error) => reject(error) // Если промис был отклонен, реджектим основной промис
      );
    });
  });
}

export { promiseRace };
