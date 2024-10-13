// Задание 200 №1
console.log('Результат задания 200 №1:');
function func() {
	console.log('Katushka');
}
func();

// Задание 200 №2
console.log('Результат задания 200 №2:');
function res200_2() {
	let sum200_2 = 0;
	for(let i = 1; i <= 100; i++){		
		sum200_2 += i;
	}
  console.log(sum200_2);
}
res200_2();

// Задание 201 №1
console.log('Результат задания 201 №1:');
function cub(num201_1) {
	console.log(num201_1 ** 3);
}
cub(5);

// Задание 201 №2
console.log('Результат задания 201 №2:');
function positive_or_negative(num201_2) {
	if (num201_2 < 0){
		console.log('---');	
	}
	else {
		console.log ('+++')
	};
}
positive_or_negative(5);
positive_or_negative(-5);

// Задание 202 №1
console.log('Результат задания 202 №1:');
function sum202(num202_1, num202_2, num202_3) {
	console.log(num202_1 + num202_2 + num202_3);
}
sum202(5,10,15);

// Задание 203 №1
console.log('Результат задания 203 №1:');
function sum203(num203_1, num203_2, num203_3) {
	console.log(num203_1 + num203_2 + num203_3);
}
let param203_1 = 1;
let param203_2 = 2;
let param203_3 = 3;
sum203(param203_1, param203_2, param203_3);

// Задание 204 №1
// console.log('Результат задания 204 №1:');
// function func(num = 5) {
// 	console.log(num * num);
// }
// func(2); // Результатом вывода будет : 4
// func(3); // Результатом вывода будет : 9
// func();  // Результатом вывода будет : 25

// Задание 204 №2
// console.log('Результат задания 204 №2:');
// function func(num1 = 0, num2 = 0) {
// 	console.log(num1 + num2);
// }
// func(2, 3); // Результатом вывода будет : 5
// func(3); // Результатом вывода будет : 3
// func();  // Результатом вывода будет : 0

// Задание 205 №1
console.log('Результат задания 205 №1:');
function func205_1(num205_1) {
	return num205_1 ** 3;
}
let res205_1 = func205_1(3);
console.log(res205_1);

// Задание 205 №2
console.log('Результат задания 205 №2:');
function func205_2(num205_2) {
	return Math.sqrt(num205_2);
}
let res205_2 = func205_2(3) + func205_2(4);
console.log(res205_2);

// Задание 206 №1
console.log('Результат задания 206 №1:');
function sqrt206_1(num) {
	return Math.sqrt(num);
  }
  function round206_1(num) {
	return num.toFixed(3);
  }
  const res206_1 = round206_1(sqrt206_1(2));
  console.log(res206_1); 
  
// Задание 206 №2
console.log('Результат задания 206 №2:');
  function sqrt206_2(num) {
	return Math.sqrt(num);
  }
  function sum206_2(num206_1, num206_2, num206_3) {
	return num206_1 + num206_2 + num206_3;
  }
  const res206_2 = sum206_2(sqrt206_2(2), sqrt206_2(3), sqrt206_2(4));
  console.log(res206_2); 
  
// Задание 206 №3
console.log('Результат задания 206 №3:');
  function sqrt206_3(num) {
	return Math.sqrt(num);
  }
  function sum206_3(num206_1, num206_2, num206_3) {
	return num206_1 + num206_2 + num206_3;
  }
  function round(num) {
	return num.toFixed(3);
  }
  const res206_3 = round(sum206_3(sqrt206_3(2), sqrt206_3(3), sqrt206_3(4)));
  console.log(res206_3); 
  
// Задание 207 №1
// function func(num) {
// return num; // Функция возвращает num, выполнение функции завершается здесь.
// let res = num ** 2; // Эта строка недостижима, так как функция уже вернула значение.
// return res; // Этот return также недостижим.
// }
// console.log(func(3)); // Вывод: 3
  
