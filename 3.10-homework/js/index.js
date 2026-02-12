//1 Задача

const firstName = "Ivan";
const lastName = "Ivanov";
const isStudent = true;

//2 Задача
const age = 25;
const currentYear = 2026;
const birthYear = currentYear - age;

//3 Задача
console.log(
	`Меня зовут ${firstName} ${lastName}, мне ${age} лет, я ученик курса: ${Number(isStudent)}`,
);
// либо если имелось ввиду вывести true или false
console.log(
	`Меня зовут ${firstName} ${lastName}, мне ${age} лет, я ученик курса: ${isStudent}`,
);

//4 Задача

let a = "123";
let b = +"456";
let c = Number("789");
let d = Boolean(0);
let e = Boolean(" ");
let result = a + b + c + d + e; //123456789falsetrue
