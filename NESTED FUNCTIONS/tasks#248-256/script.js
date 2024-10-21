// Задание 248 №1
// function test(num) {
// 	function func(localNum) {
// 		console.log(localNum);
// 	}
// 	func(num);
// }
// test(1); 
// Результатом выведения в консоль будет: 1

// Задание 248 №2
// function test(num) {
// 	function func(localNum) {
// 		console.log(localNum);
// 	}
// 	func(num + 1);
// }
// test(1); 
// Результатом выведения в консоль будет: 2

// Задание 248 №3
// function test(num) {
// 	function func(localNum) {
// 		console.log(num);
// 	}
	
// 	func(num + 1);
// }
// test(1); 
// Результатом выведения в консоль будет: 1

// Задание 248 №4
// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
// 	}
	
// 	func(num);
// 	console.log(num);
// }

// test(1); 
// Результатом выведения в консоль будет: 1

// Задание 248 №5
// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
// 	}
// 	func(num);
// 	console.log(localNum); 
// }
// test(1); 
// Результатом выведения в консоль будет: ошибка, т.к. функция не объявлена

// Задание 248 №6
// function test(num) {
// 	function func(localNum) {
// 		num = 2;
// 	}
// 	func(num);
// 	console.log(num);
// }
// test(1); 
// Результатом выведения в консоль будет: 2

// Задание 249 №1
// function test(num) {
// 	function func(num) {
// 		console.log(num);
// 	}
// 	func(num);
// }
// test(1); 
// Результатом выведения в консоль будет: 1

// Задание 249 №2
// function test(num) {
// 	function func(num) {
// 		num = 2;
// 	}
// 	func(num);
// 	console.log(num);
// }
// test(1); 
// Результатом выведения в консоль будет: 1

// // Задание 249 №3
// function test(num) {
// 	function func(num) {
// 		console.log(num);
// 	}
// 	num = 2;
// 	func(num);
// }
// test(1); 
// Результатом выведения в консоль будет: 2

// Задание 249 №4
// function test(num) {
// 	function func(num) {
// 		console.log(num);
// 	}
// 	func(num);
// 	num = 2;
// }
// test(1); 
// Результатом выведения в консоль будет: 1

// Задание 250 №1
console.log('Результат задания 250 №1:');
function func250_1() {
	return function() {
		return 1;
	};
}
function func250_2() {
	return function() {
		return 2;
	};
}
console.log(func250_1()() + func250_2()());