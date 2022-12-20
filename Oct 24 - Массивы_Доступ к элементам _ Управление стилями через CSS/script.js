'use sctrict';

// *********** МАССИВЫ - ПРОДОЛЖЕНИЕ ******
/*
let arr = [2, 6, 7, "Игорь", 1.5, true];
console.log(arr);
*/

/*
let mas = [[2, 1, 1], [6, 3, 7], [8, 5, 6]];
document.write(mas[2][1]);   // 5 [1 скобка - номер массива от 0 идет счет] [2 скобка - номер индекса от 0]
console.log(mas);
console.table(mas);
*/

// папка JS_3 - мини тест
/* 
let vopros = ["На ноль делить можно?", "Волга впадает в Каспийское море?", "Атмосферное давление увеличивается с высотой?", "2*2 будет 8", "Дельфины - это рыбы", "Мадонна - это настоящее имя певицы", "Первая мировая война началась 1 сентября 1939 года"];
let prav_otvet = [false, true, false, false, false, false, false];

let res = new Array();
let sum = 0;

for (let i = 0; i < vopros.length; i++) {
    let otvet = confirm(vopros[i]);
    if (otvet == prav_otvet[i]) {
        res[i] = 10;
        sum += res[i];
    }
    else {
        res[i] = 0;
    }
}              
document.write("<table border='1' width='500'>");

document.write("<tr>");
document.write("<th>Вопрос</th>");
document.write("<th>Баллы</th>");
document.write("</tr>");

for (let i=0; i<vopros.length; i++){
    document.write("<tr>"); 
    document.write("<td>" + vopros[i] + "</td>");   
    document.write("<td>" + res[i] + "</td>");
    document.write("</tr>");
}

document.write("<tr>");
document.write("<th>Итого</th>");
document.write("<th>" + sum + "</th>");
document.write("</tr>");

document.write("</table>")
*/


// ПОЛУЧЕНИЕ ДОСТУПА К ЭЛЕМЕНТУ - СТАРЫЕ ВАРИАНТЫ
/*  
let text1 = document.getElementById("text_1");
console.log(text1);
console.log(text1.textContent); 
text1.textContent = "Новое <b>значение</b>";   

// innerHTML - обрабатывает теги как HTML разметку
let text2 = document.getElementById("text_2");
console.log(text2);
console.log(text2.innerHTML); 
text2.innerHTML = "Новое <b>содержимое</b>";
*/

/*
// папка JS_3 - выбор изображения

let res = +prompt("Выберете изображение", "1- собака, 2-кот, 3- птица, 4-рыба");
document.write("<div id='image'></div>");
let img = document.getElementById("image");

switch (res) {
    case 1:
        img.innerHTML = "<img src='img/dog.jpg'>";
        break;
    case 2:
        img.innerHTML = "<img src='img/cat.jpg'>";
        break;
    case 3:
        img.innerHTML = "<img src='img/bird.jpeg'>";
        break;
    case 4:
        img.innerHTML = "<img src='img/fish.jpeg'>";
        break;
    default:
        alert("Такого изображения нет");    
}
*/

/*
let tag = document.getElementsByTagName("p");
console.log(tag);
tag[2].innerHTML = "Hello tag"; */

//тоже самое 
/*
let tag = document.getElementsByTagName("p")[2];
console.log(tag);
tag.innerHTML = "Hello tag"; 

tag.innerHTML = "Hello tag";  
tag.style.color = "blue";
tag.style.fontWeight = "bold";
tag.style.background = "silver";
tag.style.padding = "10px 20px";

// list - style -type => listStyleType

tag.id = 'test';   //применяем id
tag.className = 'x';  //применяем class
*/

/*
let q = document.getElementsByClassName('a');
console.log(q);
q[1].style.color = "red";
*/


// *** ПОЛУЧЕНИЕ ДОСТУПА К ЭЛЕМЕНТУ - НОВЫЕ ВАРИАНТЫ

// document.querySelector(css)
// document.querySelectorAll(css)
/*
let w = document.querySelector("#text_1");
console.log(w); // берет только 1 подходящий и прекращает поиск

let r = document.querySelectorAll("#text_1")[0];
console.log(r); // берет элементы как массив - обязательно указывать номер(индекс) элемента
*/

/*
let w = document.querySelector("p");
console.log(w);

let r = document.querySelectorAll("p")[1];
console.log(r)*/ 

/*
let w = document.querySelector(".a"); //имя класса
console.log(w);

let r = document.querySelectorAll(".a")[1];
console.log(r);  // обращаемся к конкретному!!! элементу 
// r[1].style.color="red";
*/


/* 
// Добавляем одинаковый текст к содержимому
let el = document.querySelectorAll('li');
// alert(el.length); - проверяем кол-во тегов li
for(let i=0; i<el.length; i++){
    el[i].innerHTML += " !!! фрукты";
}

let purple = document.querySelectorAll(".purple li");
for(let i=0; i<purple.length; i++){
    purple[i].style.color = 'purple';
    purple[i].innerHTML += "???";
}
*/

// let red = document.querySelectorAll(".red li")[1];
// red.style.color = "orange";

/*              ДЗ - СОЗДАНИЕ ПУСТОГО БЛОКА (папка JS_3 - файл 3.pdf)
   
document.write("<div id='block'></div>");  //выводим div с помощью id
let rec = document.getElementById('block');  // получаем доступ к элементу id
rec.innerHTML = "Дюбель —конструктивный элемент, который используется для укрепления винта или предмета на стене, на потолке или на полу в помещении или под открытым небом в различных материалах (бетон, кирпич и прочее).Сам дюбель удерживается в конструкции при помощи сил трения.С некоторого времени элементы связи и укрепления, дюбели и винт(шуруп) объединяют в одно целое и используются, прежде всего, для тяжёлых нагрузок.Дюбели предлагаются в различных величинах, которые руководствуются диаметром дюбеля(и соответственно необходимым отверстием), измеренным в миллиметрах..";  // добавляем текс в HTML

rec.style.background = "#f0f";
rec.style.color = "#99ffff";
rec.style.width = "50%";
rec.style.outline = "10px dotted #000";


rec.className = "klass";  //задаем имя класса
let cl = document.querySelector(".klass"); // получаем доступ к единственному классу
cl.style.fontSize = "12pt";
cl.style.fontWeight = "bold";
cl.style.textDecoration = "line-through";
 
 */