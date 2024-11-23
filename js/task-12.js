// Напишіть функцію, що прибирає значення, які повторюються
// Очікується["a",1, 2, "b",3, 1, 2,"a"] => ["a", 1, 2 ,"b" , 3]
function removeDuplicate(arr) {
  const newArr = [];
  for (const elem of arr) {
    if (!newArr.includes(elem)) {
      newArr.push(elem);
    }
  }
  return newArr;
}

console.log(removeDuplicate(["a", 1, 2, "b", 3, 1, 2, "a"]));
