"use strict";

function checkAge(age, callback) {
	if (age >= 18) callback("Доступ разрешен");
	else callback("Доступ запрещен");
}

function showMessage(message) {
	console.log(message);
}

function showError() {
	console.error("ERROR");
}

checkAge(15, showMessage);
checkAge(29, showMessage);
checkAge(15, showError);
