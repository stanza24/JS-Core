Object.create = function (proto, propertiesObject = {}) {
  if (typeof proto !== "object" || arguments.length === 0) {
    throw new TypeError("TypeError");
  }
  if (propertiesObject !== undefined) {
    let obj = Object.setPrototypeOf(propertiesObject, proto);
    Object.defineProperties(obj, propertiesObject);
    return obj;
  }

  return Object.defineProperties(propertiesObject, proto);
};
