"use strict";

let user = {
	name: "John",
	age: 30,
	skils: {
		js: 100,
		html: 50,
		css: 60,
	},
};

const jsonUser = JSON.stringify(user);

localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme");

localStorage.setItem("user", jsonUser);
user = JSON.parse(localStorage.getItem("user"));
