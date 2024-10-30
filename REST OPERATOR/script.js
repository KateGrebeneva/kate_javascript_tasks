// Задание 293 №1
console.log('Результат задачи 293 №1:');
function func293(...nums) {
    let sum = 0;
    let sred = 0;
    for (let num of nums) {
        sum += num;
    }
    sred = sum / (nums.length);
    return sred;
}
let result293 = func293(15, 5, 10, 25, 55);
console.log(result293);

// Задание 295 №1
console.log('Результат задачи 295 №1:');
merge1([1, 2, 3], [4, 5, 6], [7, 8, 9]);
function merge1(...arrs1){
	console.log(arrs1); 
}

// Задание 295 №2
console.log('Результат задачи 295 №2:');
function merge2(...arrs2) {
	return [].concat(...arrs2);
}
let result2 = merge2([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result2); 
