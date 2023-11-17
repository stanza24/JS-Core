# Arithmetic

Реализуйте функцию, которая принимает на вход два числа и арифметический оператор (имя которого в виде строки) и возвращает результат соответствующей операции.
- Первые 2 аргумента это положительные целые числа
- Третий аргумент может быть одним из "add", "subtract", "divide", "multiply".

## Примеры использования:

```javascript
arithmetic(5, 2, "add")      // returns 7
arithmetic(5, 2, "subtract") // returns 3
arithmetic(5, 2, "multiply") // returns 10
arithmetic(5, 2, "divide")   // returns 2.5
```
## В случает если оператор некорректен, функция должна возвращать NaN

```javascript
arithmetic(5, 2, "aaa")      // returns NaN
