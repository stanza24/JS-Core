const getLanguagesStatistic = (data) => {
  let result = data
    .filter((item) => {
      return item.year === 2019;
    })
    .reduce((acc, cur) => {
      if (acc[cur.language]) {
        acc[cur.language] += 1;
      } else {
        acc[cur.language] = 1;
      }
      return acc;
    }, {});

  return result;
};

export { getLanguagesStatistic };
