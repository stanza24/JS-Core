const merge = (...objs) => {
  return objs.reduce((acc, cur) => {
    if (cur && typeof cur === "object" && !Array.isArray(cur)) {
      return { ...acc, ...cur };
    }
    return acc;
  }, {});
};

export { merge };
