// Задание 176 №1
console.log('Результат задания 176 №1:');
let obj176_1 = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
}
let sum176_1 = 0;
for (let key in obj176_1) {
  for (let innerKey in obj176_1[key]) {
    sum176_1 += obj176_1[key][innerKey];
  }
}
console.log(sum176_1); // Вывод: 45

// Задание 176 №2
console.log('Результат задания 176 №2:');
let obj176_2 = {
  1: {
    1: 'a1',
    2: 'a2',
    3: 'a3',
  },
  2: {
    1: 'b1',
    2: 'b2',
    3: 'b3',
  },
  3: {
    1: 'c1',
    2: 'c2',
    3: 'c3',
  },
}
console.log(obj176_2[2][2]); 
console.log(obj176_2[3][1]); 

// Задание 176 №3
console.log('Результат задания 176 №3:');
let obj176_3 = {
  key1: {
    a: 1, b: 2, c: {
      d: 3,
      e: 4,
    }, f: 5,
  },
  key2: {
    g: 6, h: 7,
  },
}
let sum176_3 = obj176_3.key1.a + obj176_3.key1.b + obj176_3.key1.c.d + obj176_3.key1.c.e + obj176_3.key1.f + obj176_3.key2.g + obj176_3.key2.h;
console.log(sum176_3); 

// Задание 177 №1
console.log('Результат задания 177 №1:');
let obj177_1 = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
let sum177_1 = 0;
for (let key in obj177_1) {
	let subObj177_1 = obj177_1[key];
	
	for (let subKey in subObj177_1) {
		sum177_1 += subObj177_1[subKey];
	}
}
console.log(sum177_1);

// Задание 177 №2
console.log('Результат задания 177 №2:');
let obj177_2 = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}
sum177_2 = 0;
for (let key in obj177_2) {
	let subObj = obj177_2[key];
	
	for (let subKey in subObj) {
		let a = subObj[subKey];

		for (let b in a) {
			sum177_2 += a[b];
		}
	}
}
console.log(sum177_2);

// Задание 178 №1
console.log('Результат задания 178 №1:');
let students = {
	'group1': ['kate', 'yasya', 'nastya'],
	'group2': ['flora', 'stella', 'musa'],
	'group3': ['bloom', 'techna', 'leyla'],
};
console.log(students['group1'][0]);

// Задание 179 №1
console.log('Результат задания 179 №1:');
let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
	],
	4: [
		'data41',
		'data42',
		'data43',
	],
};
for (let group in data) {
	for (let name of data[group]) {
		console.log(name);
	}
}

// Задание 179 №2
console.log('Результат задания 179 №2:');
data = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
		3: 'data33',
	},
];
for (let group of data) {
	for (let name in group) {
		console.log(group[name]);
	}
}

// Задание 179 №3
console.log('Результат задания 179 №3:');
let data3 = [
  {
    1: [
      'data111',
      'data112',
      'data113',
    ],
    2: [
      'data121',
      'data122',
      'data123',
    ],
  },
  {
    1: [
      'data211',
      'data212',
      'data213',
    ],
    2: [
      'data221',
      'data222',
      'data223',
    ],
  },
  {
    1: [
      'data411',
      'data412',
      'data413',
    ],
    2: [
      'data421',
      'data422',
      'data423',
    ],
  },
];
for (let i = 0; i < data3.length; i++) {
  let subObj = data[i]; 
  for (let key in subObj) {
    let items = subObj[key];
    console.log(items); 
  }
}

// Задание 180 №1
console.log('Результат задания 180 №1:');
let employees = [
  {
      name: 'name1',
      salary: 300,
  },
  {
      name: 'name2',
      salary: 400,
  },
  {
      name: 'name3',
      salary: 500,
  },
];

for (let employee of employees) {
  console.log(employee.name + ' ' + employee.salary);
}

// Задание 180 №2
console.log('Результат задания 180 №2:');
employees = [
  {
      name: 'name1',
      salary: 300,
  },
  {
      name: 'name2',
      salary: 400,
  },
  {
      name: 'name3',
      salary: 500,
  },
];
let sum = 0;
for (let employee of employees) {
  sum += employee.salary;
}
console.log(sum);

// Задание 180 №3
console.log('Результат задания 180 №3:');
employees = [
  {
      name: 'name1',
      salary: 300,
      age: 28,
  },
  {
      name: 'name2',
      salary: 400,
      age: 29,
  },
  {
      name: 'name3',
      salary: 500,
      age: 30,
  },
  {
      name: 'name4',
      salary: 600,
      age: 31,
  },
  {
      name: 'name5',
      salary: 700,
      age: 32,
  },
];
sum = 0;
for (let employee of employees) {
  if (employee.age >= 30) {
      sum += employee.salary;
  }
}
console.log(sum);

// Задание 181 №1
console.log('Результат задания 181 №1:');
let months = {
	'ru': [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
	'en': [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	],
};
let lang = 'ru'; // может быть или 'ru' или 'en'
let month = 5;   // число от 0 до 11
console.log(months[lang][month]);

// Задание 181 №2
console.log('Результат задания 181 №2:');
affairs = {
	'2018': {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	'2019': {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
}
let year = '2018'; // может быть или 'ru' или 'en'
month = 11;  
let day = 29;
let info = 2; // число от 0 до 11
console.log(affairs[year][month][day][info]);

// Задание 181 №3
console.log('Результат задания 181 №3:');
let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}
let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);

// Задание 181 №4
console.log('Результат задания 181 №4:');
obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}
key1 = 'key2';
key2 = 'key4';
console.log(obj[key1][key2]);

// Задание 181 №5
console.log('Результат задания 181 №5:');
obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}
key1 = 'key2';
key2 = 'key4';
console.log(obj[key1][key2]);

// Задание 181 №6
console.log('Результат задания 181 №6:');
obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}
key1 = 'key2';
key2 = 'key4';
console.log(obj[key1][key2]);

// Задание 182 №1
console.log('Результат задания 182 №1:');
let employees182 = [
	{
		name: 'kate',
		salary: 300,
		age: 28,
	},
	{
		name: 'ksenia',
		salary: 400,
		age: 29,
	},
	{
		name: 'andrew',
		salary: 500,
		age: 30,
	},
];
employees182.push({
	name: 'marlena',
	salary: 600,
	age: 31,
});
console.log(employees182[3])

// Задание 183 №1
console.log('Результат задания 183 №1:');
let affairs183 = {
  '2019-12-28': ['data11', 'data12', 'data13'],
  '2019-12-29': ['data21', 'data22', 'data23'],
  '2019-12-30': ['data31', 'data32', 'data33'],
};

affairs183['2019-12-29'].push('data24'); 
affairs183['2019-12-31'] = []; 
affairs183['2019-12-31'].push('data41', 'data42'); 

let students183 = {
  'group1': {
    'subgroup11': ['student111', 'student112', 'student113'],
    'subgroup12': ['student121', 'student122', 'student123'],
  },
  'group2': {
    'subgroup21': ['student211', 'student212', 'student213'],
    'subgroup22': ['student221', 'student222', 'student223'],
  },
  'group3': {
    'subgroup31': ['student311', 'student312', 'student313'],
    'subgroup32': ['student321', 'student322', 'student323'],
  },
};
students183['group1']['subgroup11'].push('student114'); 
students183['group1']['subgroup13'] = ['student131', 'student132']; 
students183['group4'] = {
  'subgroup41': ['student411', 'student412'], 
};
console.log(students183['group1']['subgroup12']);
console.log(students183['group2']['subgroup22']);
console.log(students183['group3']['subgroup32']);