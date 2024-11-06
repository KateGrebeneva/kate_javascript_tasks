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

// Задание 330 №1
console.log('Результат задачи 330 №1:');
now = new Date();
// Конец текущего дня (полночь следующего дня)
let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
let differenceToEndInMilliseconds = endOfDay - now;
let differenceToEndInHours = differenceToEndInMilliseconds / (1000 * 60 * 60);
console.log('Часов, оставшихся до конца дня: ' + (differenceToEndInHours));

// Задание 331 №1
console.log('Результат задачи 331 №1:');
now = new Date();
let currentYear = now.getFullYear();
let startYear = 2000;
let weekendCount = 0;
for (let year = startYear; year <= currentYear; year++) {
    let date = new Date(year, 0, 1); 
    let dayOfWeek = date.getDay(); 
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        weekendCount++;
}
}
console.log('Количество раз, когда 1 января попадало на выходной день с 2000 года до ' + (currentYear)+  ' : ' + (weekendCount));

// Задание 332 - ПРАКТИКА
// №1
console.log('Результат задачи 332 №1:');
now = new Date();
startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const secondsSinceStartOfDay = Math.floor((now - startOfDay) / 1000);
console.log('Секунд с начала дня: ' + (secondsSinceStartOfDay));

// №2
console.log('Результат задачи 332 №2:');
endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
const secondsUntilEndOfDay = Math.floor((endOfDay - now) / 1000);
console.log('Секунд до конца дня: ' + (secondsUntilEndOfDay));

// №3
console.log('Результат задачи 332 №3:');
nextYear = new Date(now.getFullYear() + 1, 0, 1);
const daysUntilNewYear = Math.ceil((nextYear - now) / (1000 * 60 * 60 * 24));
console.log('Дней до нового года: ' + (daysUntilNewYear));

// №4
console.log('Результат задачи 332 №4:');
let fridaysThe13thCount = 0;
for (let month = 0; month < 12; month++) {
    const date = new Date(now.getFullYear(), month, 13);
    if (date.getDay() === 5) { // 5 - пятница
        fridaysThe13thCount++;
    }
}
console.log('Количество пятниц 13-х в текущем году: ' + (fridaysThe13thCount));

// №5
console.log('Результат задачи 332 №5:');
const threeMonthsAgo = new Date(now);
threeMonthsAgo.setMonth(now.getMonth() - 3);
console.log('3 месяца назад был год: ' + (threeMonthsAgo.getFullYear()));

// №6
console.log('Результат задачи 332 №6:');
now = new Date();
const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const dayOfWeekLastDay = daysOfWeek[lastDayOfMonth.getDay()];
console.log('Последний день текущего месяца будет: ' + (dayOfWeekLastDay));

// №7
console.log('Результат задачи 332 №7:');
now = new Date();
const year = now.getFullYear();
const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};
if (isLeapYear(year)) {
  console.log('Текущий год ' + (year) + ' високосный.');
} else {
  console.log('Текущий год ' + (year) + ' не високосный.');
}

// №8
console.log('Результат задачи 332 №8:');
let previousLeapYear = now.getFullYear() - 1;
while (!isLeapYear(previousLeapYear)) {
    previousLeapYear--;
}
console.log('Предыдущий високосный год: ' + (previousLeapYear));

// №9
console.log('Результат задачи 332 №9:');
let nextLeapYear = now.getFullYear() + 1;
while (!isLeapYear(nextLeapYear)) {
    nextLeapYear++;
}
console.log('Следующий високосный год: ' + (nextLeapYear));

// Задание 333 №1
console.log('Результат задачи 333 №1:');
let date333_1 = '2020-11-31';
let date333_2 = '2020-12-01';
if (date333_1 > date333_2) {
  console.log((date333_1) + ' больше,чем ' + (date333_2));
} else if (date333_1 < date333_2) {
  console.log((date333_1) + ' меньше,чем ' + (date333_2));
} else {
  console.log((date333_1) + ' равна ' + (date333_2));
}

// Задание 334 №1
console.log('Результат задачи 334 №1:');
let date334_1 = '09-21';
let date334_2 = '09-23';
if (date334_1 > date334_2) {
  console.log((date334_1) + ' больше,чем ' + (date334_2));
} else if (date334_1 < date334_2) {
  console.log((date334_1) + ' меньше,чем ' + (date334_2));
} else {
  console.log((date334_1) + ' равна ' + (date334_2));
}

// Задание 335 №1
console.log('Результат задачи 335 №1:');
let date = '06-30'; 
let month = parseInt(date.split('-')[0], 10); 
let day = parseInt(date.split('-')[1], 10); 
let zodiacSign;
if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    zodiacSign = 'Водолей';
} else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    zodiacSign = 'Рыбы';
} else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    zodiacSign = 'Овен';
} else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    zodiacSign = 'Телец';
} else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    zodiacSign = 'Близнецы';
} else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    zodiacSign = 'Рак';
} else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    zodiacSign = 'Лев';
} else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    zodiacSign = 'Дева';
} else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    zodiacSign = 'Весы';
} else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    zodiacSign = 'Скорпион';
} else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    zodiacSign = 'Стрелец';
} else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    zodiacSign = 'Козерог';
}
console.log('Знак Зодиака для даты ' + (date) + ' : ' + (zodiacSign));

// Задание 336 №1
console.log('Результат задачи 336 №1:');
currentDate = new Date();
let noonToday = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 12, 0, 0);
if (currentDate > noonToday) {
    console.log("Полдень уже прошел.");
} else {
    console.log("Полдень еще не наступил.");
}

// Задание 336 №2
console.log('Результат задачи 336 №2:');
currentDate = new Date();
let fifteenthOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 15);
if (currentDate > fifteenthOfMonth) {
    console.log("Половина месяца уже прошла.");
} else {
    console.log("Половина месяца еще не наступила.");
}
