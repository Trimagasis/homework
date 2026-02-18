"use strict";
// Задание 1.
const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];
users.push(
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
);
console.log(users);

// Задание 2.
function getUserAverageAge(users) {
	let sum = 0;
	for (let i = 0; i < users.length; i++) {
		sum += users[i].age;
	}
	return sum / users.length;
}
console.log(getUserAverageAge(users));

// Задание 3.
function getAllAdmins(users) {
	const admins = [];
	users.forEach((user) => {
		if (user.isAdmin) {
			admins.push(user);
		}
	});
	return admins;
}
console.log(getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

function first(arr, n) {
	const first = [];
	if (n != 0) {
		if (n != undefined) {
			if (n <= arr.length) {
				for (let i = 0; i < n; i++) {
					first[i] = arr[i];
				}
				return first;
			} else return console.error(`${n} > длины массива ${arr.length}`);
		} else return (first[0] = arr[0]);
	} else return first;
}
console.log(first(users, 3));
