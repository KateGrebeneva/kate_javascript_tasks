// Задание 200 №1
console.log('Результат задания 200 №1:');
function func() {
	console.log('Katushka');
}
func();

// Задание 200 №2
console.log('Результат задания 200 №2:');
function res200_2() {
	let sum200_2 = 0;
	for(let i = 1; i <= 100; i++){		
		sum200_2 += i;
	}
  console.log(sum200_2);
}
res200_2();

// Задание 201 №1
console.log('Результат задания 201 №1:');
function cub(num201_1) {
	console.log(num201_1 ** 3);
}
cub(5);

// Задание 201 №2
console.log('Результат задания 201 №2:');
function positive_or_negative(num201_2) {
	if (num201_2 < 0){
		console.log('---');	
	}
	else {
		console.log ('+++')
	};
}
positive_or_negative(5);
positive_or_negative(-5);

// Задание 202 №1
console.log('Результат задания 202 №1:');
function sum202(num202_1, num202_2, num202_3) {
	console.log(num202_1 + num202_2 + num202_3);
}
sum202(5,10,15);

// Задание 203 №1
console.log('Результат задания 203 №1:');
function sum203(num203_1, num203_2, num203_3) {
	console.log(num203_1 + num203_2 + num203_3);
}
let param203_1 = 1;
let param203_2 = 2;
let param203_3 = 3;
sum203(param203_1, param203_2, param203_3);