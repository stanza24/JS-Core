class AttemptsLimitExceeded extends Error {
  constructor() {
    super("Max attempts limit exceed");
    this.name = "AttemptsLimitExceeded";
  }
}

class NotFoundError extends Error {
  constructor() {
    super("Not found");
    this.name = "NotFoundError";
  }
}

class TemporaryError extends Error {
  constructor() {
    super("TemporaryError");
    this.name = "TemporaryError";
  }
}

function getRepeatableData(getData, key, maxRequestsNumber) {
  let callCount = 0; // Это количество попыток, включая первоначальный вызов

  function recursiveGetData(key, maxRequestsNumber) {
    if (maxRequestsNumber <= 0) {
      throw new AttemptsLimitExceeded("Max attempts limit exceed");
    }
    try {
      return getData(key);
    } catch (error) {
      if (error.name === "TemporaryError") {
        callCount++;
        return recursiveGetData(key, maxRequestsNumber - 1);
      } else if (error.name === "NotFoundError") {
        throw new NotFoundError("Not found");
      } else {
        throw error;
      }
    }
  }
  return recursiveGetData(key, maxRequestsNumber);
}

export {
  AttemptsLimitExceeded,
  NotFoundError,
  TemporaryError,
  getRepeatableData,
};
