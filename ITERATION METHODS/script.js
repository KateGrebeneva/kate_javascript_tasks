// Задание 279 №1
console.log('Результат задачи 279 №1:');
let numbers = [4, 9, 16, 25];
let squareRoots = numbers.map(function(num279_1) {
    return Math.sqrt(num279_1);
});
console.log(squareRoots); 

// Задание 279 №2
console.log('Результат задачи 279 №2:');
let strings = ['katushka', 'winx', 'disney'];
let exclamatedStrings = strings.map(function(str279_2) {
    return str279_2 + '!';
});
console.log(exclamatedStrings); 

// Задание 279 №3
console.log('Результат задачи 279 №3:');
let words = ['cat', 'dog', 'pony'];
let reversedWords = words.map(function(word) {
    return word.split('').reverse().join('');
});
console.log(reversedWords); 

// Задание 279 №4
console.log('Результат задачи 279 №4:');
let arr279_4 = ['123', '456', '789'];
let transformedArr279_4 = arr279_4.map(function(str279_4) {
    return str279_4.split('').map(function(num279_4) {
        return Number(num279_4);
    });
});
console.log(transformedArr279_4); 

// Задание 279 №5
console.log('Результат задачи 279 №5:');
let numbersArray = [10, 20, 30];
let multipliedArray = numbersArray.map(function(num, index) {
    return num * (index + 1);
});
console.log(multipliedArray); 

// Задание 280 №1
console.log('Результат задачи 280 №1:');
let arr280 = [1, 2, 3, 4, 5];
let sum280 = 0;
arr280.forEach(function(elem280) {
	sum280 += elem280 ** 2;
});
console.log(sum280);