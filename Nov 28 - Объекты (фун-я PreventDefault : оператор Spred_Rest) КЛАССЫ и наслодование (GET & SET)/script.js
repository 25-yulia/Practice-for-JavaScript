'use strict';


// *********    NOVEMBER 28   *********
/*
let form = document.form1;
// form.addEventListener("submit", function(event){
//     event.preventDefault();  // отменяет поведение ссылки по умолчанию
// })

form.addEventListener("submit", event => {
    event.preventDefault();

    let title = form.title.value;
    let text = form.text.value;
    let description = form.description.value;

    saveForm({ title, text, description });  // эта запись аналогична = title: title, text: text и т.д.
})    //  ключи придумываем сами, а значения берем из функции
*/

/*
 Оператор Spred - ... без пробелов
 Оператор Rest
 (Синтаксис записи у них одинаковый)
 */

/*  Оператор Spred - ... без пробелов - разворачивает запись со значениями */
// function saveForm(obj) {  // { title, text, description } - вариант записи
//     // let {title, text, description} = obj;   // деструктуризация

//     let formData = {
//         date: new Date().toDateString(),
//         ...obj  //  Оператор Spred(3 вариант записи)
//         // title, text, description (2 вариант записи)

//         // = title: title,  =  text: text, = description: description  
//     }

//     console.log("Form data: ", formData);
// }



/* Оператор Rest - как массив объекта [] + ключи и значения {}
Применяется для сбора каких-то параметров */
/*
function saveForm(...obj) { 
    console.log("Аргументы: ", obj);
    let [{title, text, description}] = obj;

    let formData = {
        date: new Date().toDateString(),
        title, text, description  
    }

    console.log("Form data: ", formData);
}

*/




//   ********   КЛАССЫ ОБЪЕКТОВ как еще один вариант создания объекта   ******

/*
class User{

    constructor(name){
        this.n = name;  // это свойство = ключ
    }

    sayHi(){
        document.write("Hello, " + this.n + "!");  //  это метод
    }
}

let user = new User("Иван");   // это экземпляр класса
console.log(user);
document.write(user.n + "<br>");   //  имя объекта.имя ключа
user.n= "Мария";  // можем поменять значение 
user.sayHi();   // вызываем функцию (метод)

// console.log(typeof(User));  //  тип данных - функция, НО фактически - это объект
// console.log(typeof(user));  //  тип данных - объект
*/


/*
//    ******  Get и Set    *****
class User{
    constructor(login){
        this.login = login;
    }

    get login(){  // получаем данные login
        return this._login;   //  выводить будет новое значение (но не явно, имя переменной забронировано со знаком _)
    }
    
    set login(value){   // устанавливает  новые данные логинa
        if(value.length < 6){
            alert("Логин слишком короткий")
            return
        }
        this._login = value;
    }
}

//  создаем Экзэмпляр класса =>
let user = new User("admin");
console.log(user.login);
user.login = "admin-admin";
console.log(user.login);
*/


/*
class Person{
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }
    set fullName(value){
        [this._firstName, this._lastName]= value.split(/\s+/g);
    }
}

let people = new Person("John", "Dou");

document.write(people._firstName + "<br>");
document.write(people.fullName + "<br>");

people.fullName = "Anna   Petrova";
document.write(people.fullName + "<br>");
*/


/*
//   Наследование классов

class Animal{  // родительский класс
    constructor(name){
        this.name = name;
        this.speed = 0;
    }

    run(speed){
        this.speed = speed;
        document.write(`${this.name}  бежит со скоростью ${this.speed} км/ч. <br>`)
    }

    stop(){
        this.speed = 0;
        document.write(`${this.name} стоит. <br>`)
    }
}

class Rabbit extends Animal{   // дочерний класс
    constructor(name, earLength){
        super(name);
        this.earLength = earLength;
    }

    hide(){
        document.write(`${this.name} прячется! <br>`);
    }
    stop(){
        super.stop(); // super - ключевое слово (дает возможность Не создавать еще раз уже имеющийся метод - т.е. ПОКАЗЫВАЕМ, что метод берем из родит.класса)
        this.hide();  //  Переопределение класса - если сохраняем то же имя класса, но комбинируем методы из родительского и дочернего классов
    }
}


//  Создаем экзэмпляры класса
let animal = new Animal("Мой питомец"); // == this.name
animal.run(80);
animal.stop();

let rabbit = new Rabbit("Белый кролик", 10);
console.log(rabbit);
rabbit.run(5);  // берет метод у родительского класса, несмотря на то, что у rabbit нет своего метода run
rabbit.hide();
rabbit.stop();

document.write(rabbit.name + "<br>");
document.write(rabbit.earLength + "<br>");
*/



//  Создаем div в HTML
//  создаем классы, которые являются практически как шаблон (образец) 
class Header{           //  родительский класс
    constructor(img, h1, h2){
        this.src = img;
        this.h1 = h1;
        this.h2 = h2;
        this.out = "";
    }

    render(id){ 
        this.out = `
            <img src="${this.src}" alt="">
            <h1>${this.h1}</h1>
            <h2>${this.h2}</h2>
        `;
        document.querySelector(`#${id}`).innerHTML = this.out;
    }
}

class HeaderExt extends Header{    //  дочерний класс
    constructor(img, h1, h2, tel){
        super(img, h1, h2);
        this.tel = tel;
    }
    get tel(){
        return this._tel;
    }
    set tel(t){
        let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        if(reg.test(t)){
            this._tel = t;
        }
        else{
            alert("Некорректный номер телефона");
            return;
        }
    }

    renderExt(id){
        super.render(id);
        this.out += `
            <p>${this.tel}</p>
        `;
        document.querySelector(`#${id}`).innerHTML = this.out;
    }
}

// а дальше создаем экземпляры классов, которые будут работать согласно шаблону
let img = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-64.png";
let header = new Header(img, "Заголовок", "Описание");
header.render("header"); // header - название id из HTML 

let img2 = "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/187_Js-64.png";
let header2 = new Header(img2, "Второй Заголовок", "Описание");
header2.render("header2");

let img3 = "https://cdn4.iconfinder.com/data/icons/file-extension-names-vol-8/512/27-64.png";
let header3 = new HeaderExt(img3, "Дочерний класс", "Дочерний класс наследует все свойства и методы родительского класса", "+7 926-785-12-21");

header3.tel = "Hello";
// header3.tel = "+7 999 777 77 77";
header3.renderExt("ext");







