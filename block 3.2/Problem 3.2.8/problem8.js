const throttle = (fn, throttleTime) => {
  let timer = false;
  return function (...args) {
    if (timer) {
      return;
    }
    fn.apply(this, args);
    timer = true;
    setTimeout(() => {
      timer = false;
    }, throttleTime);
  };
};

export { throttle };
