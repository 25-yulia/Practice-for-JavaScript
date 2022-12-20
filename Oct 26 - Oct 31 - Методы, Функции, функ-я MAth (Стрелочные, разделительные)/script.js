'use strict';

//     *******************    OCTOBER 26      *******************

//  ******* МЕТОДЫ МАССИВОВ *******

/*
let js = ['нужно', 'учить', 'JavaScript'];
document.write(js + "<br>");


js.reverse(); //меняет порядок следования элементов в массиве на обратный
document.write(js + "<br>");


// Удаляем ТОЛЬКО по 1 элементу, а ДОбавлять можно сразу несколько

let a = js.pop();  // называем метод в переменную
document.write(a + "<br>"); 
document.write(js + "<br>");  //  POP удаляет последний!!! элемен из массива  и возвращает удаленный элемент
 
js.push("JavaScript", "!"); 
document.write(js + "<br>");  // PUSH добавляет элемент (или несколько элементов !) в конец массива

document.write(js.shift() + "<br>");  
document.write(js + "<br>");  //  удаляет ПЕРВЫЙ элемен из массива  и возвращает удаленный элемент

js.unshift("Почему", "Нужно");
document.write(js + "<br>"); // добавляем элемент в начало массива


// 1 параметр - с какого индекса мы начинаем удаление, 2 - сколько индексов нужно удалить
js.splice(0, 1); 
document.write(js + "<br>"); // метод удаляет из массива указанное число элементов, начиная с заданной позиции (0 - индекс, 1 - кол-во для удаления)

js.splice(0, 2, "Мы", "изучаем"); 
document.write(js + "<br>");

js.splice(2, 0, "сложный", "язык"); // здесь ничего не удаляем, а только добавляем
document.write(js + "<br>");

js.splice(-2, 0, "но", "очень", "интересный"); // -2 -это индекс с конца 
document.write(js + "<br>");

let st1 = js.join(" ");  // получаем элемент Строка (sting)
document.write(st1 + "<br>");

console.log(js);
console.log(st1);
*/

/*
//   Задача на создание ФИО 
let st = ["Фамиля", "Имя", "Отчество"];
let fio = new Array(3);

//Первый вариант
// for (let i=0; i < fio.length; i++){
//     fio[i] = prompt("Введите данные: \n" + st[i]);
// }
// console.log(fio); 

// Второй вариант
for (let i=0; i < fio.length; i++){
    fio[i] = prompt("Введите данные: \n", st[i]);
}
console.log(fio);

let st2 = fio.join(" ");
document.write(st2); */






//    *** ФУНКЦИИ *** (функцион.программирование и предметно-ориентированное)

// Function Declaration - функциональное программирование

/*
function имя (агрументы){
    тело функции;
}
 */

/*
function hello(firstName) { // аргументы
    alert("Hello, " + firstName + "!");
}
hello();    // вызываем фунцию на экран - Undefined

hello("Игорь");  // Игорь - это параметры
hello("Ирина"); // это параметр
*/

/*
function test(a, b, c){ // здесь важна последоват-ть аргументов
    alert(a + b + c);  //здесь неважна последов-ть
}

let n1 = 10, n2 = 20, n3 = 20, m1 = 5, m2 = 2, m3 = 3;
test(n1, n1, n3);
test(m1, m2, m3); */

/* 
function test(a, b, c){ 
   let res = a + b + c;  
   return res;
}

let n1 = 10, n2 = 20, n3 = 30;
// let q = test(n1, n2, n3); // let q = 60
//alert("Возвращаемое значение " + q*2);
alert("Возвращаемое значение " + test(n1, n2, n3));
*/

/*
let s = 0;
for (let i = 0, i< 5, i++) {
    let s = 5;
    // s += i;
    document.write(i + " ");
}
document.write("<br>s= " + s + " ");
*/

/*
let s = 1;
if(s < 5){
    let s = 5;
    // s += i;
    //document.write(i + " ");
}
document.write("<br>s= " + s + " ");
*/

/*
function test2(n, m){
    if(m == 0){
        return "На ноль делить нельзя!"; // return останавливаает применение функции, т.е. всё, что ниже return ничего не будет работать
    }
    //else{
        return n / m;
    //}
}

let a1 = test2(10, 2);
console.log(a1);

let a2 = test2(10, 0);
console.log(a2);
*/

// JS_4 Print Array
/*
function showArrayContent(arrayToShow) {
    if (arrayToShow.length == 1) {
        return arrayToShow;
    }
    else{
        let a = arrayToShow.pop();
        let st = arrayToShow.join(", ");
        let b = st + " и " + a;

        // arrayToShow.splice(-1, 0, " и ");
        // let b = arrayToShow.join(" ");

        return b;
    }
}

let a = new Array('Текст'); // a - разные переменные
let b = new Array('день', 'ночь');
let c = new Array('зима', 'весна', 'лето', 'осень');
alert(showArrayContent(a));
alert(showArrayContent(b));
alert(showArrayContent(c));
*/

