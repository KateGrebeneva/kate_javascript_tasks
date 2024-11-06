// Задание 326 №1
console.log('Результат задачи 326 №1:');
let now = new Date();
let nextYear = now.getFullYear() + 1;
let dateNextYearEnd = new Date(nextYear, 11, 31); 
let dayOfWeekNextYearEnd = dateNextYearEnd.getDay();
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
console.log('31 декабря ' + (nextYear) + ' года будет: ' + days[dayOfWeekNextYearEnd]);

// Задание 326 №2
console.log('Результат задачи 326 №2:');
let dateNextYearSameDate = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
let dayOfWeekNextYearSameDate = dateNextYearSameDate.getDay();
console.log('В следующем году в такую же дату будет: ' + days[dayOfWeekNextYearSameDate]);

// Задание 326 №3
console.log('Результат задачи 326 №3:');
let dateLastYearSameDate = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
let dayOfWeekLastYearSameDate = dateLastYearSameDate.getDay();
console.log('Год назад в такую же дату был: ' + days[dayOfWeekLastYearSameDate]);
