// Задача 1
for (let i = 1; i <= 20; i++) {
	if (i % 4 == 0) continue;
	console.log(i);
}

//Задача 2
let a = prompt("Введите число", "5");
let b = 1;
for (let i = 0; i < a; i++) {
	b *= i + 1;
}
alert(`Факториал от ${a} = ${b}`);

//Задача 3
let c = "";
for (let i = 0; i < 8; i++) {
	for (let j = 0; j < 8; j++) {
		if ((i + 1) % 2 == 0)
			if ((j + 1) % 2 == 0) c += "#";
			else c += " ";
		else if ((j + 1) % 2 == 0) c += " ";
		else c += "#";
		if (j + 1 == 8 && i + 1 != 8) c += "\n";
	}
}
console.log(c);