//              Function Expression - функциональное выражение
/*
let func = function(аргументы){
    тело фунции;
}
 */

/*
function sum1(a, b) { //function declaration - Единственный универсальный способ создания функции
    return a + b;
}
console.log(sum1(2,3));


let sum2 = function (a, b) { // function expression
    return a + b;
}
console.log(sum2(2,3));
// если log поставим выше функции, тогда sum1 отработает, а sum2 - нет!
*/


// Задача на подпись КОПЕЕК от 1 до 99
/*
let kolKop = function (k) {
    let kop = k; //вспомогательная переменная
    if (k >= 0 && k <= 99) {
        if (kop >= 11 && kop <= 14) {
            alert(k + " копеек");
        }
        else {
            kop = kop % 10;
            if (kop == 1) {
                alert(k + " копейка");
            }
            else if (kop >= 2 && kop <= 4) { // if(kop == 2 || kop == 3 || kop == 4)
                alert(k + " копейки");
            }
            else {
                alert(k + " копеек");
            }
        }
    }
    else {
        alert("Вы ввели некорректное значения")
    }
}

let a = +prompt("Введите число от 1 до 99");
kolKop(a);
*/

// Oct 26 - ДЗ: 1 - массив с Вопросом и ответами, 1 - массив с правильными ответами, 1 - массив с баллами + придумать несгораемые суммы

//let answer = prompt("Ваш вопрос?\n\nA:Ответ\tB:Ответ\nC:Ответ\tD:Ответ");








// ********   OCTOBER 31    **********

// Immediately Invoked Function Expression (IIFE) - самовызывающаяся (АНОНИМНАЯ) функция
/*
(function(){
    alert("Привет, мир!")
}());   // ; () - Обязательны! / у функции нет имени

let a = (function(n){
    return n*n
});

alert(a(4));
*/


// *** Arrow function - Стрелочные функции
// 1. сначала делаем function declaration
/*
function test(a, b, c){
    let res = a + b + c;
    return res;
}
console.log(test(10, 20, 30));

// 2. а затем ее переделываем в стрелочную функцию - нужно ТОЛЬКО для КОРОТКИХ функций для упрощения кода, когда функция состоит из 1 строчки
let test2 = (a, b, c) => a + b + c;
console.log(test2(10, 20, 30));
// Обе (1 и 2) функции абсолютно одинаковы!

let test3 = (a, b, c) => {
    let res = a + b + c;
    return res;
}
console.log(test3(10, 20, 33));

// Еще одна варианция Стрелочной функции
let hello = n => alert("Hello " + n);

hello("Irina"); // Один принимаемый элемент можно писать без скобок
*/


// *******  Math  ******
/*
document.write(Math.round(7.9) + "<br>");
document.write(Math.floor(7.9) + "<br>"); // округление в меньшую сторону
document.write(Math.ceil(7.9) + "<br>");   // округление в верхнюю сторону
*/

/*
(function(){
    document.write(Math.random() + "<br>")   // Генерирует случайное число от 0 до 1 (НЕ включая 1)
}());


(function(min, max){
    document.write(Math.floor(Math.random() * (max-min)) + min + "<br>")
}(7,15));   // от 0 до 9 (не включая)

// т.е. max 9 мы не получим (т.к 9 - максимальное число) - от 0 до 9 невключительно
document.write(Math.floor(Math.random() * 9) + "<br>")

// от 2 до 9 (не включительно)
document.write(Math.floor(Math.random() * 7 + 2) + "<br>")

// от 7 до 15 (не включительно) - максимум может быть 14
document.write(Math.floor(Math.random() * 8 + 7) + "<br>")
*/


/*
let fn = function(words){
    // let b = Math.floor(Math.random() * words.length);
    // console.log(b);
    // return words[b];
    return words[Math.floor(Math.random() * words.length)]
}


let mas = ['Цикл', 'Массив', 'Условие', 'Функция'];
let a = fn(mas);
document.write(a);
*/

/*
// 1 ВАРИАНТ
document.write("<div id='block'></div>");  // создаем div
let id = document.getElementById('block');  // получаем доступ к div

id.style.width = '100px';   // применяем стили, когда получили доступ
id.style.height = '100px';
createColor();

function createColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    // id.style.background = 'rgb('+ r +', '+ g +' , '+ b +')';
    id.style.background = `rgb(${r}, ${g} , ${b})`;
}
*/

/*
// 2 ВАРИАНТ
document.write("<div id='block'></div>");
let id = document.getElementById('block');

id.style.width = '100px';
id.style.height = '100px';
id.style.background = 'rgb('+createColor()+', '+createColor()+', '+createColor()+')'

function createColor(){
    return Math.floor(Math.random() * 256);
}
*/


