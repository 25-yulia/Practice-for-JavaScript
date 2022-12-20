'use strict';

//                NOVEMBER 2

// ********           СОБЫТИЯ             **********

/*
// вызываем функцию в body (index.html)
function loadStr(){
    alert("Страница была загружена");
}
*/

/*
let m = document.getElementById("mes");

function over(){
    m.style.color = 'red';
}

function out(){
    m.style.color = 'green';
}
*/

/*
function change(){
    let id = document.getElementById("h");
    id.style.color = 'orange';
}
*/


/* 
// <img>
// star  - звезда (фон меняет цвет при наведении мышью). Зебра - меняется день-ночь при нажатии и отпуске
function randomBg(){
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);

    document.body.style.background = "rgb(" + r +", " + g + ", "+ b +")";
}

// day & night
let newImg = document.getElementById("newImg");
function on(){
    newImg.src = 'night.png';
}

function off(){
    newImg.src = 'day.png';
}
*/

/*
function change(id){ // присваиваем аргументу любое имя (в нашем случае id) - делается это для того, чтобы не получать доступ к элементу
    id.innerHTML = 'Новый текст';
}
*/

/*
// <a> - Стили css по названию класса
function setColor(color){
    document.body.style.background = color.className;
}
*/

/*
// <p>  1й вариант
let q = document.getElementById("but");

q.onclick = function(){
    alert("Спасибо")
}

// Это 2й вариант, прямой доступ через id
// but.onclick = function(){
//     alert("Спасибо")
// }

// Это 3й вариант
function hello(){
    alert("Спасибо")
}
but.onclick = hello; // БЕЗ () круглых скобок 
*/

/*
// <div> 1.Пример выполнения СЛУШАТЕЛЯ события (работает БЕЗ приставки on)
let el = document.querySelector('#elem');

el.addEventListener('click', function(){
    el.innerHTML = "Новый текст";
});  // Отработка левой кнопкой мыши - меняется только текст

el.addEventListener("contextmenu", function(){
    el.style.color = 'red';
    el.style.background = 'yellow';
})  // Отработка правой кнопкой мыши - меняется цвет
*/

/*
// <div> 2.
let c = document.querySelector("#ev");  

document.addEventListener('mousemove', function (event) {
    let x = event.clientX;
    let y = event.clientY;
    c.textContent = "X = " + x + ", Y = " + y;

    c.addEventListener('dblclick', function (event) {
        // event.target.style.background = 'red';
    }); 
             // т.е. мы обращаемся к объекту document (также с - это тоже объект, )
});
*/

/*
// событие можно отменять
//  <button>
let input = document.querySelector('#but');
input.addEventListener('click', handle); // добавляем само событие к созданной переменной

function handle(){
    alert("Thank you!");
    input.removeEventListener('click', handle);  // отменяет событие после того, как один раз событие осуществилось
}
*/

/*
//   setTimeout(функция, задержка); 

// setTimeout("alert('Текст')", 3000); // 1й вариант

setTimeout(hello, 3000);  // 2й вариант

function hello(){
    alert('Текст');
}
*/

/*
//  АНИМИРОВАННЫЙ ТЕКСТ
document.write("<div id='dt'>Создание анимированного текста</div>");

let text = document.querySelector('#dt').innerHTML; // получаем доступ к самому ТЕКСТУ и с помощью innerHTML выводим ТОЛЬКО текст
// console.log(text);
let i = 0; // счетчик - будет идти по буквам (по индексам)

window.addEventListener('load', animText);  // вызов события ОКНА

function animText(){
    let tag = document.querySelector('#dt') // получаем доступ ТОЛЬКО к самому div
    // console.log(tag);
    tag.innerHTML = text.substring(0, i);  // from index 0 till index 1...
    i++;
    if(i > text.length){
        i = 0;  // зацикливаем анимацию, чтобы она стала бесконечной
    }
    setTimeout(animText, 200);  // в данном случае идет рекурсия - функция заново начинается после 100 миллисекунд
}
*/




