//Задача 1
function calculeteFinalPrice(price, discount, nalog) {
	return price - (price * discount) / 100 + (price * nalog) / 100;
}
console.log(calculeteFinalPrice(100, 10, 22));

//Задача 2
function checkAccess(name, password) {
	if (name === "admin" && password === "123456") return "Доступ разрешен";
	else return "Доступ запрещен";
}
console.log(checkAccess("admin", "123456"));
console.log(checkAccess("admin", "1234546"));

//Задача 3
let gettimeOfDay = (hour) => {
	switch (true) {
		case hour >= 0 && hour <= 5:
			return "Ночь";
		case hour >= 6 && hour <= 11:
			return "Утро";
		case hour >= 12 && hour <= 17:
			return "День";
		case hour >= 18 && hour <= 23:
			return "Вечер";
		default:
			return "Некорректное время";
	}
};

console.log(gettimeOfDay(2));
console.log(gettimeOfDay(8));
console.log(gettimeOfDay(14));
console.log(gettimeOfDay(20));

//Задача 4
let findFirstEven = (start, end) => {
	for (let i = start; i <= end; i++) {
		if (i % 2 === 0) return i;
	}
	return "Четных чисел нет";
};

console.log(findFirstEven(1, 10));
console.log(findFirstEven(3, 7));
console.log(findFirstEven(5, 5));
console.log(findFirstEven(1, 3));
