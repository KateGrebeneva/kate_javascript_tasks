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

// Задание 300 №1
console.log('Результат задачи 300 №1:');
let arr300 = ['Angelina Ballerina', 'Story', 'Katharine Holabird', 'Eksmo', 2019];
let [title, genres, author, publisher, date] = arr300; 
let info = arr300.slice(2);
console.log(info);  

// Задание 301 №1
console.log('Результат задачи 301 №1:');
let arr301 = ['Club Heaven', 'Nessa Barrett', 'Pop rock'];
let [song, author_name, type_of_song, publication = '2023'] = arr301; 
console.log(song, author_name, type_of_song, publication);

// Задание 302 №1
console.log('Результат задачи 302 №1:');
function getday() {
	return (new Date).getDate();
}
function getyear() {
	if (arr302[0] == undefined) {
		return (new Date).getFullYear();
	}
}
function getmonth() {
	if (arr302[1] == undefined) {
		return (new Date).getMonth() + 1;
	}
}
let arr302 = [];
let [year302 = getyear(), month302 = getmonth(), day302 = getday()] = arr302;
console.log(year302, month302, day302);

// Задание 304 №1
console.log('Результат задачи 304 №1:');
let options = {
	color304: 'red',
	width304:  400,
	height304: 500,
};
let {color304, width304, height304} = options;
console.log(color304, width304, height304);

// Задание 305 №1
console.log('Результат задачи 305 №1:');
let task305 = {
	color305: 'red',
	width305:  400,
	height305: 500,
  };
  let { color305: c, width305: w, height305: h } = task305;
  console.log(c); 
  console.log(w); 
  console.log(h); 
  
// Задание 306 №1
console.log('Результат задачи 306 №1:');
let task306 = {
	width306:  400,
	height306: 500,
  };
  let { color306 = 'black', width306, height306 } = task306;
  console.log(color306);  
  console.log(width306);  
  console.log(height306); 
  
// Задание 307 №1
console.log('Результат задачи 307 №1:');
  let task307 = {
	width307:  400,
	height307: 500,
  };
  let { color307: k = 'black', width307: l, height307: m } = task307;
  console.log(k); // выведет 'black'
  console.log(l); // выведет 400
  console.log(m); // выведет 500
  
// Задание 308 №1
console.log('Результат задачи 309 №1:');
function func309_1([name309_1, surname309_1, department309_1, position309_1, salary309_1]) {
	console.log({name309_1});
	console.log({surname309_1});
	console.log({department309_1});
	console.log({position309_1});
	console.log({salary309_1});
  }
func309_1(['John', 'Smit', 'development', 'programmer', 2000]);
  
// Задание 309 №2
console.log('Результат задачи 309 №2:');
function func309_2([name309_2, surname309_2, ...info]) {
	console.log({name309_2});
	console.log({surname309_2});
	console.log(info.join(', '));
  }
  func309_2(['John', 'Smit', 'development', 'programmer', 2000]);
  
// Задание 309 №3
console.log('Результат задачи 309 №3:');
function func309_3([name309_3, surname309_3, department309_3, position309_3 = 'джуниор']) {
	console.log({name309_3});
	console.log({surname309_3});
	console.log({department309_3});
	console.log({position309_3});
  }
  func309_3(['John', 'Smit', 'development']);
  
// Задание 309 №4
console.log('Результат задачи 309 №4:');
  function func309_4(department309_4, [name309_4, surname309_4], [year309_4, month309_4, day309_4]) {
	console.log({department309_4});
	console.log({name309_4});
	console.log({surname309_4});
	console.log({year309_4}, {month309_4}, {day309_4});
  }
  func309_4('development', ['John', 'Smit'], [2018, 12, 31]);
  