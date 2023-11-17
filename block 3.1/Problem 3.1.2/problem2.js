function incrementCounter(counterName) {
  try {
    const data = localStorage.getItem("counters");
    const parseData = JSON.parse(data);
    for (let key in parseData) {
      if (key === counterName) {
        parseData[key]++;
        localStorage.setItem("counters", JSON.stringify(parseData));
        return parseData[key];
      }
    }
    parseData[counterName] = 1;
    localStorage.setItem("counters", JSON.stringify(parseData));
    return 1;
  } catch {
    const counters = {};
    counters[counterName] = 1;
    localStorage.setItem("counters", JSON.stringify(counters));
    return 1;
  }
}

export { incrementCounter };
