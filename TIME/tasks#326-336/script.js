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

// Задание 327 №1
console.log('Результат задачи 327 №1:');
let startDate = new Date(new Date().getFullYear(), 0, 1); 
let endDate = new Date(new Date().getFullYear(), 8, 10); 
let daysBetween = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
console.log('Количество дней между 1 января и 10 сентября текущего года: ' + (daysBetween));

// Задание 327 №2
console.log('Результат задачи 327 №2:');
let currentDate = new Date();
let startOfNextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 10); 
let startOfCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 20); 
let daysBetweenCurrentAndNext = Math.floor((startOfNextMonth - startOfCurrentMonth) / (1000 * 60 * 60 * 24));
console.log('Количество дней между 20 числом текущего месяца и 10 числом следующего: ' + (daysBetweenCurrentAndNext));

// Задание 328 №1
console.log('Результат задачи 328 №1:');
let task328 = new Date();
// Полдень вчерашнего дня
let noonYesterday = new Date(task328.getFullYear(), task328.getMonth(), task328.getDate() - 1, 12);
// Разность между текущим временем и полднем вчера
let differenceInMilliseconds = task328 - noonYesterday;
let differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
console.log('Часов, прошедших с полдня вчерашнего дня: ' + (differenceInHours));

// Задание 329 №1
console.log('Результат задачи 329 №1:');
now = new Date();
let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
differenceInMilliseconds = now - startOfDay;
differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
console.log('Часов, прошедших с начала дня: ' + (differenceInHours));
