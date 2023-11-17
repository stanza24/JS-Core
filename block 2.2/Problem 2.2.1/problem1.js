function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

//@stanzzza
function isEmptyWithProtos(obj) {
  for (let key in obj) {
    if (key) {
      return false;
    }
  }
  return true;
}

export { isEmpty, isEmptyWithProtos };
