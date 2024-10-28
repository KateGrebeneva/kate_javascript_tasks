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