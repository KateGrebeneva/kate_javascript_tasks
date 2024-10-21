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

