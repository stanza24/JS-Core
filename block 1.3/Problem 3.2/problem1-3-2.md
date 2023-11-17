# getStringCount

Реализуйте (с использованием рекурсии) функцию `getStringCount`, которая должна принимать массив или объект и считать количество строк в массиве / значениях объекта с учетом вложенности.

## Примеры использования:

```javascript
getStringCount({
  first: '1',
  second: '2',
  third: false,
  fourth: ['anytime', 2, 3, 4],
  fifth: null,
}); // 3

getStringCount(['1', '2', ['3']]); // 3