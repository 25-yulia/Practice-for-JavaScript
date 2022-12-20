'use strict';

//  JSON - текстовый формат для представления в JS
//  *.json

let info = '{"first_name":"Ivan","age":36,"mother":{"name":"Olga","age":58},"children":["Kate","Igor","Misha"],"married":true,"dog":null}';

document.write(info + "<br>");
console.log(info);

/*
JSON.parse() - преобразовывает объект JSON в объект JavaScr (десириализация)
JSON.stringify() - преобразовывает объект JavaScript  в объект JSON (сериализация)
 */


let person = JSON.parse(info);
console.log(person);
/*
// Получаем доступ к полученному объекту:
person.first_name = "Petr";
document.write(person.first_name + "<br>");

delete(person.age);

person.work = "programmer"

for (let i in person){
    document.write(i + ": " + person[i] + "<br>")
}

delete (person.children[1]);
document.write(person.children +  "<br>");

person.children.slice(1, 1);
document.write(person.children + "<br>")

person.children.push("Ira");
document.write(person.children + "<br>");
*/
let personString = JSON.stringify(person);
console.log(personString);


//     *********  DECEMBER 5   ********

//  СПОСОБЫ работы с технологией AJAX
/*
// fetch - как оператор или ключевое слово для обработки данных формата JSON
// .then - функция, которая не позволяет выполнять задание, пока данные полностью не загрузяться (; - ставить нельзя)
// здесь response становится объектом json
// Ниже - это ОБРАЗЕЦ

fetch('https://jsonplaceholder.typicode.com/todos') 
  .then(response => response.json()) 
   
  .then(js => console.log(js))    // тоже самое, что и запись: .then(json => console.log(json))
*/

/*
// html - button

document.querySelector("#load").addEventListener('click', load);


function load(){
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
        .then(function (response){
            return response.json();
        })
        .then(function(data){
            let ul = document.querySelector('#list');
            // console.log(data);
            let html = data.map(function(item){
                return "<li>" + item.id + "-" + item.name + " " + item.email + "</li>"
            })
            ul.insertAdjacentHTML("afterbegin", html.join(" "));
        });

}
*/

/*
// div
let box = document.querySelector("div");
console.log(box.getBoundingClientRect());
// console.log(box.getBoundingClientRect().left);
// console.log(box.getBoundingClientRect().top);
*/

// JS (папка 11) - game


