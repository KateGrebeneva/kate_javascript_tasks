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

