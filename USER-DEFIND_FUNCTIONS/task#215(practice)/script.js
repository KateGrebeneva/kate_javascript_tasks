// Задание 215 №1
console.log('Результат задания 215 №1:');
function sum_arr(arr) {
    let sum = 0;
    for (let element of arr) {
        sum += element;
    }
    return sum;
} 
let res = sum_arr([5, 15, 25, 35, 45]);
console.log('Сумма элементов массива: '+ res);

// Задание 215 №2
console.log('Результат задания 215 №2:');
function getDivisors(num) {
    const divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}
let divisorsArray = getDivisors(16);
console.log('Массив делителей числа 16: '+ divisorsArray);

// Задание 215 №3
console.log('Результат задания 215 №3:');
function stringToCharArray(str) {
    return str.split('');
}
let example = "Katushka";
let charArray = stringToCharArray(example);
console.log('Массив символов строки: '+ charArray);

// Задание 215 №4
console.log('Результат задания 215 №4:');
function reverseString(str) {
    return str.split('').reverse().join('');
}
let reversedString = reverseString(example);
console.log('Символы строки в обратном порядке: ' + reversedString);

// Задание 215 №5
console.log('Результат задания 215 №5:');
function capitalizeFirstLetter(str) {
    if (str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
let capitalizedString215_5 = capitalizeFirstLetter('today is 14.10.2024');
console.log('Первое слово в строке с заглавной буквы: ' + capitalizedString215_5);

// Задание 215 №6
console.log('Результат задания 215 №6:');
function capitalizeFirstLetterOfEachWord(str) {
    return str.split(' ').map(capitalizeFirstLetter).join(' ');
}
let capitalizedString215_6 = capitalizeFirstLetterOfEachWord('be kind!');
console.log('Каждое слово в строке с заглавной буквы: ' + capitalizedString215_6);

// Задание 215 №7
console.log('Результат задания 215 №7:');
function createArrayUpToN(n) {
    let res_Array = [];
    for (let i = 1; i <= n; i++) {
        res_Array.push(i);
    }
    return res_Array;
}
let res_Array = createArrayUpToN(10);
console.log('Массив целых чисел от 1 до 10: ' + res_Array);

// Задание 215 №8
console.log('Результат задания 215 №8:');
function sumOfDigits(number) {
    let sum = 0;
    let numString = number.toString();
    for (let digit of numString) {
        sum += parseInt(digit, 10);
    }
    return sum;
}
let resultSum = sumOfDigits(55);
console.log('Сумма цифр числа 55: ' + resultSum);

// Задание 215 №9
console.log('Результат задания 215 №9:');
function isLeapYear(year) {
	return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
let isLeap = isLeapYear(2025);
console.log('Год высокосный?: '+ isLeap);

// Задание 215 №10
console.log('Результат задания 215 №10:');
function secondsToDays(seconds) {
    return Math.floor(seconds / (60 * 60 * 24));
}
let days = secondsToDays(172800);  
console.log('Кол-во суток: '+ days);

// Задание 215 №11
console.log('Результат задания 215 №11:');
function getRandomElementFromArray(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    let randomElement = array[randomIndex];
    return randomElement;
}
let randomElement = getRandomElementFromArray([15, 25, 35, 45, 55]);
console.log('Любой элемент массива: '+ randomElement);

// Задание 215 №12
console.log('Результат задания 215 №12:');
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
let isPrimeResult = isPrime(15);
console.log('Число простое?: '+ isPrimeResult);