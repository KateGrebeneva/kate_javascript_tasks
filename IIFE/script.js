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

// Задание 268 №1
// (function(num1, num2) {
// 	console.log(num1 + num2);
// })(1, 2);
// Результатом выведения в консоль будет: 3

// Задание 269 №1
(function() {
  return function() {
    alert('Результат задачи 269 №1: ' + '!');
  };
})()(); 

// Задание 269 №2
console.log('Результат задачи 269 №2:');
(function(task269_2a) {
  return function(task269_2b) {
    console.log(task269_2a + task269_2b); 
  };
})(1)(2); 


// Задание 269 №3
console.log('Результат задачи 269 №3:');
(function(task269_3a) {
	return function(task269_3b) {	
		return function(task269_3c) {	
			console.log(task269_3a + task269_3b + task269_3c);
	};
	};
})(1)(2)(3);

// Задание 271 №1
// let str = 'str';
// (function() {
// 	console.log(1);
// })();
// Результатом выведения в консоль будет: 1

// Задание 271 №2
// let str = 'str'
// (function() {
// 	console.log(1);
// })();
// Результатом выведения в консоль будет: ошибка, так как JavaScript воспринимает нашу функцию как продолжение команды первой строки.

// Задание 272 №1 и №2
console.log('Результат задач 272 №1 и №2:');
let func = (function() {
  let num = 1;
  return function() {
    console.log(num);
    num++;
    if (num > 5) {
      num = 1; // Сбрасываем счетчик, если он больше 5
    }
  }
})();

func(); 
func(); 
func(); 
func(); 
func();
func(); 
func(); 
func(); 
func(); 
func(); 

