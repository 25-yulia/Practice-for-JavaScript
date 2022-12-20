let firstName = prompt("Ваше имя:", "Алекс");
let lastName = prompt("Ваша фамилия:", "Лапин");
let city = prompt("Ваш город:","Дели");
let age = prompt("Сколько Вам лет?:","30");
alert("*Ваши данные:*\nИмя: " + firstName + "\nФамилия: " + lastName + "\nГород: " + city + "\nВозраст: " + age);

let question = confirm("Все верно?");
if (question){
    alert("Спасибо за предоставленную информацию!")
}       
else{

}