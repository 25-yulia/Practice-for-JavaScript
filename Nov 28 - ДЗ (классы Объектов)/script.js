'use strict';

class Main{
    constructor(img, p){
        this.src = img;
        this.p= p;
        this.new = "";
    }
    render(meth){
        this.new = `
            <p><img src="${this.src}" alt=""></p>
            <p class="scale">${this.p}</p>
        `;
        document.querySelector(`#${meth}`).innerHTML = this.new;
    }
}

let img = "https://cdn2.iconfinder.com/data/icons/hobbies-outline/60/bird-watching-birds-pastime-activities-hobbies-64.png";
let main = new Main(img, "Работа 24 часа в сутки, 7 дней в неделю, 365 дней в году");
main.render("ex");


let img2 = "https://cdn2.iconfinder.com/data/icons/ui-22-start-ecommerce-pack/12/ecommerce_globe-64.png";
let main2 = new Main(img2, "Нет географических границ");
main2.render("ex2");


let img3 = "https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-10-64.png";
let main3 = new Main(img3, "Ассортимент");
main3.render("ex3");


let img4 = "https://cdn4.iconfinder.com/data/icons/business-outline-the-capitalism/64/Insurance_security_approved-64.png";
let main4 = new Main(img4, "Безопасность");
main4.render("ex4");


let img5 = "https://cdn0.iconfinder.com/data/icons/education-340/100/Tilda_Icons_1ed_group-64.png";
let main5 = new Main(img5, "Сокращение расходов на аренду и персонал");
main5.render("ex5");


let img6 = "https://cdn4.iconfinder.com/data/icons/money-flow/64/sq_166_hand_shake_handshake_hand_company_gear_shareholder_agree-64.png";
let main6 = new Main(img6, "Партнерские отношения");
main6.render("ex6");


let img7 = "https://cdn0.iconfinder.com/data/icons/mobile-26/513/mobile-smartphone-phone_8-64.png";
let main7 = new Main(img7, "Покупатель всегда на связи");
main7.render("ex7");


let img8 = "https://cdn4.iconfinder.com/data/icons/aami-web-internet/64/aami19-18-64.png";
let main8 = new Main(img8, "Комфортный выбор");
main8.render("ex8");


let img9 = "https://cdn1.iconfinder.com/data/icons/banking-36/128/transaction_card_payment-64.png";
let main9 = new Main(img9, "Удобство оплаты");
main9.render("ex9");
