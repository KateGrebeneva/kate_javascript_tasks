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