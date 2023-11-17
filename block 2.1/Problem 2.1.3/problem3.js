const sum = (...nums) => {
  return nums
    .map((item) => {
      return +item;
    })
    .filter((elem) => {
      return +elem;
    })
    .reduce((acc, cur) => {
      return (cur += acc);
    }, 0);
};

export { sum };
