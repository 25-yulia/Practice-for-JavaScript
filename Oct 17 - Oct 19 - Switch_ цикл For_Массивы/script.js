"use strict";

// Конструкция выбора - SWITCH
/* 
switch (условие){
    case значение_1;
        код;
        break;
    case значение_n;
        код;
        break;
    default:
        код;
}
*/

/* prompt - выдает только!!! строковое значение */
/*
let a = +prompt("Введите любое число:");
switch(a){    // a === 1 (строгое равество по Значению и Типу данных), т.е. в promp должно быть ЧИСЛО
    case 1: {
        alert("Код 1");
    } break;
    case 2: {
        alert("Код 2"); 
    }break;
      default:{  
        //обычно располагают в конце, но может в любом месте, только в этом случае вместе с break
        alert("Я таких значений не имею");
    } break;
    case 3: {
        alert("Код 3");
    } 
  
}   */

/*
let a = +prompt("Введите результат '2 + 2'");
switch(a){   
    case 4: 
        alert("Верно"); 
    break;
    case 3: 
    case 5: 
        alert("Не верно");
    break;
    default: 
        alert("Я таких значений не имею");
}
*/

/* let m = +prompt("Enter month");
let n = null;
// сначала тип данных Ноль, а потом можем перезаписать
switch (m) {
    case 1: n = "January"
        break;
    // команда с каждой новой строки (ЛИБО ставить ; на одной строке)
    case 2: n = "February"; break;
    case 3: n = "March"; break;
    case 4: n = "April"; break;
    case 5: n = "May"; break;
    case 6: n = "June"; break;
    case 7: n = "July"; break;
    case 8: n = "August"; break;
    case 9: n = "September"; break;
    case 10: n = "October"; break;
    case 11: n = "November"; break;
    case 12: n = "December"; break;
    default: n = "Wrong month number"
}
alert("You entered: " + n); */

/* IF - любое условие, SWITCH - ТОЛЬКО строгое равенство */


/* + - * / % */
/* let operator = prompt("Действие: +, -, *, /, %");
let num1 = parseInt(prompt("Введите первое число: ", 5));
let num2 = parseInt(prompt("Введите второе число: ", 2));

switch(operator){
    case "+":
        alert("Сумма: " + (num1 + num2));
        break;
    case "-":
        alert("Разница: " + (num1 - num2));
        break;
    case "*":
        alert("Умножение: " + num1 * num2);
        break;
    case "/":
        alert("Деление: " + num1 / num2);
        break;
    case "%":
        alert("Остаток от деления: " + num1 % num2);
        break;
    default:
        alert("Я таких значений не знаю")
} */

// document.write("<p>Текст выведен <u>в окно браузера</u></p>");
// document.write("<p><img src='Flamingo.jpg'></p>");


//       ЦИКЛЫ
// Цикл do ... while (цикл с постусловием)
/*
do{
    тело цикла;
} while (условие);
*/

/*
let i = 0; // переменная - счетчик 
do{
    document.write("Это номер: " + i + "<br>");
    i++; // i = i + 1
}while(i < 5); */

//итерация - это шаг цикла

/*
let i = 0;
do {
    document.write("Это номер: " + i + "<br>");
    i = i + 5;
} while (i < 25); 

let i = 25;
do {
    document.write("Это номер: " + i + "<br>");
    i = i - 5;
} while (i > 0);   */

/* 
let i = 1;
do {
    document.write("Квадрат " + i + " равен " + i**2 +  "<br>");
    i++;
} while (i < 8); */



// ******** WHILE - цикл с Предусловием

/*
while(условие){
    тело цикла;
}
*/

/*
let i = 0; 
while(i < 5){
    document.write("Это номер: " + i + "<br>");
    i++; 
}  */

// Написать программу, выводящую НЕчетные числа в диапазоне от 1 до 20 (Включительно)
/*
let i = 1; 
while(i <= 20){
    if(i % 2){  //i % 2 != 0 - для поиска НЕчетного числа (можно записать без ==)
         document.write(i + " ");
    }
    i++; 
}  */

// Написать программу, выводящую  числа в диапазоне от 1 до 30, за исключением чисел, кратным 3
// 1й вариант
/* 
let i = 1;
while (i <= 30) {
    if (i % 3 == 0) {
        i++;

    } else {
        document.write(i + " ");
        i++;
    }
}  */

// 2й вариант
// let i = 1;
// while (i <= 30) {
//     if (i % 3 != 0) {
//         document.write(i + " ");
//     }
//     i++;
// }


// Написать программу, вычисляющую сумму чисел в заданном диапазоне (Например: 5 и 10. Результат: 5+6+7+8+9+10=45). (JS_2 _ папка циклы)
/*
let start = 5;
let end = 10;
let sum = 0;

while(start <= end){
    document.write(start + " ");
    sum += start   //sum = sum + start;
    start++;
}
document.write("<br>" + sum);   */

/*
let start = +prompt("Введите начало диапазона");
let end = +prompt("Введите конец диапазона");
let sum = 0;

while(start <= end){
    sum += start   //sum = sum + start;
    start++;
}
document.write("<br>" + sum);  */

