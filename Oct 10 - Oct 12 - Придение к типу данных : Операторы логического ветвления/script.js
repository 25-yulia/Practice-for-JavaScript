// console.log("Третий скрипт");

/*  Блочный комментарий*/

/* let - Объявление переменной */

// let message; // let, const, var
// message = "Hello";
// console.log(message); //инициализация переменной 1 способ - здесь для текстового значения в кавычках 

//let a = 10; инициализация переменной 2 способ - присвоение переменной первоначального значения | числовому значению не дают кавычки
// a = 3.5;
// console.log(a);


// let b, c;
// b = "Строка"; 

// const week = 7;

// let a = 10;
// console.log(a);
// console.log(typeof a); // проверяем ТИП данных
// console.log(typeof (a));

// a = 3.5;
// console.log(a);
// console.log(typeof a);

// let str1 = "Двойные кавычки";
// let str2 = 'Одинарные кавычки';
// let str3 = `Обратные кавычки ${str1} ${3+2} 3+2 = ${3+2}`;

// console.log(str1);
// console.log(str2);
// console.log(str3);

// console.log(typeof str1); //string - Текстовое (строковое) значение 

// let firstName = "Sergey";
// alert(`Hello, ${firstName}`);

// let days = 365;
// let planet = "Земля";
// let pop = "7 млрд.";
// let sun = "Солнца";
// alert(`Мы живем на планете ${planet} она делает один оборот вокруг ${sun} за ${days} дней. Население нашей планеты составляет примерно ${pop} человек`)


// boolean - ЛОГИЧЕСКИЙ ТИП ДАННЫХ
// let a = true;
// console.log(a);
// let b = false;
// console.log(b);
// console.log(typeof (b));

// let res = confirm("Знаете HTML?")
// // alert(res);
// if(res){
//     alert("Пора учить JavaScript!")
// }
// else{
//     alert("Нужно выучить!")
// }


/* ТИПЫ ДАННЫХ:
(примитивные/ простые типы данных)
Number
String
Boolean
Undefined
Null

Object (сложные типы данных)
*/

// let res;
// alert(res); // undefined

// let res = null;
// alert(res);
// alert(typeof(res));
// res = 5;
// alert(res);

// let firstName = prompt("Ваше имя:","Ольга" );
// // console.log(firstName);
// alert(`Добро пожаловать на сайт, ${firstName}. На сайте много интересного`);

// let a = 12;
// let b = 2;

// console.log('+:', a + b);
// console.log('-:', a - b);
// console.log('*:', a * b);
// console.log('/:', a / b);
// console.log('%:', a % b);  (возвращает остаток от деления)
// console.log('**:', a ** b);

// let st1 = "Hello";
// let st2 = "World";
//  console.log(st1 + " " + st2); // Конкатенация строк (объединение)

//  let c = "23";
//  let d = 6;
// console.log(c + d);  //  236

/*let login = prompt("Login", "admin");
let password = prompt("Password", "123456");   
alert("***Данные для входа***\nВаш логин: " + login + "\nВаш пароль: " + password);  */

// let st = "Инструкция:\nДокумент \"script.js\" Файлы лежат \rв папке D:\\programs\\script.js";
// alert(st);
// Обратный слеш отменяет действие кавычек - экранирование кавычек

// ************ OCTOBER 12 ****************

"use strict"; 
// alert("6" + 2);

// let a = parseInt(prompt("Введите первое число: "));
// let b = +prompt("Введите второе число: ");
// // console.log(typeof (a));
// // a = parseInt(a);
// // b = +b;  (1й вариант)
// alert("Сумма: " + (a + b));   //  (2й вариант)

/* Приведение к типу данных */

// console.log(parseInt("21.84"));
// console.log(parseFloat("21.84")); 
// parseInt (отбрасывает дробную часть)
// + НЕ отбрасывает дробную часть
// console.log(parseFloat("21.84123").toFixed(2));
// console.log(Number("21.84"));
// console.log(+"21.84"); // +1 * 21.84
// console.log(-1*"21.84");// -1 * 21.84
// console.log(+true);
// console.log(+false);

// let a = prompt("Введите число: ");
// alert("Квадрат числа: " + a ** 2 + "\nКуб числа: " + a ** 3 + "\n4я степень числа: " + a ** 4);

