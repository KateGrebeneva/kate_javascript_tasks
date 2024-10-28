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

// Задание 281 №1
console.log('Результат задачи 281 №1:');
let arr281_1 = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
let res281_1 = arr281_1.filter(function(elem281_1) {
	if (elem281_1 >= 0) {
		return true;
	} else {
		return false;
	}
});
console.log(res281_1);

// Задание 281 №2
console.log('Результат задачи 281 №2:');
let arr281_2 = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
let res281_2 = arr281_2.filter(function(elem281_2) {
	if (elem281_2 < 0) {
		return true;
	} else {
		return false;
	}
});
console.log(res281_2);

// Задание 281 №3
console.log('Результат задачи 281 №3:');
let arr281_3 = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
let res281_3 = arr281_3.filter(function(elem281_3) {
	if (elem281_3 > 0 && elem281_3 < 10) {
		return true;
	} else {
		return false;
	}
});
console.log(res281_3);

// Задание 281 №4
console.log('Результат задачи 281 №4:');
let arr281_4 = ['pony', 'Krosh', 'Flora'];
let res281_4 = arr281_4.filter(function(elem281_4) {
	if (elem281_4.length >= 5) {
		return true;
	} else {
		return false;
	}
});
console.log(res281_4);

// Задание 281 №5
console.log('Результат задачи 281 №5:');
let arr281_5 = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
let res281_5 = arr281_5.filter(function(elem, index) {
		if (elem * (index + 1) < 30) {
			return true;
		} else {
			return false;
		}
});
console.log(res281_5);

// Задание 281 №6
console.log('Результат задачи 281 №6:');
let arr281_6 = [1, 2, [3, 4], 5, [6, 7]];
let res281_6 = arr281_6.filter(function(elem281_6) {
		if (typeof elem281_6 == 'object') {
			return false;
		} else {
			return true;
		}
});
console.log(res281_6);

// Задание 282 №1
console.log('Результат задачи 282 №1:');
let arr282_1 = [5, 10, 15, 20, 25];
let check282_1 = arr282_1.every(function(elem282_1) {
	if (elem282_1 > 0) {
		return true;
	} else {
		return false;
	}
});
console.log(check282_1);

// Задание 282 №2
console.log('Результат задачи 282 №2:');
let arr282_2 = [0, 5, 10, 15, 20, 25];
let check282_2 = arr282_2.every(function(elem282_2, index282_2) {
	if (elem282_2 * (index282_2 + 1) < 30) {
		return true;
	} else {
		return false;
	}
});
console.log(check282_2);