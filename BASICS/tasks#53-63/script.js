// Задание 54 №1
let str54_1 = 'malificenta';
alert(str54_1[str54_1.length - 1]);

// Задание 54 №2
let str54_2 = 'malificenta';
alert(str54_2[str54_2.length - 2]);

// Задание 54 №3
let str54_3 = 'malificenta';
alert(str54_3[str54_3.length - 3]);

// Задание 55 №1
let test55 = '12345'; 
alert(Number(test55[0]) + Number(test55[1]) + Number(test55[2]) + Number(test55[3]) + Number(test55[4]));

// Задание 56 №1
let test56_1 = String(12345);
alert(Number(test56_1[0]) * Number(test56_1[1]) * Number(test56_1[2]) * Number(test56_1[3]) * Number(test56_1[4]));

// Задание 56 №2
let test56_2 = String(12345);
alert(Number(test56_2[0]) * Number(test56_2[1]) * Number(test56_2[2]) * Number(test56_2[3]) * Number(test56_2[4])); 

// Задание 56 №3
let test56_3 = String(12345);
alert(Number(test56_3[4])); 
alert(Number(test56_3[3])); 
alert(Number(test56_3[2])); 
alert(Number(test56_3[1])); 
alert(Number(test56_3[0]));

// Задание 57 №1
//let num = 1;
// num = num + 1;
// num = num + 1;
// alert(num);
// Результат выведния будет = 3

// Задание 57 №2
// let num = 1;
// num = num + 2;
// num = num + 3;
// alert(num);
// Результат выведния будет = 6

// Задание 58 №1
let num58 = 47;
num58 += 7;
num58 -= 18;
num58 *= 10;
num58 /= 15;
alert(num58);

// Задание 59 №1
let num59 = 10;
num59 ++;
num59 ++;
num59 --;
alert(num59);

// Задание 60 №1
// let num = 3;
// alert(++num);
// Результат выведния будет = 4

// Задание 60 №2
// let num = 3;
// alert(num++);
// Результат выведния будет = 3

// Задание 60 №3
// let num = 3;
// alert(--num);
// Результат выведния будет = 2

// Задание 60 №4
// let num = 3;
// alert(num--);
// Результат выведния будет = 3

// Задание 60 №5
// let num1 = 3;
// let num2 = ++num1;
// alert(num1);
// 1 результат выведния будет = 4
// alert(num2);
// 2 результат выведния будет = 4

// Задание 60 №6
// let num1 = 3;
// let num2 = num1++;
// alert(num1);
// 1 результат выведния будет = 4
// alert(num2);
// 2 результат выведния будет = 3

// Задание 60 №7
// let num1 = 3;
// let num2 = --num1;
// alert(num1);
// 1 результат выведния будет = 2
// alert(num2);
// 2 результат выведния будет = 2

// Задание 60 №8
// let num1 = 3;
// let num2 = num1--;
// alert(num1);
// 1 результат выведния будет = 2
// alert(num2);
// 2 результат выведния будет = 3

// Задание 60 №9
// let num1 = 3;
// num1++;
// let num2 = num1--;
// alert(num1++);
// 1 результат выведния будет = 4
// alert(--num2);
// 2 результат выведния будет = 3

// Задание 61 №1
alert(0.1 * 0.2);

// Задание 61 №2
alert(0.3 - 0.1);

// Задание 62 №1
let age = prompt("Ваш возраст?");
alert("Ваш возраст: " + age);

// Задание 63 №1
let num63_1 = Number(prompt('Введите первое число'));
let num63_2 = Number(prompt('Введите второе число'));

alert(num63_1 + num63_2); // теперь будет складывать числа

// Задание 63 №2
let side = Number(prompt('Введите сторону квадрата'));
let s = side * side;
alert('Площадь квадрата: ' + s);

// Задание 63 №3
let length = Number(prompt('Введите длину прямоугольника'));
let width = Number(prompt('Введите ширину прямоугольника'));
let p = 2 * (length + width);
alert('Периметр прямоугольника: ' + p);