"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const listNum = prompt("Введите 3 числа через пробел: ");

searchMax(listNum);

function searchMax(str) {
  const arr = str.split(" ");
  const first = Number.parseInt(arr[0]);
  const second = Number.parseInt(arr[1]);
  const third = Number.parseInt(arr[2]);
  const maxNumber = Math.max(first, second, third);
  alert(
    `Максимальное значение среди чисел ${first}, ${second}, ${third} равно ${maxNumber}.`
  );
}
