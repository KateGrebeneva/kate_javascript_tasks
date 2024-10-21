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

// Задание 253 №1
console.log('Результат задачи 253 №1:');
function each(arr253_1, callback) {
	let result253_1 = [];
	
	for (let elem253_1 of arr253_1) {
		result253_1.push( callback(elem253_1) ); 
	}
	
	return result253_1;
}

let result253_1 = each([5, 10, 15, 25, 30], function(num253_1) {
	return num253_1 ** 2;
});

console.log(result253_1);

// Задание 253 №2
console.log('Результат задачи 253 №2:');
function each(arr253_2, callback) {
	let result253_2 = [];
	for (let elem253_2 of arr253_2) {
		result253_2.push( callback(elem253_2) ); 
	}
	return result253_2;
}
let result253_2 = each(['kate', 'grebeneva'], function(str253_2) {
	return str253_2.split("").reverse().join("");
});
console.log(result253_2);

// Задание 253 №3
console.log('Результат задачи 253 №3:');
function each(arr253_3, callback) {
	let result253_3= [];
	for (let elem253_3 of arr253_3) {
		result253_3.push( callback(elem253_3) ); 
	}
	return result253_3;
}
let result253_3 = each(['kate', 'grebeneva'], function(str253_3) {
	let splitted = str253_3.split("");
	return splitted[0].toUpperCase()+ str253_3.slice(1);;
});
console.log(result253_3);

// Задание 254 №1
console.log('Результат задачи 254 №1:');
function square(num254) {
	return num254 ** 3;
   }
   function each(arr254, callback) {
	 let result254 = [];
	 for (let i = 0; i < arr254.length; i++) {
	   result254.push(callback(arr254[i]));
	 }
	 return result254;
   }
   
   let result254 = each([2, 5, 10], square);
   console.log(result254);