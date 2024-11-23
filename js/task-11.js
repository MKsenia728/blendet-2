// Напишіть функцію, яка перетворює глибокий масив в одномірний. Не використовувати array.flat()
// Очікується[1, 2, [3, 4, [5, [6, 7, [8]]]], [9,10]] => [1, 2, 3, 4, 5]
let count = 0;

function changeArr(arr) {
  const newArr =[];
  for (const elem of arr) {
    if (Array.isArray(elem)) {
      // for (const itemElem of changeArr(elem)) {
      
        newArr.push(...changeArr(elem));
        // console.log(newArr);
      // }
  
    } else {
      newArr.push(elem);
    }
  }
  return newArr;
}

console.log([1, 2, [3, 4, [5, [6, 7, [8]]]], [9,10]].flat(42));
const arr = [1, 2, [3, 4, [5, [6, 7, [8]]]], [9,10]].flat(42);


console.log(changeArr([1, 2, [3, 4, [5, [6, 7, [8], [9,10]]]]]));