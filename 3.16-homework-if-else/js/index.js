//1 Задача
const A = 51;
if (A % 2 > 0) {
	console.log("Не чётное");
} else console.log("Чётное");

//2 задача
let age = 44;
let discount = age < 18 ? 10 : age > 65 ? 30 : 20;
console.log(`Скидка ${discount}%`);

switch (true) {
	case age < 18:
		discount = 10;
		break;
	case age > 65:
		discount = 30;
		break;
	default:
		discount = 20;
}
console.log(`Скидка ${discount}%`);

//3 задача
let username = prompt("Введите ваше имя", "user123");
let password = prompt("Введите пароль", "");
if (username == "admin" || (username == "user" && password == "123456"))
	alert("Доступ разрешен");
else alert("Доступ запрещен");

//4 задача
let deliveryWeight = prompt("Введите вес посылки (в кг)");
if (deliveryWeight <= 0) alert("Некорректный вес посылки");
else {
	let packageType = prompt(
		"Введите тип доставки (Стандарт, Экспресс, Премиум)",
	);
	if (
		packageType === "Стандарт" ||
		packageType === "Экспресс" ||
		packageType === "Премиум"
	) {
		let baseCost = deliveryWeight < 1 ? 5 : deliveryWeight > 5 ? 15 : 10;
		let coefficient;
		switch (packageType) {
			case "Стандарт":
				coefficient = 1;
				break;
			case "Экспресс":
				coefficient = 1.5;
				break;
			case "Премиум":
				coefficient = 2;
				break;
		}
		let totalCost = baseCost * coefficient;
		alert(`Итоговая стоимость доставки ${totalCost}$`);
	} else alert("Некорректный тип доставки");
}
