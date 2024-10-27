// Задание 264 №1
// !function() {
// 	console.log('!');
// }();
// Результатом выведения в консоль будет: !

// Задание 264 №2
// function() {
// 	console.log('!');
// }(); 
// Результатом выведения в консоль будет: ошибка, так как это Function Declaration, а её на месте вызывать нельзя

// Задание 265 №1
// let result = function() {
// 	return '!';
// }();
// console.log(result); 
// Результатом выведения в консоль будет: !

// Задание 265 №2
// let result = function() {
// 	return '!';
// };
// console.log(result) 
// Результатом выведения в консоль будет:
// ƒ () {
// 	return '!';
// }

// Задание 265 №3
// let result = function() {
// 	return '!';
// };
// console.log(result()); 
// Результатом выведения в консоль будет: !

// Задание 266 №1
// let result = function() {return 1;}() + function() {return 2;}();
// console.log(result);
// Результатом выведения в консоль будет: 3

// Задание 267 №1
// let result = (function() {
// 	return '!';
// }());
// console.log(result); 
// Результатом выведения в консоль будет: !

// Задание 267 №2
// let result = (function() {
// 	return '!';
// })();
// console.log(result); 
// Результатом выведения в консоль будет: !

// Задание 267 №3
// let result = (function() {
// 	return '!';
// });
// console.log(result);
// Результатом выведения в консоль будет: 
// ƒ () {
// 	return '!';
// }

// Задание 267 №4
// let result = (function() {
// 	return '!';
// });
// console.log(result()); 
// Результатом выведения в консоль будет: !