// Задание 1, папка JS_1
// let num = +prompt("Введите пятизначное число: ", 39761);
// let n = num;
// let a, b, c, d, e;
// a = num % 10; // 5
// console.log(a);
// num = parseInt(num / 10); //1234
// // console.log(num);
// b = num % 10; // 4
// console.log(b);
// num = parseInt(num / 10); //123
// c = num % 10;
// console.log(c);
// num = parseInt(num / 10);
// d = num % 10;
// console.log(d);
// num = parseInt(num / 10);
// e = num % 10;
// console.log(e);

// let proizv = a * b * c * d * e;
// alert("Произведение цифр" + n + ": " + proizv + "\nСреднее арифметическое: " + (a + b + c + d + e) / 5);

// УНАРНЫЕ ОПЕРАНДЫ
// let a = 0, b = 0;
// ++a; //  a = a +(-) 1 - Оператор инкремента - ПРЕфиксная форма
// console.log(a);
// b++;
//  console.log(b); //ПОСТфиксная форма - сначала сохраняет значение переменной, а ТОЛЬКО потом делается инкремент!!!

// let a = 0, b = 0;
// let c = a++ +2;
// let d = ++b;
// console.log(a); // 1
// console.log(b); // 1
// console.log(c); // 0 - сначала произошло присвоение переменной C, а только затем инкремента
// console.log(d); // 1

// let a = 1;
// let b = a++;
// let c = b + 5 + a; // 1 + 5 + 2
// console.log(c); // 8

// let a = 1;
// let b = ++a;
// let c = b + 5 + a; // 2 + 5 + 2
// console.log(c); // 9

// let sum = +prompt("Введите первое число: ", 5);
// console.log(sum);
// sum += +prompt("Введите 2 число: ", 4);
// // sum =  sum + +prompt("Введите 2 число: ", 4);
// console.log(sum);
// sum += +prompt("Введите 3 число: ", 6);
// console.log(sum);

// let st = "Строка";
// st += " Добавленная строка";
// console.log(st);

// ************ БИНАРНЫЕ ОПЕРАТОРЫ ********
// console.log(5 > 3);
// console.log(5 < 3);
// console.log(5 >= 5);
// console.log(5 <= 3);
// console.log(5 == '5');
// console.log(5 != 3);
// console.log(5 === '5');
// console.log(5 !== '5');

// ************ ТЕРНАРНЫЕ ОПЕРАТОРЫ ********
// 3 > 7 ?  alert("7") : alert("3");
// 7 > 3 ?  alert("7") : alert("3");

// let ch = +prompt("Угадайте число от 0 до 10");
// // ch = 7 ? alert("Угадали!") : alert("Не угадали!");
// let num = 7;
// ch == num ? alert("Угадали!") :(ch < num ? alert("Загаданное число больше!") : alert("Загаданное число меньше!"));

// ********* ОПЕРАТОРЫ ЛОГИЧЕСКОГО ВЕТВЛЕНИЯ *******
/*
if(условие) {
    истина True
}
else {
    ложь false
}
*/

// if(7 > 3) {
//     alert("7");
// }
// else {
//     alert("3");
// }

// alert(+true); // 1

// FALSE - 0, false, "" (пустые кавычки), null, undefined, NaN

// if("строка"){
//     alert(true);
// }

// let a = 12;
// let b = 6;
// if(b != 0){
//     let res = a/b;
//     alert("Результат: " + res);
// }
// else{
//     alert("Делить на 0 нельзя!");
// }

// let a = 12;
// let b = 2;
// if(a > b){
//     alert(a + ">" + b);
// }
// if(a < b){
//     alert(a + "<" + b);
// }
// if(a == b){
//     alert(a + "==" + b);
// }


// let d = prompt("Введите день недели (цифрами): ");
// if( d == 1){
//     alert("День недели - понедельник");
// }
// else if( d == 2){
//     alert("День недели - вторник");
// }
// else if( d == 3){
//     alert("День недели - среда");
// }
// else if( d == 4){
//     alert("День недели - четверг");
// }
// else if( d == 5){
//     alert("День недели - пятница");
// }
// else if( d == 6){
//     alert("День недели - суббота");
// }
// else if( d == 7){
//     alert("День недели - воскресенье");
// }
// else{
//     alert("Неверно");
// }


// if(5 == 5 && 5 > 3){
//     console.log("True");
// }
// else{
//     console.log("False");
// }

// let age = prompt("Введите возраст: ");
// if(age > 18 && age < 70){
//     alert("Вы можете получать права");
// }
// else{
//     alert("Права не давать")
// }

let age = prompt("Введите возраст: ");
if(age < 18 || age > 69){
    alert("Права не давать")
}
else{
    alert("Вы можете получать права");
}