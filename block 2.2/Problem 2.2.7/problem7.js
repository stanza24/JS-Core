class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
    return this;
  }

  off(eventName, callback) {
    let lis = this.events[eventName];
    if (!lis) {
      return null;
    }
    for (let i = lis.length - 1; i >= 0; i--) {
      if (lis[i] === callback) {
        lis.splice(i, 1);
        break;
      }
    }
    return null;
  }

  once(eventName, callback) {
    this.events[eventName] = this.events[eventName] || [];
    const onceWrapper = () => {
      callback();
      this.off(eventName, onceWrapper);
    };
    this.events[eventName].push(onceWrapper);
    return this;
  }

  emit(eventName, ...args) {
    let fns = this.events[eventName];
    if (!fns) return false;
    fns.forEach((f) => {
      f(...args);
    });
    return true;
  }
}

class BroadcastEventEmitter extends EventEmitter {
  emit(eventName, ...args) {
    if (eventName === "*") {
      const eventNames = Object.keys(this.events);
      eventNames.forEach((name) => {
        const eventHandlers = this.events[name];
        eventHandlers.forEach((handler) => {
          handler(...args);
        });
      });
      return true;
    }

    return super.emit(eventName, ...args);
  }
}

export { BroadcastEventEmitter, EventEmitter };
