// Задание 296 №1
console.log('Результат задачи 296 №1:');
let arr296 = ['John', 'Smit', 'development', 'programmer', 2000];
let [first_name, surname, department, position, salary] = arr296; 
console.log(first_name, surname, department, position, salary);

// Задание 297 №1
console.log('Результат задачи 297 №1:');
function func297() {
	return ['Chip and Dale: Rescue Rangers', 'Series', 'Zipper', 'Disney', 1989];
}
let [movie, genre, hero, production, year] = func297(); 
console.log(func297());  

// Задание 298 №1
console.log('Результат задачи 298 №1:');
let arr298 = ['Plants', 'Flowers', 'Roses', 'Pink', 'Symbol of love'];
let [,, type, color,] = arr298; 
console.log(type, color)