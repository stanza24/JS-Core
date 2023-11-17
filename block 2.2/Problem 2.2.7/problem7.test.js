import { BroadcastEventEmitter, EventEmitter } from "./problem7";

describe("тестирование класса EventEmitter", () => {
  let emitter;

  beforeEach(() => {
    emitter = new EventEmitter();
  });

  test("добавление слушателя события", () => {
    const mockCallback = jest.fn();
    emitter.on("test-event", mockCallback);
    emitter.emit("test-event");
    expect(mockCallback).toHaveBeenCalled();
  });

  test("удаление слушателя события", () => {
    const mockCallback = jest.fn();
    emitter.on("test-event", mockCallback);
    emitter.off("test-event", mockCallback);
    emitter.emit("test-event");
    expect(mockCallback).not.toHaveBeenCalled();
  });

  test("добавление `единоразового` слушателя", () => {
    const mockCallback = jest.fn();
    emitter.once("test-event", mockCallback);
    emitter.emit("test-event");
    emitter.emit("test-event");
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  test("передача аргументов", () => {
    const mockCallback = jest.fn();
    emitter.on("test-event", mockCallback);
    emitter.emit("test-event", "arg1", "arg2");
    expect(mockCallback).toHaveBeenCalledWith("arg1", "arg2");
  });
});

describe("тестирование класса BroadcastEventEmitter", () => {
  let broadcastEmitter;

  beforeEach(() => {
    broadcastEmitter = new BroadcastEventEmitter();
  });

  test("проверка наследования от EventEmitter", () => {
    expect(broadcastEmitter).toBeInstanceOf(EventEmitter);
  });

  test("вызов всех событий", () => {
    const mockCallback1 = jest.fn();
    const mockCallback2 = jest.fn();

    broadcastEmitter.on("test-event-1", mockCallback1);
    broadcastEmitter.on("test-event-2", mockCallback2);
    broadcastEmitter.emit("*");

    expect(mockCallback1).toHaveBeenCalled();
    expect(mockCallback2).toHaveBeenCalled();
  });

  test("передача аргументов", () => {
    const mockCallback = jest.fn();

    broadcastEmitter.on("test-event", mockCallback);
    broadcastEmitter.emit("*", "arg1", "arg2");

    expect(mockCallback).toHaveBeenCalledWith("arg1", "arg2");
  });
});
