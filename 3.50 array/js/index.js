"use strict";
const number = [1, 2, 3, 4, 5];
// const number1 = new Array[5]();

// push() — добавляет один или более элементов в конец массива.
// pop() — удаляет последний элемент из конца массива.
// unshift() — добавляет элементы в начало массива.
// shift() — удаляет первый элемент из начала массива.

number.push(19);
number.pop(5);
number.shift(5);
number.unshift(15);
number.at(-1);

number.reverse();
number.toReversed();

number.forEach(function (number, index, array) {
	console.log(number, index, array);
});
