// todo Напишіть функцію updateObject, яка приймає об'єкт і повертає новий об'єкт без вказаних параметрів
// Результат, що очікується ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}
const updateObject = function (obj, ...arr) {
  //   const newObj = {};
  //   const keys = Object.keys(obj);
  //   for (let key of keys) {
  //     if (!arr.includes(key)) {
  //       newObj[key] = obj[key];
  //     }
  //   }
  const newObject = { ...obj };
  for (const elem of arr) {
    delete newObject[elem];
  }
  return newObject;
};

console.log(updateObject({ a: 1, b: 2, c: 3 }, "b", "a"));
