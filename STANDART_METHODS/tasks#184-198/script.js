// Задание 184 №1
console.log('Результат задания 184 №1:');
console.log (Math.pow(2,10));

// Задание 184 №2
console.log('Результат задания 184 №2:');
console.log (Math.sqrt(245));

// Задание 184 №3
console.log('Результат задания 184 №3:');
let arr184_3 = [4, 2, 5, 19, 13, 0, 10];
let sum184_3 = 0;
for(let elem184_3 of arr184_3){
	sum184_3 = sum184_3 + Math.pow(elem184_3,3);
}
console.log(Math.sqrt(sum184_3));
