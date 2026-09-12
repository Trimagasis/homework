"use strict";

const user = {
	name: "John",
	age: 30,
};

const jsonUser = JSON.stringify(user);
const parsedUser = JSON.parse(jsonUser);
console.log(jsonUser);
console.log(parsedUser);
