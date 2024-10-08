// Задание 168 №1
console.log('Результат задания 168 №1:');
let arr168_1 = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log( arr168_1[3][2]) 
console.log( arr168_1[1][1]) 
console.log( arr168_1[2][0]) 
console.log( arr168_1[0][0]) 

// Задание 168 №2
console.log('Результат задания 168 №2:');
let arr168_2 = [[1, 2], [3, 4], [5, 6]];
let sum168_2 = arr168_2[0][0] + arr168_2[0][1] + arr168_2[1][0] + arr168_2[1][1] + arr168_2[2][0] + arr168_2[2][1];
console.log(sum168_2);

// Задание 169 №1
console.log('Результат задания 169 №1:');
let arr169 = [
  [
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
let sum169 = arr169[0][0][0] + arr169[0][0][1] + arr169[0][1][0] + arr169[0][1][1] + arr169[1][0][0] + arr169[1][0][1] + arr169[1][1][0] + arr169[1][1][1];
console.log(sum169);

// Задание 170 №1
console.log('Результат задания 170 №1:');
let arr170 = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
let sum170 = arr170[0][0] + arr170[0][1] + arr170[0][2] + arr170[0][3][0] + arr170[0][3][1] + arr170[0][3][2][0] + arr170[0][3][2][1] + arr170[1][0] + arr170[1][1][0] + arr170[1][1][1];
console.log(sum170);

// Задание 171 №1
console.log('Результат задания 171 №1:');
let arr171_1 = [[1, 2, 3], [4, 5], [6]];
let sum171_1 = 0;
for (let subArr171_1 of arr171_1) {
	for (let elem171_1 of subArr171_1) {
        sum171_1 += elem171_1;
	}
}
console.log(sum171_1);

// Задание 171 №2
console.log('Результат задания 171 №2:');
let arr171_2 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum171_2 = 0;
for (let subArr171_2 of arr171_2) {
	for (let elem171_2 of subArr171_2) {
        for (let elem171_3 of elem171_2)
        sum171_2 += elem171_3;
	}
}
console.log(sum171_2);

// Задание 172 №1
console.log('Результат задания 172 №1:');
let arr172_1 = [[1, 2, 3], [4, 5], [6]];
let sum172_1 = 0;
for (let i = 0; i < arr172_1.length; i++) {
  for (let j = 0; j < arr172_1[i].length; j++) {
    sum172_1 += arr172_1[i][j];
  }
}
console.log(sum172_1);

// Задание 172 №2
console.log('Результат задания 172 №2:');
let arr172_2 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum172_2 = 0;
for (let i = 0; i < arr172_2.length; i++) {
  for (let j = 0; j < arr172_2[i].length; j++) {
    for (let k = 0; k < arr172_2[i][j].length; k++) {
      sum172_2 += arr172_2[i][j][k];
    }
  }
}
console.log(sum172_2);

// Задание 173 №1
console.log('Результат задания 173 №1:');
let arr173_1 = [];
for (let i = 0; i < 3; i++) {
  arr173_1[i] = []; 
  for (let j = 1; j <= 5; j++) {
    arr173_1[i].push(j); 
  }
}
console.log(arr173_1);

// Задание 173 №2
console.log('Результат задания 173 №2:');
let arr173_2 = [];
for (let i = 0; i < 3; i++) {
  arr173_2[i] = [];
  for (let j = 0; j < 4; j++) {
    arr173_2[i].push('x');
  }
}
console.log(arr173_2);

// Задание 173 №3
console.log('Результат задания 173 №3:');
let arr173_3 = [];
for (let i = 0; i < 3; i++) {
  arr173_3[i] = []; 
  for (let j = 0; j < 2; j++) {
    arr173_3[i][j] = []; 
    for (let k = 1; k <= 5; k++) {
      arr173_3[i][j].push(k); 
    }
  }
}
console.log(arr173_3);

// Задание 174 №1
console.log('Результат задания 174 №1:');
let arr174_1 = [];
for (let i = 0; i < 3; i++) {
    arr174_1[i] = []
	for (let j = 1; j <= 5; j++) {
		arr174_1[i].push(j);
	}
}
console.log(arr174_1);

// Задание 174 №2
console.log('Результат задания 174 №2:');
let arr174_2 = [];
for (let i = 0; i < 3; i++) {
	arr174_2[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr174_2[i].push(j);
	}
}
console.log(arr174_2);

// Задание 174 №3
console.log('Результат задания 174 №3:');
let arr174_3 = [];
for (let i = 0; i < 3; i++) {
	arr174_3[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr174_3[i].push(j);
	}
}
console.log(arr174_3);

// Задание 174 №4
console.log('Результат задания 174 №4:');
let arr174_4 = [];
for (let i = 0; i < 3; i++) {
	arr174_4[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr174_4[i].push(j);
	}
}
console.log(arr174_4);

// Задание 174 №5
console.log('Результат задания 174 №5:');
let arr174_5 = [];
for (let i = 0; i < 3; i++) {
	arr174_5[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr174_5[i].push(j);
	}
}
console.log(arr174_5);

// Задание 174 №6
console.log('Результат задания 174 №6:');
let arr174_6 = [];
for (let i = 0; i < 3; i++) {
	arr174_6[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr174_6[i].push(j);
	}
}
console.log(arr174_6);

// Задание 175 №1
console.log('Результат задания 175 №1:');
let arr175_1 = [];
for (let i = 0; i < 4; i++) {
  arr175_1[i] = [];
  for (let j = 0; j < 2; j++) {
    arr175_1[i][j] = i * 2 + j + 1;
  }
}
console.log(arr175_1);

// Задание 175 №2
console.log('Результат задания 175 №2:');
let arr175_2 = [];
for (let i = 0; i < 4; i++) {
  arr175_2[i] = [];
  for (let j = 0; j < 3; j++) {
    arr175_2[i][j] = (i * 3 + j + 1) * 2;
  }
}
console.log(arr175_2);

// Задание 175 №3
console.log('Результат задания 175 №3:');
let arr175_3 = [];
let k = 1;
for (let i = 0; i < 2; i++) {
  arr175_3[i] = [];
  for (let j = 0; j < 2; j++) {
    arr175_3[i][j] = [];
    for (let l = 0; l < 2; l++) {
      arr175_3[i][j][l] = k++;
    }
  }
}
console.log(arr175_3);

// Задание 175 №4
console.log('Результат задания 175 №4:');
let arr175_4 = [];
let k4 = 1;
for (let i = 0; i < 3; i++) {
  arr175_4[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_4[i][j] = k4;
    k4++;
  }
}
console.log(arr175_4);

// Задание 175 №5
console.log('Результат задания 175 №5:');
let arr175_5 = [];
let k5 = 1;
for (let i = 0; i < 3; i++) {
  arr175_5[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_5[i][j] = k5;
    k5++; 
  }
}
console.log(arr175_5);

// Задание 175 №6
console.log('Результат задания 175 №6:');
let arr175_6 = [];
let k6 = 1;
for (let i = 0; i < 3; i++) {
  arr175_6[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_6[i][j] = k6;
    k6++; 
  }
}
console.log(arr175_6);

// Задание 175 №7
let arr175_7 = [];
let k7 = 1; // Инициализация переменной k
for (let i = 0; i < 3; i++) {
  arr175_7[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_7[i][j] = k7;
    k7++;
  }
}
console.log(arr175_7);

// Задание 175 №8
console.log('Результат задания 175 №8:');
let arr175_8 = [];
for (let i = 0, k8 = 1; i < 3; i++) {
  arr175_8[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_8[i][j] = k8;
    k8++; 
  }
}
console.log(arr175_8);

// Задание 175 №9
console.log('Результат задания 175 №9:');
let arr175_9 = [];
for (let i = 0, k9 = 1; i < 3; i++) {
  arr175_9[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_9[i][j] = k9;
    k9++; // Увеличение k
  }
}
console.log(arr175_9);

// Задание 175 №10
console.log('Результат задания 175 №10:');
let arr175_10 = [];
for (let i = 0, k10 = 1; i < 3; i++) {
  arr175_10[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_10[i][j] = k10;
    k10++; // Увеличение k
  }
}
console.log(arr175_10);

// Задание 175 №11
console.log('Результат задания 175 №11:');
let arr175_11 = [];
for (let i = 0, k11 = 1; i < 3; i++) {
  arr175_11[i] = [];
  for (let j = 0; j < 3; j++) {
    arr175_11[i][j] = k11++;
  }
}
console.log(arr175_11);

// Задание 175 №12
console.log('Результат задания 175 №12:');
let arr175_12 = [];
let k12 = 1;

for (let i = 0; i < 3; i++) {
  arr175_12[i] = []; // Исправлено на arr[i]
  
  for (let j = 0; j < 3; j++) {
    arr175_12[i][j] = k12;
    k12++;
  }
}
console.log(arr175_12);

// Задание 175 №13
console.log('Результат задания 175 №13:');
let arr175_13 = [];
for (let i = 0, k13 = 1; i < 3; i++) {
  arr175_13[i] = [];
  
  for (let j = 0; j < 3; j++, k13++) { // Добавлено условие для j и увеличение k
    arr175_13[i][j] = k13;
  }
}
console.log(arr175_13);

