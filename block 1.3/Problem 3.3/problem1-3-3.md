# OptionalChaining

Напишите функцию, которая принимает первым параметром объект, вторым - массив из цепочки свойств, по которому нужно пройти, чтобы получить значение.

Если какое-то из свойств не найдено - функция возвращает `undefined`.

## Примеры использования:

```javascript
const obj = {
  a: {
    b: {
      c: {
        d: 'Привет!'
      }
    }
  }
}

optionalChaining(obj, ["a", "b", "c", "d"]); // 'Привет!'
optionalChaining(obj, ["a", "b", "c", "d", "e"]); // undefined

optionalChaining(obj, ["a", "c", "d"]); // undefined
optionalChaining(obj, ["b", "d", "a"]); // undefined
```