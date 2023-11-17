async function promisesInSeries(asyncFns) {
  let result = undefined;
  for (let promiseFn of asyncFns) {
    result = await promiseFn(result);
  }
  return result;
}

export { promisesInSeries };
