class ExecutionError extends Error {
  constructor(errorData, stack) {
    super();
    this.name = "ExecutionError";
    this.errorData = errorData;
    this.stack = stack;
  }
  getArgData() {
    return this.errorData;
  }
}

function applyFn(dataArr, callback) {
  return dataArr.reduce(
    (acc, cur) => {
      try {
        acc.succeeded.push(callback(cur));
      } catch (error) {
        acc.errors.push(new ExecutionError(cur, error.stack));
      } finally {
        return acc;
      }
    },
    { succeeded: [], errors: [] }
  );
}

export { ExecutionError, applyFn };
