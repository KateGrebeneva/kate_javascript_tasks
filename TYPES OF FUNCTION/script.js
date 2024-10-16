// Задание 223 №1
console.log('Результат задания 223 №1:');
function func() {
	return '!';
}
console.log(func); 

// Задание 224 №1
console.log('Результат задания 224:');
function func224() {
	return 'This page about Princess Merida!';
}
  
// Задание 224 №2
console.log(func224()); 
  
// Задание 224 №3
console.log(func224);
  
// Задание 224 №4
func224 = 123; 
console.log(func224); 

// Задание 225 №1
console.log('Результат задания 225:');
// Задание 1
function func225_1() {
	return 3;
}
  
// Задание 225 №2
 const func225_2 = func225_1;

// Задание 225 №3
console.log(func225_1() + func225_2()); 

// Задание 226 №1
console.log('Результат задания 226:');
let func226_1 = function() {
	return 1;
  };

// Задание 226 №2
let func226_2 = function() {
	return 2;
  };

// Задание 226 №3
alert('Результат задания 226: ' + (func226_1() + func226_2()))
console.log(func226_1() + func226_2())

// Задание 228 №1
// Функция,приведенная ниже, является Function Declaration,так как мы можем вызвать её до фактического определения в коде
// function func() {
// 	console.log('!');
//   }

// Задание 228 №2 
// Функция,приведенная ниже, является Function Expression,так как она присваивается переменной func, и её нельзя поднять,т.е невозможно вызвать до определения
// func(); // Выведет '!'
// function func() {
//   console.log('!') ;
// }

// Задание 229 №1
console.log('Результат задания 229 №1:');
func229_1(); 
function func229_1() {
  console.log('Hey! My name is Catherine');
}

// Задание 229 №2
// func229_2(); // будет ошибка объявления
// let func229_2 = function() {
// 	console.log('Hey! My name is Catherine');
// };

// Задание 230 №1
let func1 = function() {console.log('!')};
let func2 = function() {
	console.log('!')
};
function func3() {
	console.log('!')
}

// Задание 231 №1
// Ниже представленная функция - Function Declaration
// function func() {
// 	console.log('!');
// } 

// Задание 231 №2
// Ниже представленная функция - Function Expression
// let func = function() {
// 	console.log('!');
// }; 

// Задание 231 №3
// Ниже представленная функция - Function Expression
// +function() {
// 	console.log('!');
// } 

// Задание 231 №4
// Ниже представленная функция - Function Expression
// !function func() {
// 	console.log('!');
// } 

// Задание 231 №5
// Ниже представленная функция - Function Expression
// -function func() {
// 	console.log('!');
// } 

// Задание 231 №6
// Ниже представленная функция - Function Expression
// 1 + function func() {
// 	console.log('!');
// } 

// Задание 231 №7
// Ниже представленная функция - Function Expression
// (function func() {
// 	console.log('!');
// }) 

// Задание 231 №8
// Ниже представленная функция - Function Expression
// console.log(
// 	function() {
// 		console.log('!');
// 	}
// ); 

// Задание 234 №1
// Ниже представленная функция - Function Expression
// let test = function func() {
// 	console.log('!');
// } 

// Задание 234 №2
// Ниже представленная функция - Function Expression
// console.log(
// 	function func() {
// 		console.log('!');
// 	}
// ); 

// Задание 234 №3
// Ниже представленная функция - Function Expression
// +function func() {
// 	console.log('!');
// }

// Задание 234 №4
// Ниже представленная функция - Function Declaration
// function func() {
// 	console.log('!');
// } 

// Задание 235 №1
// Ниже представленная функция - Function Expression
// -
// function func() {
// 	console.log('!');
// } 

// Задание 235 №2
// Ниже представленная функция - Function Declaration
// -1;
// function func() {
// 	console.log('!');
// } 

// Задание 235 №3
// Ниже представленная функция - Function Declaration
// -1
// function func() {
// 	console.log('!');
// } 

// Задание 235 №4
// Ниже представленная функция - Function Declaration
// 1
// function func() {
// 	console.log('!');
// } 

// Задание 235 №5
// Ниже представленная функция - Function Expression
// -1-
// function func() {
// 	console.log('!');
// } 

// Задание 236 №1
// Ниже представленная функция - Function Declaration
// function func() {
// 	console.log('!');
// }
// +1; 

// Задание 236 №2
// Ниже представленная функция - Function Declaration
// function func() {
// 	console.log('!');
// } + 1; 

// Задание 236 №3
// Ниже представленная функция - Function Expression
// +function func() {
// 	console.log('!');
// } + 1; 

// Задание 236 №4
// Ниже представленная функция - Function Expression
// +
// function func() {
// 	console.log('!');
// } + 1; 

// Задание 236 №5
// Ниже представленная функция - Function Declaration
// + 1
// function func() {
// 	console.log('!');
// } + 1; 

// Задание 236 №6
// Ниже представленная функция - Function Declaration
// function func() {
// 	console.log('!');
// } + console.log('!'); 

// Задание 237 №1
console.log('Результат задания 237:');
let arr237 = [
	function() { return 1; },
	function() { return 2; },
	function() { return 3; },
  ];

// Задание 237 №2
console.log(arr237[2]()); 

// Задание 237 №4
for (let func237 of arr237) {
	console.log(func237());
  }

// Задание 237 №3
let sum237 = arr237[0]() + arr237[1]() + arr237[2]();
console.log(sum237); 

// Задание 238 №1
console.log('Результат задания 238 №1:');
let obj238 = {
	func238_1: function() {return 1},
	func238_2: function() {return 2},
	func238_3: function() {return 3},
};

for (let key in obj238) {
	console.log(obj238[key]())
}

// Задание 238 №2
console.log('Результат задания 238 №2:');
let res238 = obj238.func238_1() + obj238.func238_2() + obj238.func238_3();
console.log(res238); 

// Задание 239 №1
console.log('Результат задания 239 №1:');
let task239 = {
	sum: function (arr239) {
        let result = 0;
        for (let num of arr239) {
            result += num;
        }
        return result;
    },
    sumSquares: function (arr239) {
        let result = 0;
        for (let num of arr239) {
            result += num ** 2;
        }
        return result;
    },
    sumCubes: function (arr239) {
        let result = 0;
        for (let num of arr239) {
            result += num ** 3;
        }
        return result;
    }
};
  let arr239 = [5, 10, 15, 20];

  console.log('Сумма всех элементов массива = ' + (task239.sum(arr239)));   
  console.log('Сумма всех элементов массива,возведенных в квадрат = ' + (task239.sumSquares(arr239))); 
  console.log('Сумма всех элементов массива,возведенных в куб = ' + (task239.sumCubes(arr239))); 
	