//Задание 1
const person = {
	name: "Ivan",
	age: 24,
	hobby: "cycling",
};
console.log(person);

//Задание 2
const isEmpty = (object) => {
	for (let key in object) {
		return true;
	}

	return false;
};
let user = {};
if (isEmpty(user)) console.log("Объект не пуст");
else console.log("Объект пуст");
if (isEmpty(person)) console.log("Объект не пуст");
else console.log("Объект пуст");

//Задание 3
const task = {
	title: "Привет",
	description: "Зебра полосатая",
	isCompleted: false,
};
const cloneAndModify = (object, modifications) => {
	const newObject = { ...object, ...modifications };
	for (let key in newObject) {
		console.log(`${key}: ${newObject[key]}`);
	}
	return newObject;
};
const updatedTask = cloneAndModify(task, {
	isCompleted: true,
	description: "Кот длинношёрстый",
});

//Задание 4
const callAllMethods = (object) => {
	for (let key in object) {
		if (typeof object[key] === "function") {
			object[key]();
		}
	}
};
const myObject = {
	metod1() {
		console.log("Метод1");
	},
	metod2() {
		console.log("Метод2");
	},
	property: "Это не метод",
};
callAllMethods(myObject);
