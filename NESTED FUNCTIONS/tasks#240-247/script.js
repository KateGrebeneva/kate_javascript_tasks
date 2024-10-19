// Задание 240 №1
console.log('Результат задания 240 №1:');
test(
	function() {return 1;},
	function() {return 2;},
	function() {return 3;}
);

function test(func240_1, func240_2, func240_3) {
	console.log(func240_1() + func240_2() + func240_3());
}

// Задание 241 №1
function test241(func1, func2, func3) {
    return func1() + func2() + func3();
}

// Задание 241 №2
console.log('Результат задания 241 №2:');
function func1() {
    return 1;
}
function func2() {
    return 2;
}
function func3() {
    return 3;
}
const result241_2 = test241(func1, func2, func3);
console.log(result241_2); 

// Задание 241 №3
console.log('Результат задания 241 №3:');
let func241_1 = function() {
    return 1;
};
let func241_2 = function() {
    return 2;
};
let func241_3 = function() {
    return 3;
};
const result241_3 = test241(func241_1, func241_2, func241_3);
console.log(result241_3); 

// Задание 242 №1
console.log('Результат задания 242 №1:');
function test242_1(func242_1) {
    console.log(func242_1(3));
}
test242_1(function(num) {
    return num * num * num; 
});

// Задание 242 №2
console.log('Результат задания 242 №2:');
function func242_2(num) {
    return num * num * num; 
}
function test242_2(func242_2) {
    console.log(func242_2(3));
}
test242_2(func242_2);

// Задание 242 №3
console.log('Результат задания 242 №3:');
let func242_3 = function(num) {
    return num * num * num; // Возвращаем куб числа
};
function test242_3(func242_3) {
    console.log(func242_3(3));
}
test242_3(func242_3);

// Задание 242 №4
function func242_4(a, b) {
    return a + b; 
}
function test242_4(func242_4) {
    alert('Результат задания 242 №4: ' + func242_4(2, 3)); 
}
test242_4(func242_4);

// Задание 243 №1
console.log('Результат задания 243 №1:');
function test243(num, func243_1, func243_2) {
    return func243_1(num) + func243_2(num);
}
function square(num) {
    return num * num;
}
function cube(num) {
    return num * num * num;
}
const result243 = test243(3, square, cube);
console.log(result243); 

// Задание 244
console.log('Результат задания 244:');
function test244(arr244, func244) {
    for (let i = 0; i < arr244.length; i++) {
        arr244[i] = func244(arr244[i]); 
    }
    
    return arr244; 
}
let result244 = test244([1, 2, 3], function(num) {
    return num * num * num; 
});
console.log(result244); 

// Задание 245 №1
console.log('Результат задания 245 №1:');
function func245(num1, num2) {
	function square245(num) {
	  return num * num;
	}
	function cube245(num) {
	  return num * num * num;
	}
	return square245(num1) + cube245(num2);
  }
  console.log(func245(2, 3)); 

// Задание 246 №1
//   function test() {
// 	let num = 1;
// 	function func() {
// 	  console.log(num);
// 	}
// 	func();
//   }
//   test();
// Результатом выведения в консоль будет: 1

// Задание 246 №2
// function test() {
// 	let num = 1;
// 	function func() {
// 	  console.log(num);
// 	}
//   }
//   test();
// Результатом выведения в консоль будет: ничего, ибо функция никогда не вызывается. 

// Задание 246 №3
// function test() {
// 	let num = 1;	
// 	function func() {
// 	  console.log(num);
// 	}	
// 	func();
//   }
// Результатом выведения в консоль будет: 1 

// Задание 246 №4
// function test() {
// 	let num;
// 	function func() {
// 	  console.log(num);
// 	}
// 	num = 1;
// 	func(); // Первый вызов
// 	num = 2;
// 	func(); // Второй вызов
//   }
//   test();
// Результатом выведения в консоль будет: 1 2