/*
let i = 3;
while(i){ // i > 0 | i != 0
    document.write(i + "<br>");
    i--;
}   */

// Бесконечный цикл
/* 
let a, res = 1;
do{
    a = +prompt("Введите число", 10);
    if(a==0){
        break;
    }
    res *= a;
}while(true); // true | a > 0 | a != 0
alert("Произведение введенных чисел: " + sum);  */

/* 
let i = 0;
do {
    if(i==3){
        i++;
        continue; // continue прерывает текущую ИТЕРАЦИЮ
    }
    if(i==6){
        break; // BREAK завершает цикл
    }
    document.write(i + " ");
    i++;
} while (i < 10); */

// ДЗ: Написать программу вычисляющую произведение нечетных чисел в диапазоне от 10 до 30

// ДЗ: Пользователь вводит с клавиатуры любое количество чисел (четные и нечетные). Найти их среднее арифметическое значение. Условие выхода 0.


/*************** OCTOBER 19 *********************/

/*  for(инициализация_самой_переменной; проверка_условия; изменение_счетчика){
    тело цикла;
} 
(считается циклом с заранее установленном количеством итераций) */

/*
for(let i = 1; i < 6; i++){
    document.write(i + " ");  
}      */

/*
for(let i = 1; i < 6; i++){
    if(i = 3){
        continue; // прекращает итерацию
    }
    if(i = 5){
        break;    // прекращает цикл
    }
    document.write(i + " ");
}  */


//  Вычислить сумму четных чисел и произведение нечетных чисел в заданном диапазоне:
/*
let start = +prompt("a = ");
let end = +prompt("b = ");
let sum = 0;
let p = 1;
for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
    else {
        p *= i;
    }
}
document.write("Сумма четных чисел в диапазоне от " + start + " до " + end + " = " + sum + "<br>");
document.write("Произведение нечетных чисел в диапазоне от " + start + " до " + end + " = " + p + "<br>"); 
*/

// вариация записи условия for
// let i = 1
// for (; ;) {
//     if(i == 6){
//         break;
//     }
//     document.write(i + " ");
//     i++;
// } 


// Разбить введенное число на отдельные цифры и вывести в обратном порядке. 12345

/*
let ch = 12345;
for(let i = 1;; i *= 10){ // i = 10 | 100 | 1000 | 10 000
    let res = parseInt(ch/i); // ch= 1.23.45  res=1234 res=123 res=12 res=1
    if(res==0){
        break;
    }
    // console.log(res%10);
    document.write(res%10);  5 | 4 | 3 | 2 | 1
}*/


/*
let ch = 102;
for(let i = 1;; i *= 10){ // i = 10 | 10.(2) | 1000 | 10 000
    let res = parseInt(ch/i); // ch= 1.02 res=0 
    if(res==0){
        break;
    }
    // console.log(res%10);
    document.write(res%10); // 2 0 1
} */

// НАйти  сумму, произведение и среднее арифметическое 102
/*
let ch = 102;
let sum = 0;
let num;
let p = 1;
let count = 0; // для подсчета кол-ва итераций

for (let i = 1;; i *=10){
    let res = parseInt(ch/i); 
    if(res==0){
        break;
    }
    // document.write(res%10);
    // sum += res%10;
    num = res%10;
    sum += num;
    p *= num;
    count++;
}
document.write("Сумма: " + sum + "<br>");
document.write("Произведение: " + p + "<br>");
document.write("Количество итераций: " + count + "<br>");
document.write("Среднее арифметическое: " + (sum/count).toFixed(2) + "<br>");
*/


// ************ ВЛОЖЕННЫЕ ЦИКЛЫ ************
/*
for(let i = 0; i < 4; i++){
    document.write("+++ <br>");
    for(let j = 0; j < 2;j++){
        document.write("-- <br>"); 
        // полностью отрабатываются все итерации вложенного цикла
    }
}
*/

/*
for(let i = 0; i < 4; i++){
    document.write(i + " <br>");
    for(let j = 0; j < 2; j++){
        document.write("&nbsp;&nbsp;&nbsp;&nbsp; => " + j + " <br>"); 
    }
}
*/

/*
<table border='1'>
    <tr>
        <td>*</td>
        <td>*</td>
        <td>*</td>
    </tr>
    <tr>
        <td>*</td>
        <td>*</td>
        <td>*</td>
    </tr>
</table>
 */

/* 
let symbol = prompt("Введите символ: ");
let tr = prompt("Введите кол-во строк: ");
let td = prompt("Введите кол-во ячеек");
document.write("<table border='1'>");
for (let i = 0; i < tr; i++) {
    document.write("<tr>");
    for(let j = 0; j < td; j++){
        document.write("<td>" + symbol + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
*/
/*
document.write("<table border='1' align='center' width='300' height='300'>");
for (let i = 1; i < 11; i++) {
    document.write("<tr align='center'>");
    for(let j = 1; j < 11; j++){
        if(i % 2==0){
            document.write("<td bgcolor='red'>" + i*j + "</td>"); 
        }
       else{
        document.write("<td bgcolor='yellow'>" + i*j + "</td>"); 
       }
    }
    document.write("</tr>");
}
document.write("</table>");
*/


