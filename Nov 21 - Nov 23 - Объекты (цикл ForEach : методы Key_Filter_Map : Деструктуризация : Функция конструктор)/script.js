'use strict';

//  *****     NOVEMBER 21   ******

//     *********      ОБЪЕКТЫ      *********
// Два способа создания объектов:

/*
let car = new Object(); 
// конструктор объекта (объектно-ориентированный подход)
let car1 = {};  
// литерал объекта
*/


/* 1й способ: 
let car = new Object(); 
car["type"] = "BMW";  // Ключ или Свойство
car['color'] = "white"; 
console.log(car);
document.write(car["type"] + " " + car['color'] + "<br>");

let car1 = new Object();
car1.type = "BMW";
car1.color = "white";
document.write(car1.type + " " + car1.color + "<br>");
*/


/* 2й способ: 
let menu1 = {};  // 1 вариант
menu1.width = 300;
menu1.height = 200;
menu1.title = "Menu";
console.log(menu1);
document.write(menu1.title + ": " + menu1.width + " x " + menu1.height + "<br>" )

let menu = {   // 2й вариант
    width: 300,
    height: 200,
    title: "Menu",
};
delete menu.width;
menu.age = 25;
console.log(menu);
// document.write(menu.title + ": " + menu.width + " x " + menu.height + "<br>" )

// вариант, как можно не выводя постоянно в document.write, а пройтись в цикле и вывести все данные
for(let i in menu){  // i - каждый ключ (имя ключа) в нашем объекте
    document.write("<br>Ключ: " + i + ", значение: " + menu[i]);
}
*/




//     **************   NOVEMBER 23   ************

/* 
let menu = {   
    width: 300,
    height: 200,
    title: "Menu",
};

let counter = 0;
for(let i in menu){  
    document.write("<br>Ключ: " + i + ", значение: " + menu[i]);
    counter++;
}

document.write("<br>Всего свойств: " + counter + "<br>");
document.write("<br>Имена ключей: " + Object.keys(menu) + "<br>");  
// 1) keys - метод. Сначала мы должны получить доступ к объекту (Получаем доступ к ключам) Посколько Object.keys - это глобальный объект - поэтому мы не можем сначала обратиться к ключам напрямую. 

document.write("<br>Всего ключей: " + Object.keys(menu).length + "<br>"); // 2) Доступ к значениям. (length - это свойство) только теперь можем посчитать кол-во ключей 

Object.keys(menu).forEach(function(key){
    document.write("<br>" + key + ": " + menu[key]);
});  
// forEach - это цикл
*/

/*
let car = {
    name: "Volvo",
    year: 2013
};

console.log(car);  //  можем см. встроенные объекты
*/

/*  */
let obj = {
    name: "Гомер",
    colors: {   
        first: "yellow",
        second: "blue"
    },
    color: [   // значением может быть и массив
        "black",
        "white",
        "red",
        'blue'
    ],
    hello: function(){
        document.write("Привет");
    }
}

// document.write(obj.name + " " + obj.color[1] + "<br>"); // получаем досуп к значению в массиве - по индексу 

// document.write(obj.name + " " + obj.color[1] + " " + obj.colors.first + "<br>"); 
// если просто к значение в {} - доступ через точку

// obj.hello();  // вызов НЕ функции, а Метода (так как это объект)

/* 
// filter - метод, который создает (и возвращает) новый массив строковых значений, элементы которого будут соответ-ть заданому условию. Filter работает как цикл и проходит итерации как for, т.е. отфильтровывает, что-то исключает.
let fil = obj.color.filter(function(elem){
    return elem.length < 5;  
    // true - фильтр вернет значение fil. Проходит по ДЛИНЕ в слове цвета(кол-ву букв)
})
document.write("<br>" + fil + "<br>");
console.log(fil);
*/

/* 
// map - метод, который возращает просто элемент ВНЕзависимости от условия. Здесь не отбрасывается ни один элемент, а он просто пересохраняет элементы массива и используется, если нужно придать или видоизменить этот массив
let mas = obj.color.map(function(elem){
    return "color: " + elem + "<br>"; //  возвращает массив, поэтому появляется запятая (,)
})
document.write("<br>" + mas + "<br>");
*/

/* 
//  стрелочная функция 
let mas1 = obj.color.map(elem => elem.toUpperCase());
document.write("<br>" + mas1 + "<br>");
*/

/*
let mas = obj.color.map(function(elem, index, all){  // elem, index, all - от 1 до 3
    return elem + " " + index + " массив: " + all + "<br>";
})
document.write("<br>" + mas + "<br>");
*/

