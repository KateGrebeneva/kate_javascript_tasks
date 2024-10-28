// Задание 274 №1
console.log('Результат задач 274 №1:');
let arr274_1 = [1, 2, 3, 4, 5];
function func(arr274_1, index) {
	if (index < arr274_1.length) {
		console.log(arr274_1[index]);
		func(arr274_1, index + 1);
	}
}
func(arr274_1, 0);