// ************ РАБОТА С МАССИВАМИ **********
/* 
let arr = [2, 3, 6, 7, 8, 9];
console.log(arr);
document.write(arr[0]);  */

/*
let arr = [2, 3, 6, 7, 8, 9]; // массив на 6 элементов со значениями
let arr1 = [2]; // массив на 1 элемент со значением 2

let arr2 = new Array(2, 3, 6, 7, 8, 9);   // массив на 6 элементов со значениями (как у arr)
let arr3 = new Array (2); // массив на 2 элемента, НО Пустой

console.log(arr); 
console.log(arr1);
console.log(arr2);  
console.log(arr3);  
*/

/*
let arr = [2, 3, 6, 7, 8, 9];
document.write(arr + "<br>");
document.write(arr.length + "<br>");
arr.length = 3 // сейчас мы в массиве оставили только 3 элемента
document.write(arr + "<br>");
arr.length = 6
document.write(arr + "<br>");

arr.length = 0
document.write("Пустой массив " + arr + "<br>");
*/

// length = последний индекс массива +1
// последний индекс массива = length -1

//console.table(arr);

// Заменить все отрицательные значения элементов массива модулями
/*
let arr = [5, 9, -3, -1, 4, -8, 7, 4, -6];
for (let i=0; i<arr.length; i++){
    if(arr[i]<0){
        arr[i] = arr[i]*(-1);
    }
    document.write(arr[i] + "<br>");
    
}  */

// Посчитать сумму всех отрицательных элементов в массиве
/*
let arr = [5, 9, -3, -1, 4, -8, 7, 4, -6];
let sum = 0;
for (let i=0; i<arr.length; i++){
    if(arr[i]<0){
        sum += arr[i];
        // document.write(arr[i] + "<br>");
    }
    
}
document.write(sum + "<br>");   */

/*
let mas = new Array();
// let mas = [];
mas[0] = 15;
mas[1] = 6;
mas[2] = 9;
mas[6] = 10;

document.write(mas + "<br>");
console.log(mas);    */

// Заполните массив и выводить в обратном порядке
/*
let mas = new Array(5);
for(let i=0; i<mas.length; i++){
    mas[i] = prompt("Введите " + (i+1) + " элемент массива:")
}
document.write(mas + "<br>");

for(let i=mas.length - 1; i >= 0; i--){
   document.write(mas[i] + " ");
}
*/

/*
document.write("<table border='1' align='center' width='300' height='300'>");
    for (let i = 1; i < 11; i++) {
        document.write("<tr align='center'>");
        for (let j = 1; j < 11; j++) {
            if (i % 2 == 0 && j % 2 == 0) {
                document.write("<td bgcolor='red'>" + i * j + "</td>");
            }
            else if (i % 2 != 0 && j % 2 != 0) {
                document.write("<td bgcolor='red'>" + i * j + "</td>");
            }
            else {
                document.write("<td bgcolor='yellow'>" + i * j + "</td>");
            }

        }
        document.write("</tr>");
}
document.write("</table>");  */

/* 
document.write("<table border='1' align='center' width='300' height='300'>");

for (let i = 0; i < 11; i++) {
    document.write("<tr align='center'>");
    for (let j = 0; j < 11; j++) {
        if (i == 0) {
            document.write("<td bgcolor='white''>" + j + "</td>");  
        }
        else if(j == 0){
            document.write("<td bgcolor='white''>" + i + "</td>");  
        }
        else if (i % 2 == 0 && j % 2 == 0) {
            document.write("<td bgcolor='red'>" + i * j + "</td>");
        }
        else if (i % 2 != 0 && j % 2 != 0) {
            document.write("<td bgcolor='red'>" + i * j + "</td>");
        }
        else {
            document.write("<td bgcolor='yellow'>" + i * j + "</td>");
        }
    }
    document.write("</tr>");
}

document.write("</table>"); */

// another option # 1: (i+j)%2 == 0 => red {else: yellow}
// another option # 2: (i%2 == j%2) => red {else: yellow}
// another option # 3: => (i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0) : red {else: yellow}

/*
document.write("<table border='1' align='center' width='300' height='300'>");
document.write("<tr align='center'>");
for (let j = 0; j < 11; j++) {
    document.write("<th>" + j + "</th>");
}


    for (let i = 0; i < 11; i++) {
        document.write("<tr align='center'>");
        document.write("<th>" + i + "</th>");
        for (let j = 0; j < 11; j++) {
            if (i == 0) {
                document.write("<td bgcolor='white''>" + j + "</td>");
            }
            else if (j == 0) {
                document.write("<td bgcolor='white''>" + i + "</td>");
            }
            else if (i % 2 == 0 && j % 2 == 0) {
                document.write("<td bgcolor='red'>" + i * j + "</td>");
            }
            else if (i % 2 != 0 && j % 2 != 0) {
                document.write("<td bgcolor='red'>" + i * j + "</td>");
            }
            else {
                document.write("<td bgcolor='yellow'>" + i * j + "</td>");
            }
        }
        document.write("</tr>");
    }

    document.write("</table>"); */