/*
let mas = Object.keys(obj.colors).map(function(elem){  
    return elem + " " + obj.colors[elem] + "<br>";
})
document.write("<br>" + mas + "<br>");
*/


// *******************  
// new case
/*
let calc = {
    num1: 5,
    num2: 5,
    computer: function(){
        this.result = this.num1 * this.num2;  //  this означаем, что именно в ЭТОМ объекте
        // calc.result = calc.num1 * calc.num2;  
        // 2й способ обращения к ключу объекта. А в 1м случае this - альтернативное обращение
    }
}

calc.computer();  // вызываем функцию (метод) через объект
document.write(calc.result);
*/

/*
let x = 15, y = 10;

let coords = {
    x: x,  // свойство (ключ)
    y: y,
    calc: function(){   //  создаем МЕТОД
        document.write(this.x * this.y);
    }
}

coords.calc();   // по факту!!! вызываем не функцию, а МЕТОД
*/

/*
//  Более компактная запись верхнего варианта
let x = 15, y = 10;

let coords = {x, y,  // запись, если имя ключа и значение совпадают
    calc(){   // явно показывает, что это метод
        document.write(this.x * this.y);
    }
}

coords.calc(); 
*/



//  *********   ДЕСТРУКТУРИЗАЦИЯ      ********
/* 
let user = {
    login: 'client',
    passw: 'qwerty',
    role: 'guest'
}
// let a = user.login
// document.write(a + "<br>");

let {login, passw, role} = user;  
// ДЕСТРУКТУРИЗАЦИЯ. объявляем переменную с ключами
document.write(login + " " + passw + " " + role + "<br>");
 */

/*  
let user = {
    login: {
        firstName: 'Kate',
        lastName: 'Petrova'
    },
    passw: 'qwerty',
    role: 'guest'
}
// let {login: {firstName, lastName}, passw, role} = user; 
// document.write(firstName + " " + lastName + " " + passw + " " + role + "<br>");
// let a = user.login.firstName;
// document.write(a + "<br>");


let {login: {firstName: n, lastName}, passw: p, role} = user;   // еще один пример записи и присвоение значение в деструктуризации ЧЕРЕЗ псевдонима или "элиэса"
document.write(n + " " + lastName + " " + p + " " + role + "<br>");
*/

/* 
let user = {
    login: {
        firstName: 'Kate',
        lastName: 'Petrova'
    },
    passw: 'qwerty',
    role: 'guest'
}
let {login: {firstName: n, lastName}, ...rest} = user; 
document.write(n + " " + lastName + " " + rest.role + "<br>");
*/

/*
let number = [3,5,6];
let [a,b,c] = number;  // Деструктуризация объекта - через {}, а массива - через []

// document.write(number[1]);
document.write(b);
*/

/*
let number = [3,5,6];
let [,,c] = number;
document.write(c); // здесь не имеет значение индекс
*/

/*
let pers = {
    name: "Игорь",
    colors: [
        "red",
        "white",
        "blue",
        "black"
    ],
    brand: "Bentley",
    start: function(){
        let color = Math.floor(Math.random() * 4);
        document.write(this.name + " имеет " + this.colors[color] + " " + this.brand);
    }
}
pers.start();
*/

/*
let pers = {
    name: "Игорь",
    colors: [
        "red",
        "white",
        "blue",
        "black"
    ],
    brand: "Bentley",
    start(){
        let {name, colors, brand} = this;
        let color = Math.floor(Math.random() * 4);
        document.write(name + " имеет " + colors[color] + " " + brand);   // декструктуризация
    }
}
pers.start();
*/



//   *******  Функция - конструктор    ******

/*
//Создание Объекта через Функцию

function Car(name, year){  
    // функция как шаблон!!!
    this.name = name;  //  после = эта name из агрументов функции и располагается справа от =. Присваивается в виде значения для ключа
    this.year = year;
}


Car.prototype.getAge = function(){   // как это было раньше
    return new Date().getFullYear() - this.year;
}   

Car.prototype.color = "black"; 

let ford = new Car("Ford", 2019);  // название объекта по названию функции

console.log(ford);
console.log(ford.color);
console.log(ford.getAge());

let bmw = new Car("BMW", 2017);
bmw.color = "red";   // добавили ключ=значение и он ПЕРЕзаписал новое значение для color
console.log(bmw);
*/

/**/
function User(pName, pAge){
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function(){    // здесь displayInfo - это название метода
        document.write("Имя: " + this.name + ", возраст: " + this.age + "<br>");
    }
}

let tom = new User("Tom", 26);
document.write(tom.name + "<br>");
tom.displayInfo();

let kate = new User("Kate", 24);
kate.displayInfo();



// JS 9 - конструктор и автомобиль