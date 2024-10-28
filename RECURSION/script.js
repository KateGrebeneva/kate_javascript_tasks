// Задание 274 №1
console.log('Результат задачи 274 №1:');
let arr274_1 = [1, 2, 3, 4, 5];
function func(arr274_1, index) {
	if (index < arr274_1.length) {
		console.log(arr274_1[index]);
		func(arr274_1, index + 1);
	}
}
func(arr274_1, 0);

// Задание 275 №1
console.log('Результат задачи 275 №1:');
function task275(arr275_1) {
	let sum275_1 = arr275_1[0] * arr275_1[0];
	if (arr275_1.length !== 1) {
	  sum275_1 += task275(arr275_1.slice(1)); 
	}
	return sum275_1;
  }
  let arr275_1 = [1, 2, 3, 4, 5];
  console.log(task275(arr275_1));

// Задание 276 №1
console.log('Результат задачи 276 №1:');
function func276_1(arr276_1) {
	for (elem276_1 in arr276_1) {
		if (typeof elem276_1 == 'object') {
			func276_1(elem276_1);
		} else {
			console.log(elem276_1);
		}
	}
}
func276_1({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}});

// Задание 276 №2
console.log('Результат задачи 276 №2:');
function func276_2(arr276_2) {
	for (let elem276_2 of arr276_2) {
		if (typeof elem276_2 == 'object') {
			func276_2(elem276_2);
		} else {
			massive += elem276_2 + ' ';
		}
	}
}
let massive = [];
func276_2([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);
console.log(massive);

// Задание 277 №1
console.log('Результат задачи 277 №1:');
let obj277_1 = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}; 
function func277_1(obj277_1) { 
  let sum277_1 = 0; 
  for(let elem277_1 in obj277_1) { 
    if(typeof obj277_1[elem277_1] == 'object') { 
      sum277_1 += func277_1(obj277_1[elem277_1]); 
    } else { 
      sum277_1 += obj277_1[elem277_1]; 
    } 
  } 
  return sum277_1; 
} 
console.log(func277_1(obj277_1)); 

// Задание 277 №2
console.log('Результат задачи 277 №2:');
function func277_2(arr277_2) {
	let sum277_2 = [];
	for (let elem277_2 of arr277_2) {
		if (typeof elem277_2 == 'object') {
			sum277_2 += func277_2(elem277_2);
		} else {
			sum277_2 += elem277_2;
		}
	}
	return sum277_2;
}
console.log(func277_2(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]] )); 

// Задание 278 №1
console.log('Результат задачи 278 №1:');
function func278_1(arr278_1) {
	let sum278_1 = [];	
	for (let elem278_1 of arr278_1) {
		if (typeof elem278_1 == 'object') {
			sum278_1 += func278_1(elem278_1);
		} else {
			sum278_1 += elem278_1 ** 2 + ' ';
		}
	}
	return sum278_1;
}
console.log(func278_1([1, [2, 7, 8], [3, 4], [5, [6, 7]]])); 