"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Math.floor(Math.random() * 10));
}
console.log(arr);
console.log(
  `Сумма элементов массива с помощью reduce: ${arr.reduce((a, b) => a + b)}`
);

sum(arr);
searchMin(arr);
showIndex(arr);

// 1. Сумму элементов массива
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(`Сумма элементов массива равна: ${sum}`);
}

// 2. Минимальное значение в массиве
function searchMin(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  console.log(`Минимальное значение в массиве: ${min}`);
}

// 3. Новый массив, содержащий индексы сгенерированного выше массива, в которых значение равно 3.
function showIndex(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) {
      newArray.push(i);
    }
  }
  console.log(newArray);
}
