// Задание 144 №1
let arr144 = ['a', 'b', 'c', 'd', 'e'];
for (let elem144 of arr144) {
	console.log(elem144);
}

// Задание 145 №1
let obj145_1 = {x: 1, y: 2, z: 3};
console.log('Ключи объекта:'); 
for (let key145_1 in obj145_1) {
	console.log(key145_1); 
}

// Задание 145 №2
let obj145_2 = {x: 1, y: 2, z: 3};
console.log('Элементы объекта:'); 
for (let key145_2 in obj145_2) {
	console.log(obj145_2[key145_2]); 
}

// Задание 146 №1
let task146_1 = 1;
while (task146_1 <= 100) {
	console.log(task146_1);
	task146_1++;
}

// Задание 146 №2
let task146_2 = 11;
while (task146_2 <= 33) {
	console.log(task146_2);
	task146_2++;
}

// Задание 146 №3
let num146_3 = 250;
let task146_3 = 0;
while (num146_3 <= 1000) {
	num146_3 = num146_3 * 3;
	task146_3 = task146_3+1;
}
console.log('Число, полученное в результате умножение: ' + num146_3);
console.log('Количество итераций,затраченных для этого: ' + task146_3);

// Задание 147 №1
console.log('Результат задания 147 №1');
for (let i = 1; i <= 100; i++) {
	console.log(i); 
}

// Задание 147 №2
console.log('Результат задания 147 №2');
for (let i = 11; i <= 33; i++) {
	console.log(i); 
}

// Задание 147 №3
console.log('Результат задания 147 №3');
for (let i = 0; i <= 100; i= i+2) {
	console.log(i); 
}

// Задание 147 №4
console.log('Результат задания 147 №4');
for (let i = 1; i <= 100; i= i+2) {
	console.log(i); 
}

// Задание 147 №5
console.log('Результат задания 147 №5');
for (let i = 100; i >= 0; i--) {
	console.log(i); 
}