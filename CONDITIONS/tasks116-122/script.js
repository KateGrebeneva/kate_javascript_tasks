// Задание 116 №1
let num116_1 = 3;
if ((num116_1 > 5 && num116_1 < 10) || num116_1 == 20) {
	console.log('+++');
} else {
	console.log('---');
} 

// Задание 116 №2
let num116_2 = 3;		
if (num116_2 > 5 || (num116_2 > 0 && num116_2 < 3)) {
	console.log('+++');
} else {
	console.log('---');
}

// Задание 116 №3
let num116_3 = 3;
if (num116_3 == 9 || (num116_3 > 10 && num116_3 < 20) || (num116_3 > 20 && num116_3 < 30)) {
	console.log('+++');
} else {
	console.log('---');
}

// Задание 117 №1
let num117_1 = 5;
let num117_2 = 1;
if (! (num117_1 < 0 || num117_2 > 10) ) {
	console.log('+++');
} else {
	console.log('---');
}

// Задание 118 №1
let test118_1 = true;

if (test118_1 === true) {
	console.log('+++');
} else {
	console.log('---');
}

// Задание 118 №2
let test118_2 = false;

if (test118_2 === false) {
	console.log('+++');
} else {
	console.log('---');
}

// Задание 119 №1
// При приведении к логическому типу (boolean) значения, которые дают false, включают:
// 1. false
// 2. 0 
// 3. -0 
// 4. NaN 
// 5. "" — пустая строка.
// 6. null 
// 7. undefined 

// Задание 119 №2
// let test = 1;	
// if (test == true) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат вывода = +++

// Задание 119 №3
// let test = 0;  
// if (test == true) {
//   console.log('+++');
// } else {
//   console.log('---');
// }
// Результат вывода = --- 

// Задание 119 №4
// let test = 1;  
// if (test == false) {
//   console.log('+++');
// } else {
//   console.log('---');
// }
// Результат вывода = --- 

// Задание 119 №5
// let test = 1;  
// if (test != true) {
//   console.log('+++');
// } else {
//   console.log('---');
// }
// Результат вывода = --- 

// Задание 119 №6
// let test = '';  
// if (test == false) {
//   console.log('+++');
// } else {
//   console.log('---');
// }
// Результат вывода = +++ 

// Задание 119 №7
// let test;  
// if (test == true) {
//   console.log('+++');
// } else {
//   console.log('---');
// }
// Результат вывода = --- 

// Задание 119 №8
// let test = 3 * 'a';  
// if (test == true) {
//   console.log('+++');
// } else {
//   console.log('---');
// }
// Результат вывода = --- 

// Задание 120 №1
let test120 = true;
if (test120) {
	console.log('+++');
} else {
	console.log('---');
}

// Задание 121 №1
let test121_1 = true;
if (!test121_1) {
  console.log('+++');
} else {
  console.log('---');
}

// Задание 121 №2
let test121_2 = true;
if (!test121_2) {
  console.log('+++');
} else {
  console.log('---');
}

// Задание 121 №3
let test121_3 = true;
if (test121_3) {
  console.log('+++');
} else {
  console.log('---');
}

// Задание 122 №1
// let test = 3;
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат вывода = +++

// Задание 122 №2
// let test = 'abc';
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат вывода = +++

// Задание 122 №3
// let test = '';
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат вывода = ---

// Задание 122 №4
// let test = 3 * 'abc';
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат вывода = ---

// Задание 122 №5
// let test = null;
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат вывода = ---

// Задание 122 №6
// let test = false;
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат вывода = ---

// Задание 122 №7
// let test;
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат вывода = ---

// Задание 122 №8
// let test = 0;
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат вывода = ---

// Задание 122 №9
// let test = '0';
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат вывода = +++

// Задание 122 №10
// let test = -1;
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат вывода = +++