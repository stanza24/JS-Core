function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completedPromises = 0;
    if (promises.length === 0) {
      resolve(results);
    } else {
      promises.forEach((promise, index) => {
        Promise.resolve(promise).then(
          (value) => {
            results[index] = value;
            completedPromises += 1;
            if (completedPromises === promises.length) {
              resolve(results);
            }
          },
          (reason) => {
            reject(reason);
          }
        );
      });
    }
  });
}

export { promiseAll };
