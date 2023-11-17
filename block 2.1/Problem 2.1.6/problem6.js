const getArraysCounts = (arr) => {
  return arr.reduce((acc, cur) => {
    if (acc.has(cur)) {
      return acc.set(cur, acc.get(cur) + 1);
    } else {
      return acc.set(cur, 1);
    }
  }, new Map());
};

export { getArraysCounts };
