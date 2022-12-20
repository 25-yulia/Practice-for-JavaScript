'use strict';

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

let tag = document.createElement("p");  // <p></p>  метод создания тега (на экране он не виден)- создали текстовую ноду
let node = document.createTextNode("Новый текст!!!"); // пока этот текст хранится в переменной node (НО на экране мы его еще не видим)

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

/*  
//  Добавление
let div = document.querySelector("#root");
div.insertAdjacentHTML('beforebegin', '<p>До выбранного элемента</p>');
div.insertAdjacentHTML('afterend', '<p>После выбранного элемента</p>');
div.insertAdjacentHTML('afterbegin', '<p>Первым внутри!!! выбранного элемента</p>');
div.insertAdjacentHTML('beforeend', '<p>Последним внутри!!! выбранного элемента</p>');


let child = document.querySelector('#p1');
// child.remove();   //  Удаление


let second = document.querySelector('#p2');
second.after(child);  // поменяем местами
*/





// ***   КЛОНИРОВАНИЕ (дубликаты)
/*
let list = document.querySelector("ul");
let li = list.cloneNode(true);  // li - сейчас это склонированный объект (если после node идут пустые (), то клонируется пока только сам тег без дочерних элементов) А значение True в (true) позволяет склонировать сами значения в li со всеми дочерними эл-ми и атрибутами

li.querySelector('li').innerHTML = "Начало клонированного элемента";
list.after(li);
*/




/*
let list = document.querySelector(".list");
list.insertAdjacentHTML("beforebegin", "<h2>Список </h2><hr>");   // добавляем текст и HTML разметку
let list_inner = document.querySelector("h2");  // получаем доступ к созданному тегу h2
list_inner.insertAdjacentText('beforeend', "планет");  //  добавляет только!!! текст
list.insertAdjacentHTML("afterend", "<hr>"); 

let hr = document.querySelectorAll("hr")[1];
let h4 = document.createElement("h4");
h4.innerHTML = "Конец списка";
hr.insertAdjacentElement("afterend", h4);  //  в этом случае (Element) мы можем добавить 2м значением ТОЛЬКО переменную!!!

// удаляем элементы автоматически
let idRemove = setInterval(function(){
    let li = document.querySelector("li:last-child");
    if(li === null){
        clearInterval(idRemove);
        // alert("Список удален");
        list.insertAdjacentHTML("afterbegin", "<li>Список удален</li>")
    }
    else{
        li.remove();
    }   
}, 1000);
*/



/*
let div = document.querySelector("div"); 
div.className = "alert"; 

let activeDiv = document.querySelector(".active");
activeDiv.classList.add('hidden');  // classList - это псевдомассив со своими методами для добавления/удаления одного класса
// activeDiv.classList.remove('hidden'); 

activeDiv.classList.toggle('hidden');  //  либо удаляет, либо добавляет класс в зависимости, был ли ранее элемент или нет - меняет на противоположное значение

activeDiv.classList.replace('active', 'alert'); // заменяем имя одно класса на имя другого класса  
*/





