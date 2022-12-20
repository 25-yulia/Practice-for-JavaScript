'use strict';
/*
function Prof(pName, pAge, pJob){
    this.name = pName;
    this.age = pAge;
    this.job = pJob;
    this.who = function(){
        document.write("Я " + this.name + ", мне " + this.age + " лет." + " Я работаю " + this.job + ".<br>")
    }
}

let dima = new Prof("Дмитрий", 26, "Дизайнером");
dima.who();

let stas = new Prof("Станислав", 29, "Программистом");
stas.who();

let sergey = new Prof("Сергей", 35, "Менеджером");
sergey.who();
*/

function Automobile(pColor, pModel, pYear, pManufact){
    this.color = pColor;
    this.model = pModel;
    this.year = pYear;
    this.manufact = pManufact;
    this.whatColor = function(){
        document.write(" Цвет машины: " + this.color + "<br>")
    } 
    this.autoInfo = function(){
        document.write(" Модель машины: " + this.model + "<br>Год выпуска: " + this.year + "<br>Производитель автомобиля: " + this.manufact + "<br>" + "<br>")
    }
}

let nissan = new Automobile("Red", "Skyline", 2007, "Nissan");
nissan.whatColor();
nissan.autoInfo();

let toyota = new Automobile("Black", "Corolla", 2009, "Toyota");
toyota.whatColor();
toyota.autoInfo();

let vw = new Automobile("Blue", "Golf", 2009, "Volkswagen");
vw.whatColor();
vw.autoInfo();