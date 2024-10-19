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