// ********************      NOVEMBER 7         *****************

// Объект - Date()
/*
let d = new Date();
document.write(d + "<br>");
document.write(d.toDateString() + "<br>"); // возвращает только текущую дату без времени
document.write(d.getFullYear() + "<br>"); // 2022
document.write(d.getMonth() + "<br>");  // 10 месяц (но это неверно, т.к. начинается с 0) - следовательно, декабрь - 11 (от 0 до 11)
document.write(d.getMonth() + 1 + "<br>"); //  ноябрь
document.write(d.getDate() + "<br>"); // 7
document.write(d.getDay() + "<br>"); // от 0 до 6 ( 0 - воскресенье, 6 - суббота)
*/

//   Сегодня: 7 ноября 2022, Понедельник
/*
let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря' ]; 
let mas = ['Воскресенье','Понедельник' , 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let d = new Date();
let fullDate = "Сегодня: " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear() + "," + mas[d.getDay()];
document.write(fullDate);
*/

/*
//  setInterval(Имя Функции, интервал) - будет постоянно! повторяться через заданный промежуток времени (в отличие от setTimeOut) с ЗАДЕРЖКОЙ

document.write("<input type='button' value='Start/Stop'>");
document.querySelector('input').addEventListener('click', st);

let act, flag = false;
function st() {
    if (!flag) {
        act = setInterval(setColor, 1000);
    }
    else {  
        clearInterval(act);  // отменяется повторение
    }
    flag = !flag;   // true => false => true и т.д.

// console.log(act); // видим, что в setInterval хранится именно число, которое требуется в clearInterval
}

function setColor() {
    let x = document.body;
    x.style.background = x.style.background == "yellow" ? "orange" : "yellow";
}
*/

/*
document.write("<div id='text'>Здесь будет отображаться текущее время</div>");

window.addEventListener('load', () => setInterval(time, 1000));

function time(){
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    if(sec<10){
        sec = "0" + sec;
    }

    let tim = hour + ":" + min + ":" + sec;
    document.querySelector('#text').innerHTML = tim;
}
*/

/*
// смотрим из HTML разметки + style : надо зеленый квадрат перемещать по желтому

let a = document.querySelector('#cl');
a.addEventListener('click', myMove);


function myMove() {
    let elem = document.getElementById('animate');
    let pos = 0;
    let id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        }
        else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }

    }

}
*/


// Обращение нарпямую по атрибуту (в данном случае - name)
/*
document.image.border = 1;  // border - атрибут
document.write("<br>Ширина изображения: " + document.image.width + "px");
document.write("<br>Высота изображения: " + document.image.height + "px<br>");

document.image.width = 200;
document.image.height = 50;
document.write("<br>Ширина изображения: " + document.image.width + "px");
document.write("<br>Высота изображения: " + document.image.height + "px<br>");

document.image.src = "blue_star.png";
*/

/*
document.image.addEventListener('click', changeImage);

let flag = 0;  // 0 = false
function changeImage(){
    if(flag == 0){
        document.image.src = "blue_star.png";
        flag = 1;
    }
    else{
        document.image.src = "golden_star.png";
        flag = 0;
    }
}
*/


// Слайдер - меняем любое кол-во изображений
/*
let array = new Array('2.jpg', '3.jpg', '4.jpg');
document.write("<input type='button' name='left' value='<'>");
document.write('<img src="' + array[0] + '" id="sl">');
document.write("<input type='button' name='right' value='>'>");

document.getElementsByName('right')[0].addEventListener("click", fnRight); // индекс ОБЯЗАТЕЛЬНЫЙ
document.getElementsByName('left')[0].addEventListener("click", fnLeft); 


let image = document.getElementById('sl');
let i = 0;


function fnRight(){
    i++;
    if(i == array.length){
        i=0;
    }
    image.src = array[i];
}

function fnLeft(){
    i--;
    if(i<0){
        i = array.length -1;
    }
    image.src = array[i];
}
*/


