function getDaysBetweenDates(a, b) {
  if (arguments.length < 2) {
    throw new TypeError("Two arguments are required");
  }
  if (a === null || b === null) {
    return NaN; // Возвращаем NaN, если один из аргументов null
  }

  let dateA = new Date(a);
  let dateB = new Date(b);

  // Проверка на валидность даты
  if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
    return NaN;
  }

  return Math.trunc((dateB - dateA) / 86400000);
}

export { getDaysBetweenDates };