// Задание 207 №2
// function func(num) {
// 	if (num <= 0) {
// 	  return Math.abs(num); // Если num меньше или равно 0, возвращаем его абсолютное значение.
// 	} else {
// 	  return num ** 2; // Если num положительное, возвращаем его квадрат.
// 	}
//   }
//   console.log(func(10)); // Вывод: 100, при вызове func(10) условие num <= 0 не выполняется, поэтому выполняется ветка else, и функция возвращает 10 ** 2
//   console.log(func(-5)); // Вывод: 5, при вызове func(-5) условие num <= 0 выполняется, и функция возвращает Math.abs(-5), что равно 5.

// Задание 207 №3
// function func(num) {
// 	if (num <= 0) {
// 	  return Math.abs(num); // Если num меньше или равно 0, возвращаем его абсолютное значение.
// 	}	
// 	return num ** 2; // Если num положительное, возвращаем его квадрат.
//   }  
//   console.log(func(10)); // Вывод: 100, при вызове func(10) условие num <= 0 не выполняется, и функция переходит к следующему return, где возвращается 10 ** 2
//   console.log(func(-5)); // Вывод: 5, при вызове func(-5) условие num <= 0 выполняется, и функция возвращает Math.abs(-5)
  
// Задание 208 №1
console.log('Результат задания 208 №1:');
// Чтобы функция работала правильно и возвращала сумму всех чисел от 1 до num, необходимо переместить оператор return за пределы цикла for. 
function func208(num) {
	let sum208 = 0;
	for (let i = 1; i <= num; i++) {
	  sum208 += i; 
	}
	return sum208; 
  }
  console.log(func208(5)); 
  
// Задание 209 №1
console.log('Результат задания 209 №1:');
function func209(num) {
	let res209 = 0;
	while (num >= 10) {
	  num /= 2;
	  res209++; 
	}
	return res209; 
}
console.log(func209(160)); 
 
// Задание 210 №1
console.log('Результат задания 210 №1:');
function func210(num210_1, num210_2) { 
	if (num210_1 > 0 && num210_2 > 0) {
		return num210_1 * num210_2;
	} else {
		return num210_1 - num210_2;
	}
}
console.log(func210(3, 4));  
  
// Задание 211 №1
console.log('Результат задания 211 №1:');
let arr211_1 = [12,42,64,68];
function func211_1(arr211_1) {
	for (let elem211_1 of arr211_1) {
		if (elem211_1 % 2 == 0) {
			return true;
		}
	}	
	return false;
}
console.log(func211_1(arr211_1));

// Задание 211 №2
console.log('Результат задания 211 №2:');
let num211_2 = 535;
function func211_2(num211_2) {
    let str = num211_2.toString();
    for (let elem211_2 of str) {
      if (Number(elem211_2) % 2 == 0) {
        return false;
      }
    }
    return true;
  }
  console.log(func211_2(num211_2));

// Задание 211 №3
console.log('Результат задания 211 №3:');
  let arr211_3 = [5,15,25,25,45,55];
  function func211_3(arr211_3) {
    for (let i = 1; i < arr211_3.length; i++) {
      if (arr211_3[i] === arr211_3[i - 1]) {
        return true;
      }
    }
    return false;
  }
  console.log(func211_3(arr211_3));

// Задание 212 №1
console.log('Результат задания 212 №1:');
function func212_1(a, b) {
	return a == b;
}
console.log(func212_1(5,10));

// Задание 212 №2
console.log('Результат задания 212 №2:');
function func212_2(l, k) {
	return l != k;
}
console.log(func212_2(1,3));

// Задание 212 №3
console.log('Результат задания 212 №3:');
function func212_3(c, d) {
	return c + d >= 10;
}
console.log(func212_3(15,12));

// Задание 212 №4
console.log('Результат задания 212 №4:');
function func212_4(num212_4) {
	return num212_4 >= 0;
}
console.log(func212_4(-5));

// Задание 213 №1
function func213_1(arr213) {
	if (arr213.length === 0) {
		return 0;
	  }
	let sum213_1 = 0;
	for (let elem213_1 of arr213) {
		sum213_1 += elem213_1;
	}
	return sum213_1 / arr213.length;
}

