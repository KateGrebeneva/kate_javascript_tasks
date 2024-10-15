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