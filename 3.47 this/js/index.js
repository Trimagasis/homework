"use strict";

// const x = 5;

// function func1() {
// 	console.log(x);
// }

// function func2(funArg) {
// 	const x = 20;
// 	funArg();
// }

// func1();
// func2(func1);
////////////////////////////////////////////
// function func1() {
// 	const x = 10;
// 	return function () {
// 		return x * 2;
// 	};
// }

// const func2 = func1();
/////////////////////////////////////////////////////
const useCounter = () => {
	let count = 0;

	const increment = () => {
		return ++count;
	};

	const decrement = () => {
		return --count;
	};

	return {
		increment,
		decrement,
	};
};

const counter = useCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.increment());
console.log(counter.decrement());
