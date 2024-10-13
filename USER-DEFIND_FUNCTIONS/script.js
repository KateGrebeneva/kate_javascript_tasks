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

// Задание 204 №1
// console.log('Результат задания 204 №1:');
// function func(num = 5) {
// 	console.log(num * num);
// }
// func(2); // Результатом вывода будет : 4
// func(3); // Результатом вывода будет : 9
// func();  // Результатом вывода будет : 25

// Задание 204 №2
// console.log('Результат задания 204 №2:');
// function func(num1 = 0, num2 = 0) {
// 	console.log(num1 + num2);
// }
// func(2, 3); // Результатом вывода будет : 5
// func(3); // Результатом вывода будет : 3
// func();  // Результатом вывода будет : 0

// Задание 205 №1
console.log('Результат задания 205 №1:');
function func205_1(num205_1) {
	return num205_1 ** 3;
}
let res205_1 = func205_1(3);
console.log(res205_1);

// Задание 205 №2
console.log('Результат задания 205 №2:');
function func205_2(num205_2) {
	return Math.sqrt(num205_2);
}
let res205_2 = func205_2(3) + func205_2(4);
console.log(res205_2);

// Задание 206 №1
console.log('Результат задания 206 №1:');
function sqrt206_1(num) {
	return Math.sqrt(num);
  }
  function round206_1(num) {
	return num.toFixed(3);
  }
  const res206_1 = round206_1(sqrt206_1(2));
  console.log(res206_1); 
  
// Задание 206 №2
console.log('Результат задания 206 №2:');
  function sqrt206_2(num) {
	return Math.sqrt(num);
  }
  function sum206_2(num206_1, num206_2, num206_3) {
	return num206_1 + num206_2 + num206_3;
  }
  const res206_2 = sum206_2(sqrt206_2(2), sqrt206_2(3), sqrt206_2(4));
  console.log(res206_2); 
  
// Задание 206 №3
console.log('Результат задания 206 №3:');
  function sqrt206_3(num) {
	return Math.sqrt(num);
  }
  function sum206_3(num206_1, num206_2, num206_3) {
	return num206_1 + num206_2 + num206_3;
  }
  function round(num) {
	return num.toFixed(3);
  }
  const res206_3 = round(sum206_3(sqrt206_3(2), sqrt206_3(3), sqrt206_3(4)));
  console.log(res206_3); 
  
// Задание 207 №1
// function func(num) {
// return num; // Функция возвращает num, выполнение функции завершается здесь.
// let res = num ** 2; // Эта строка недостижима, так как функция уже вернула значение.
// return res; // Этот return также недостижим.
// }
// console.log(func(3)); // Вывод: 3
  
// Задание 207 №2
// function func(num) {
// 	if (num <= 0) {
// 	  return Math.abs(num); // Если num меньше или равно 0, возвращаем его абсолютное значение.
// 	} else {
// 	  return num ** 2; // Если num положительное, возвращаем его квадрат.
// 	}
//   }
//   console.log(func(10)); // Вывод: 100, при вызове func(10) условие num <= 0 не выполняется, поэтому выполняется ветка else, и функция возвращает 10 ** 2
//   console.log(func(-5)); // Вывод: 5, при вызове func(-5) условие num <= 0 выполняется, и функция возвращает Math.abs(-5), что равно 5.

// Задание 207 №3
// function func(num) {
// 	if (num <= 0) {
// 	  return Math.abs(num); // Если num меньше или равно 0, возвращаем его абсолютное значение.
// 	}	
// 	return num ** 2; // Если num положительное, возвращаем его квадрат.
//   }  
//   console.log(func(10)); // Вывод: 100, при вызове func(10) условие num <= 0 не выполняется, и функция переходит к следующему return, где возвращается 10 ** 2
//   console.log(func(-5)); // Вывод: 5, при вызове func(-5) условие num <= 0 выполняется, и функция возвращает Math.abs(-5)
  
   