// Напишіть функцію, яка очистить масив від небажаних значень, таких як false, undefined, порожні рядки, нуль, null

// Результат, що очікується[0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

function clean(arr) {
  const newArray = [];

  for (const item of arr) {
    if (!item) {
      newArray.push(item);
    }
  }
  return newArray;
}

console.log(
  clean([0, 1, false, 2, undefined, "", 3, null])
);
