// Напишіть функцію, яка розверає масив у зворотньому напрямку.Метод reverse() не використовувати
const arrNumber = [11, 9, 2, 1];

function reverse(arr) {
  let reverArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverArr.push(arr[i]);
  }
  return reverArr;
}
console.log(reverse(arrNumber));
