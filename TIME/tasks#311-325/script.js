// Задание 311 №1
console.log('Результат задачи 311:');
let date311 = new Date();
console.log('Текущий день: ' + (date311.getDate()));   
// Задание 311 №2  
console.log('Текущий месяц: ' + (date311.getMonth() + 1)); // Месяцы начинаются с 0
// Задание 311 №3 
console.log('Текущий год: ' + (date311.getFullYear())); 

// Задание 312 №1
console.log('Результат задачи 312 №1:');
function addZero(num) {
    if (num >= 0 && num <= 9) {
      return '0' + num;
    } else {
      return num;
    }
  }
  let date312 = new Date();

  let hours312 = addZero(date312.getHours());
  let minutes312 = addZero(date312.getMinutes());
  let seconds312 = addZero(date312.getSeconds());
  let day312 = addZero(date312.getDate());
  let month312 = addZero(date312.getMonth() + 1);
  let year312 = date312.getFullYear();
  console.log(hours312 + ':' + minutes312 + ':' + seconds312 + ' ' + day312 + '.' + month312 + '.' + year312);
  
// Задание 313 №1
console.log('Результат задачи 313 №1:');
let str313 = '2024-11-01'; 
let res313 = str313.split('-').reverse().join('.'); 
console.log(res313);

console.log('Результат задачи 314:');
// Задание 314 №1
let date314 = new Date();
let dayNumber = date314.getDay();
console.log("Номер текущего дня недели:", dayNumber);
// Задание 314 №2
let isWeekend = (dayNumber === 0 || dayNumber === 6);
if (isWeekend) {
    console.log("Сегодня выходной день.");
} else {
    console.log("Сегодня рабочий день.");
}
// Задание 314 №3
let daysUntilSunday = (7 - dayNumber) % 7; // % 7 для обработки случая, когда сегодня воскресенье
console.log("Дней до ближайшего воскресенья:", daysUntilSunday);