// Создать CLOCK
/*
let t = document.querySelectorAll("#clock img");

let imgTime = ['c0.gif', 'c1.gif', 'c2.gif', 'c3.gif', 'c4.gif', 'c5.gif', 'c6.gif', 'c7.gif', 'c8.gif', 'c9.gif'];


function clock() {
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    getImg(hour, min, sec);
    setTimeout('clock()', 1000);
}

function getImg(h, m, s){
    t[0].src = imgTime[Math.floor(h/10)];  // 17/10  => 1 (либо parseInt)
    t[1].src = imgTime[h%10];  // 17%10  => 7

    t[3].src = imgTime[Math.floor(m/10)];  // 17/10  => 1 (либо parseInt)
    t[4].src = imgTime[m%10];  // 17%10  => 7

    t[6].src = imgTime[Math.floor(s/10)];  // 17/10  => 1 (либо parseInt)
    t[7].src = imgTime[s%10];  // 17%10  => 7
}
clock();
*/






//       **********   NOVEMBER 9                  ***********

// *** DOM - Document Object Model - Объектная модель документа

// alert(document.documentElement.innerHTML); //  HTML
// alert(document.head.innerHTML);  // head
// alert(document.body.innerHTML);   // body

// let myTitle = document.querySelector('h1').innerHTML;
// console.log(myTitle);

// let myTitle1 = document.querySelector('p').firstChild.nodeValue;  // Node - это как сам тэг


// let myTitle1 = document.querySelector('p').childNodes[0].nodeValue;
// console.log(myTitle1);

// let myTitle = document.querySelector('h1');
// alert(myTitle.nodeName);  //  H1 - имя ноды в Заглавных буквах

/* 
let d = document.querySelector("#one");

if(d.nodeName == "DIV"){  // NODE NAME работает только в верхнем регистре!!!!!
    d.innerHTML = "Hello new tag";
} */

/* 
// nodeType самого элемента == ТИП элемента
let myTitle = document.querySelector('h1');
// console.log(myTitle);
// console.log(myTitle.nodeType);
console.log(myTitle.firstChild);
console.log(myTitle.firstChild.nodeType);
*/


/*  
//  методы создания тегов
let elem = document.querySelector("#root");

let tag = document.createElement("p");  // <p></p>  метод создания тега (на экране он не виден)
let node = document.createTextNode("Новый текст!!!"); // пока этот текст хранится в переменной node (НО на экране мы его еще не видим) - создали текстовую ноду 

tag.append(node);  // <p></p> + Новый текст!!! =  <p> Новый текст!!! </p>

elem.append(tag);  //   добавляем новый элемент последним дочерним!!!!! элементом внутри родительского
elem.prepend(tag);  //   добавляем новый элемент ПЕРВЫМ дочерним элементом внутри родительского

elem.before(tag);   //  добавляем новый элемент ДО выбранного id
elem.after(tag);   //  добавляем новый элемент ПОСЛЕ выбранного id

elem.replaceWith(tag);  //  ЗАМЕНЯЕТ полностью выбранный id новым элементов
*/


/* 
// Вариант 2 создания тега - короткий!!!

let list = document.querySelector("ul");

let newItem = document.createElement("li");
newItem.innerHTML = "Новый элемент списка";

list.append(newItem);
*/

/*  
// Работа со списком - добавление и перемещение элементов
let i = 1;
document.querySelector("#func2").addEventListener('click', add);
document.querySelector("#func1").addEventListener('click', change);

function add(){
    let elem = document.createElement("li");
    elem.innerHTML = "Water" + i;
    i++;
    document.querySelector("#list2").append(elem);
}

function change(){
    let elem = document.querySelector("#list2").lastChild;  //  обращаемся к последнему элементу li внутри родителя list 2
    // console.log(elem);
    document.querySelector("#list1").append(elem);
}
*/