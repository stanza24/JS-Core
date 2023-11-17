# Partition

Задача реализовать функцию `partition` которая принимает на вход массив и коллбэк функцию, а возвращает массив в котором два массива.

```javascript
partition(array, callback) => [trueArray, falseArray]
```

Во время выполнения функция должна вызвать `callback` для каждого элемента массива `array`.

## Сигнатура функции `callback`

```javascript
callback(element) => boolean
```

- `element` - Элемент массива на котором была вызвана функция `callback`

Если `callback` вернёт `true` то `element` с которым была вызвана функция должен попасть в массив `trueArray`.
Если `callback` вернёт `false` то `element` с которым была вызвана функция должен попасть в массив `falseArray`.

Функция должна правильно отрабатывать если `callback` возвращает приводимые к `true` `false` значения:

- Приводимые к `true` (`truthy`): `{}` => `true`, `1` => `true`, ...
- Приводимые к `false` (`falsey`): `undefined` => `false`, `""` => `false`, `0` => `false`, ...

Если `callback` не передан, то `truthy` значения попадают в `trueArray` а `falsey` значения попадают в `falseArray`.

Функция не должна менять изначальный массив.

## Примеры использования

### Попроще

```javascript
const numbers = [1,2,3,4,5,6];

partition(numbers, (element) => element > 3);
// => [ [4, 5, 6], // trueArray 
//      [1, 2, 3]  // falseArray
// ];
```

```javascript
const numbers = [0, 1, 2, {}, false, "", "0"];

partition(numbers, (element) => element);
// => [ [1, 2, {}, "0"], // trueArray 
//      [0, false, ""]  // falseArray
// ];
```

### Посложнее

```javascript
const users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];
 
partition(users, (element) => element.active );
// => [ [ { 'user': 'fred',    'age': 40, 'active': true } ],
//      [ { 'user': 'barney',  'age': 36, 'active': false },
//        { 'user': 'pebbles', 'age': 1,  'active': false } ] 
// ];
```