/*
// 1 Способ
function hello(name){
    name = name || "незнакомец"  // если парамент в name не будет назначен, то применится значение - undefined
    document.write("Привет, " + name + "!<br>");
}
hello("Сергей");
hello();

// 2й Способ - более новый
function hello(name ="незнакомец" ){ // задается значение "Незнакомец" на случай, если параметр не будет задан
    document.write("Привет, " + name + "!<br>");
}
hello("Сергей");
hello();    */


/*
function square(width=120, height=100, background='green'){
    document.write("<div id='shape'></div>");
    let sq = document.querySelector('#shape');

    sq.style.width = width + "px";
    sq.style.height = height + "px";
    sq.style.background = background;
}
square(200, 150, 'gold');
square(300, 50);
// square('red'); // цвет отрабатывать без ширины и высоты НЕ будет
*/


/*
function hello(){
    alert("Привет");
}
// hello();   сработает сама функция, т.е. alert
alert(hello); // возвращает сам текст функции, и функция не сработает
*/


/*
let st = "I\'m a JavaScript \"programmer\"";

document.write(st + "<br>");
document.write(st[2] + "<br>");
//st[2] = 'y';  не можем так сделать
st = st[2] + 'y'; // ТОЛЬКО таким образом можно передать другое значение - и мы ПЕРЕзаписали переменную st
document.write(st + "<br>");
*/

/*
let st = "I\'m a JavaScript \"programmer\"";
document.write(st.length + "<br>"); //пробельные символы учитываются
*/




//   ***  МЕТОДЫ СТРОК   ***
/*
let st = "I\'m a JavaScript \"programmer\"";
// let a = st.toUpperCase();
// document.write(a + "<br>");
document.write(st.toUpperCase() + "<br>");
document.write(st.toLowerCase() + "<br>");
*/


/*
// От пользователя требуется ввести и имя, а программа преобразовывает первую букву в Верхний регистр, а все остальные - в нижний.
let n = prompt("Введите имя", "юлия");
alert(first(n));

function first(str){
    let newStr = str[0].toUpperCase();
    for(let i=1; i<str.length; i++){
        newStr +=str[i].toLowerCase();
    }
    return newStr;
}
*/

/*
// Метод concat - объединяет строки
let st = "I\'m a JavaScript \"programmer\"";

let st2 = "Я учу JavaScript. Мне нравится JavaScript.";

st = st.concat(st2);
document.write(st + "<br>");
*/

/*
let st = "I\'m a JavaScript \"programmer\"";
// метод indexOf возвращает индекс, на котором находится подстрока. Иначе выводит значение "-1", если ничего не найдено
document.write(st.indexOf("JavaScript") + "<br>");
document.write(st.indexOf("JavaScript", 7) + "<br>");

// lastIndexOf - показывает последний индекс
document.write(st.lastIndexOf("JavaScript") + "<br>");
*/

/*
// от пользователя просят ввести элекр.почту, а хвост от адреса нужно проверить на корректность
let email;
do{
    email = prompt("Введите email:");
    if(email.indexOf("@")==-1){
        alert("Некорректный email. Повторите операцию.");
    }
    else{
        break;
    }
}while(true);
*/

/*
// Метод по разделению массива
let st = "I\'m a JavaScript \"programmer\"";

let st2 = "Я учу JavaScript. Мне нравится JavaScript.";
st = st.concat(st2);
document.write(st + "<br>");

document.write(st.split(".") + "<br>");
console.log(st);
// console.log(st.split('JavaScript')); // разделил по слову JavaScript
console.log(st.split(' '));
*/



//  *** NOVEMBER 2 ***

/*
let st = "I\'m a JavaScript \"programmer\"";
let st2 = "Я учу JavaScript. Мне нравится JavaScript.";
st = st.concat(st2);
document.write(st + "<br>");

document.write(st.slice(0, 3) + "<br>"); // возвращает подстроку, начиная с начальной позиции до конечной позиции, НЕ включая последнюю

document.write(st.slice(6) + "<br>"); 
document.write(st.slice(-23) + "<br>"); 

document.write(st.substring(0, 3) + "<br>"); // возвращает подстроку, начиная с начальной позиции до конечной позиции, НЕ включая последнюю

document.write(st.substring(-23) + "<br>");  // отрицательный индекс будет браться как значение 0

let a = st.split("JavaScript");
console.log(a);
document.write(a.join("C++"));
*/

/*
// Написать фун-ю, которая преобразует свойство стиль CSS в стиль JavaScr

let style = prompt("Введите свойство CSS", "background-color");
alert(def(style));


function def(str){
    let arr = str.split("-"); // arr = ['background', 'color']
    for(let i = 1; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join('');
}
*/

