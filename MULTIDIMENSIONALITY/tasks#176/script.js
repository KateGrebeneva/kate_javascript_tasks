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
data = [
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
subObj = 0,
obj = 0;
for ( let key in data ) {
subObj = data[key];
for ( let subKey in subObj ) {
obj = subObj[subKey]; 
console.log(obj)
}
} 

