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
console.log('Результат задачи 250 №1:');
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

// Задание 251 №1
console.log('Результат задачи 251 №1:');
function func251() {
	return function() {
		return function() {
			return function() {
				return '!';
			};
		};
	};
}

console.log(func251()()()()); 

// Задание 252 №1
console.log('Результат задачи 252 №1:');
function func252_1(num252_1) {
	return function(num252_2) {
		return function(num252_3) {
			return num252_1 + num252_2 + num252_3;
		};
	};
}
console.log(func252_1(2)(3)(4)); 

// Задание 252 №2
console.log('Результат задачи 252 №2:');
function func252_2(num1) {
    return function(num2) {
        return function(num3) {
            return function(num4) {
                return function(num5) {
                    return [num1, num2, num3, num4, num5];
                };
            };
        };
    };
}
let result = func252_2(2)(3)(4)(5)(); 
console.log(result); 
