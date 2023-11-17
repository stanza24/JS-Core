# createObjectCalculator

Реализуйте функцию `createObjectCalculator`, которая принимает в качестве аргументов два числа, а возвращает следующий объект:

Объект `calculator` (калькулятор) с тремя методами:
- `read(a, b)` (читать) принимает два значения и сохраняет их как свойства объекта.
- `sum()` (суммировать) возвращает сумму сохранённых значений.
- `mul()` (умножить) перемножает сохранённые значения и возвращает результат.

Гарантируется, что оба числа, передаваемых в `read` всегда будут числами.

## Примеры использования:

```javascript
const calculator = createObjectCalculator(2, 3);
console.log(calculator.sum()); // 5
console.log(calculator.mul()); // 6
calculator.read(12, 34);
console.log(calculator.sum()); // 46
console.log(calculator.mul()); // 408