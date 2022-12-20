'use srtict';



let mas = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];


for (let i = 0; i < mas.length; i++) {
    document.write("<div>" + mas[i] + "</div>");
    let block = document.querySelectorAll("div")[i];

    block.style.textAlign = "center";
    block.style.fontWeight = "bold";

    block.style.background = 'rgb(' + createColor() + ', ' + createColor() + ', ' + createColor() + ')';

}

function createColor() {
    return Math.floor(Math.random() * 256);
}

