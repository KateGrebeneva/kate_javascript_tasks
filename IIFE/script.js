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
// let result2 = function() {
// 	return '!';
// };
// console.log(result2) 
// Результатом выведения в консоль будет:
// ƒ () {
// 	return '!';
// }

// Задание 265 №3
// let result3 = function() {
// 	return '!';
// };
// console.log(result3()); 
// Результатом выведения в консоль будет: !

// Задание 266 №1
// let result = function() {return 1;}() + function() {return 2;}();
// console.log(result);
// Результатом выведения в консоль будет: 3