// Задание 213 №2
function func213_2(arr213_1, arr213_2) {
	let sum213_2 = 0;
	for (let elem213_2 of arr213_1) {
	  sum213_2 += elem213_2;
	}
	let sum213_3 = 0;
	for (let elem213_2 of arr213_2) {
	  sum213_3 += elem213_2;
	}
	if (sum213_3 != 0){
	return sum213_2 / sum213_3;
	}
	else return 0;
}

// Задание 213 №3
function func213_3(arr213_3) {
	let sum213_4 = 0;
  
	for (let elem213_3 of arr213_3) {
	  sum213_4 += elem213_3;
	}
  
	return sum213_4;
  }
  
// Задание 214 №1
console.log('Результат задания 214 №1:');
function func214() {
	return 3;
}
function func214_1() {
	return 5;
}
console.log(func214() + func214_1()); 

// Задание 214 №2
console.log('Результат задания 214 №2:');
function sum214_2(arr214_2) {
	let res214_2 = 0;
	for (let elem214_2 of arr214_2) {
	  res214_2 += elem214_2;
	}
	return res214_2; 
  }
  console.log(sum214_2([1, 2, 3, 4, 5])); 

// Задание 214 №3
console.log('Результат задания 214 №3:');
let arr214_3 = [1, 2, 3, 4, 5];
function func214_3(arr214_3) {
  let res214_3 = 0;
  for (let elem214_3 of arr214_3) {
    res214_3 += elem214_3;
  }
  console.log(res214_3); 
}
func214_3(arr214_3); 

// Задание 214 №4
console.log('Результат задания 214 №4:');
function func214_4_1() {
	return 3;
  }
  function func214_4_2() {
	return 5;
  }
  console.log(func214_4_1() + func214_4_2()); 
  
// Задание 214 №5
console.log('Результат задания 214 №5:');
function sum214_5(arr214_5) {
	let total214_5 = 0; // Переименовано для ясности
	for (let elem214_5 of arr214_5) {
	  total214_5 += elem214_5;
	}
	return total214_5; 
  }
  let result214_5 = sum214_5([1, 2, 3, 4, 5]);
  console.log(result214_5); 
  
// Задание 214 №6
console.log('Результат задания 214 №6:');
function sum214_6(arr214_6) {
	let total214_6 = 0;
	for (let elem214_6 of arr214_6) {
	  total214_6 += elem214_6;
	}
	return total214_6; 
  }
  let res214_6 = sum214_6([1, 2, 3, 4, 5]);
  console.log(res214_6);  

// Задание 214 №7
console.log('Результат задания 214 №7:');
function add214_7(num) {
	if (num <= 9) {
	  return '0' + num;
	}
	return num;
  }
  console.log(add214_7(5)); 
  console.log(add214_7(10)); 

// Задание 214 №8
console.log('Результат задания 214 №8:');
function sum214_8(arr214_8) {
	let res214_8 = 0;
	for (let elem214_8 of arr214_8) {
	  res214_8 += elem214_8;
	}
	return res214_8;
  }
  let arr214_8 = [1, 2, 3, 4, 5];
  let total214_8 = sum214_8(arr214_8);
  console.log(total214_8); 
  
// Задание 214 №9
console.log('Результат задания 214 №9:');
let num214_9 = '12345'; 
let res214_9 = func214_9(num214_9);
console.log(res214_9);

function func214_9(num214_9) {
  let sum214_9 = 0;
  for (let elem214_9 of num214_9) { 
    sum214_9 += parseInt(elem214_9); 
  }
  
  return sum214_9;
}

// Задание 214 №10
console.log('Результат задания 214 №10:');
function func214_10(num214_10) {
	if (num214_10 < 2) return false; 
	for (let i = 2; i <= Math.sqrt(num214_10); i++) { 
	  if (num214_10 % i === 0) {
		return false; 
	  }
	}
	return true; 
  }
  console.log(func214_10(13)); 
  