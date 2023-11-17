function invert(obj) {
  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    newObj[value.toString()] = key;
  }
  return newObj;
}

export { invert };
