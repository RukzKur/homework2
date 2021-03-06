//Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.
console.log([19, 4, 9, 0, 64, 36, 1].reduce((acc, cur) => acc + Math.sqrt(cur) * !(cur % 2), 0));
//Яблоко стоит 1.15, апельсин стоит 2.30. Сколько они стоят вместе – чему равна сумма 1.15 + 2.30 с точки зрения JavaScript?
let appel = "1.15";
let orang = "2.30";
console.log(+appel + orang++);
//Треугольник. Напишите цикл,  выводит такой треугольник:
for (let string = "*"; string.length < 8; string += "*")
    console.log(string);
//Напишите скрипт, который считает количество секунд в часе
console.log(60 * 60);
//Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.
/*let name = prompt('Ваше имя: ');
alert('Ваше имя: ');*/
/*Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a',
символ 'c', символ 'e'.*/
let str = "abcde";
console.log(str[0]);
console.log(str[2]);
console.log(str[4]);
// Создайте ассоциативный массив (объект) заработных плат obj. Выведите на экран зарплату Пети и Коли.
var obj = { 'Коля': '1000', 'Вася': '500', 'Петя': '200' };
console.log(obj['Коля']);
console.log(obj['Петя']);
/*Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый.
 Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной. */
let arr = [2, 5, 3, 9];
let result = arr[0] * arr[1] + arr[2] * arr[3];
console.log(result);
//Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4из этого массива. 
let arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(arr1[1][0]);
//В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
/*let min = +prompt("Введите число от 0 до 59");
if ((min >= 0) && (min <= 14)) { console.log('1'); }
if ((min >= 15) && (min <= 30)) { console.log('2'); }
if ((min >= 31) && (min <= 45)) { console.log('3'); }
if ((min >= 46) && (min <= 59)) { console.log('4'); }*/
//Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при  a, равном 1, 0, -3.
let arr2 = [1, 0, -3];
for (let i = 0; i < arr2.length; i++) {
    let a = arr2[i];
    if (a < 0) console.log("Верно");
    else console.log("Неверно");
}
/*Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. 
Проверьте работу скрипта при  test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной */
let test = true;
if (test == true) { console.log('Верно!'); } else { console.log('Неверно!'); }
// Сокращенный вариант
let test1 = true;
if (test1) console.log('Верно');
else console.log('Неверно!');
/*Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1',
 то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.*/
let num = 2;
switch (num) {
    case 1:
        console.log("Зима");
        break;
    case 2:
        console.log("Весна");
        break;
    case 3:
        console.log("Лето");
        break;
    case 4:
        console.log("Осень");
        break;
}
//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла forвыведите все эти элементы на экран
let arr3 = [1, 2, 3, 4, 5];

for (let elem of arr3) {
    console.log(elem);
}
//Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
let a = 10;
let b = 3;
console.log(a % b);
//Возведите 2 в 10 степень. Результат запишите в переменную st
let c = 2,
    st;
st = Math.pow(c, 10);
console.log(st);
//Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
let sqr = Math.sqrt(379);
console.log(Math.round(sqr));
console.log(sqr.toFixed(1));
console.log(sqr.toFixed(2));
//Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
//Выведите на экран случайное целое число от 1 до 100
console.log(Math.floor(Math.random() * 100) + 1);
// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
let strABC = "aaa bbb ccc";
console.log(strABC.substr(4, 3));
console.log(strABC.substring(4, 7));
console.log(strABC.slice(4, 7));
//Дана строка 'js'. Сделайте из нее строку 'JS'
let strjs = 'js';
console.log(strjs.toUpperCase());
//Дана строка 'я учу javascript!'. Найдите количество символов в этой строке
let str5 = 'я учу javascript!';
let count = str5.length;
console.log(count);
//Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'
console.log(str5.indexOf('учу'));
//Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
let str6 = 'Я-учу-javascript!';
console.log(str6.replace(/-/g, '!'));
//Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
let str7 = 'я учу javascript!';
console.log(str7.split(''));
//Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
let arr9 = ['я', 'учу', 'javascript', '!'];
let str9 = arr9.join('+');
console.log(str9);
//Преобразуйте первую букву строки в верхний регистр.
console.log(str7[0].toUpperCase());