// Задание 88 №1
let obj88 = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj88);
console.log(keys);

// Задание 89 №1
let obj89 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj89).length);

// Задание 90 №1
let obj90 = {x: 1, y: 2, z: 3};
let key90 = 'x';
console.log(obj90[key90]);

// Задание 91 №1
let obj91_1 = {x: 1, y: 2, z: 3};
console.log(obj91_1['x']);

// Задание 91 №2
let obj91_2 = {x: 1, y: 2, z: 3};
let key91 = 'x';
console.log(obj91_2[key91]);

// Задание 92 №1
let obj92_1 = {x: 1, y: 2, z: 3};
let prop92_1 = 'x';
console.log(obj92_1[prop92_1]);

// Задание 92 №2
let obj92_2 = {x: 1, y: 2, z: 3};

let prop92_2 = 'x';
console.log(obj92_2[prop92_2]);

// Задание 93 №1
let key93 = 'x';
let obj93_1 = {
[key93]: 1,
y: 2,
z: 3
};

// Задание 93 №2
let obj93_2 = {
[key93_1]: 1,
[key93_2]: 2,
[key93_3]: 3
};
let key93_1 = 'x';
let key93_2 = 'y';
let key93_3 = 'z';

// Задание 94 №1
let obj94 = {x: 1, y: 2, z: 3};
console.log('x' in obj94); // Результат вывода = true
console.log('w' in obj94); // Результат вывода = false 

// Задание 95 №1
let obj95 = {x: 1, y: 2, z: 3};
delete obj95.x;
console.log('x' in obj95);
// Результат вывода = {y: 2, z: 3}

// Задание 96 №1
// console.log( typeof {x: 1, y: 2, z: 3} );
// Результат вывода =  object

// Задание 96 №2
// console.log( typeof {} );
// Результат вывода =  object

// Задание 96 №3
// let obj = {x: 1, y: 2, z: 3};
// console.log( typeof obj );
// Результат вывода =  object

// Задание 96 №4
// let obj1 = {x: 1, y: 2, z: 3};
// console.log( typeof obj1['x'] ); 
// Результат вывода = number

// Задание 97 №1
// console.log( typeof {x: 1, y: 2, z: 3} ); 
// Результат вывода = object

// Задание 97 №2
// console.log( typeof [1, 2, 3] ); 
// Результат вывода = object

// Задание 97 №3
// let arr1 = [1, 2, 3];
// console.log( typeof arr1 ); 
// Результат вывода = object

// Задание 97 №4
// let arr2 = [1, 2, 3];
// console.log( typeof arr2[0] ); 
// Результат вывода = number

// Задание 97 №5
// let arr3 = ['1', '2', '3'];
// console.log( typeof arr3[0] ); 
// Результат вывода = string

// Задание 98 №1
// console.log( Array.isArray([1, 2, 3]) );
// Результат вывода = true

// Задание 98 №2
// console.log( Array.isArray({x: 1, y: 2, z: 3}) ); 
// Результат вывода = false

// Задание 99 №1
// let test = {x: 1, y: 2, z: 3};
// console.log(test);
// Результат вывода = {x: 1, y: 2, z: 3} (объект)

// Задание 99 №2
// let test = {x: 1, y: 2, z: 3};
// console.log(test.x);
// Результат вывода = 1 (примитив)

// Задание 99 №3
// let test = [1, 2, 3];
// console.log(test);
// Результат вывода = [1, 2, 3] (объект)

// Задание 99 №4
// let test = [1, 2, 3];
// console.log(test[1]);
// Результат вывода = 2 (примитив)

// Задание 99 №5
// let test1 = [1, 2, 3];
// let test2 = 1;
// console.log(test1);
// Результат вывода = [1, 2, 3] (объект)

// Задание 99 №6
// let test1 = [1, 2, 3];
// let test2 = 1;
// console.log(test1[test2]);
// Результат вывода = 2 (примитив)

// Задание 99 №7
// Примитивные типы данных в JavaScript:
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol (ES6)
// 7. bigint (ES11)

// Задание 100 №1
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr1[0] = 'a';
// console.log(arr2);
// Результат вывода = ['a', 2, 3] (изменение влияет на оба массива)                                                                                                    

// Задание 100 №2
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr1[0] = 'a';
// arr2[1] = 'b';
// console.log(arr1);
// Результат вывода = ['a', 'b', 3] (изменения отражаются в arr1)                                                                                                    

// Задание 100 №3
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr1[0] = 'a';
// arr2[0] = 'b';
// console.log(arr2);
// Результат вывода = ['b', 2, 3] (изменение в arr2 влияет на arr1)       

// Задание 101 №1
const arr101_1 = ['a', 'b', 'c'];
arr101_1[1] = '!';
console.log(arr101_1);
// Результат вывода = ['a', '!', 'c']                                                                                                     

// Задание 101 №2
const arr101_2 = ['a', 'b', 'c'];
arr101_2 = [1, 2, 3];
console.log(arr101_2);
// Результат вывода = Uncaught TypeError: Assignment to constant variable. (нельзя переназначить константу)                                                                                                     

// Задание 101 №3
const arr101_3 = ['a', 'b', 'c'];
arr101_3 = ['a', 'b', 'c'];
console.log(arr101_3);
// Результат вывода = Uncaught TypeError: Assignment to constant variable. (нельзя переназначить константу)                                                                                                   
