'use strict';

//    **********   NOVEMBER 14   **************
/*
let greenFrog = document.querySelector("#greenFrog");
console.log(greenFrog.id);  //  greenFrog
console.log(greenFrog.className); //  frog
console.log(greenFrog.src);
console.log(greenFrog.alt);  // Лягушка
console.log(greenFrog.title);  // Зеленая лягушка
// console.log(greenFrog.data-img); // через дефис (-) будет ошибка. Поэтому делаем методом ниже =>
console.log(greenFrog.getAttribute("data-img"));  // это специфический или пользовательский атрибут - GET получает доступ
console.log(greenFrog.getAttribute("src")); 


console.log(greenFrog.setAttribute("src", "3.jpg")); // SET - устанавливает доступ
// greenFrog.removeAttribute('src');

console.log(greenFrog.hasAttribute('src'));
*/





//    ******** ФОРМЫ  ********
/*
// Способы доступа к элементам (к самой) формы:   
document.form1 
// 1. прямое обращение к форме - доступ через  ИМЯ формы:
document.form1.style.background = 'silver';

document.forms[0].style.padding = '16px';  
// 2. formS - это массив с формами (с тегом form) - сейчас форма у нас одна с 0-м индексом

document.forms['form1'].style.margin = '20px'; 
// 3.указываем явным образом, в каком массиве получаем доступ - Рекомендуемый способ, чем 4

document.forms.form1.style.border = '2px dotted gray';  
// 4. аналогичный способ как и 3



//  Доступ к элементам формы (input / button)
document.form1.name1
document.form1.name1.style.color = 'blue';  
// доступ по имени формы, а затем по имени input

document.form1["name1"].style.background = "aqua";
//второй способ доступа (ЭТОТ способ можно использовать, если в имени есть дефис (-))
*/


/*
// Доступ через ID
let txt = document.querySelector("#text1");
let but = document.querySelector("button");
console.log(txt);
but.addEventListener('click', content);

function content(){
    console.log(txt.value);
    alert(txt.value);  //  value выдает нам данные, которые вводит пользователь - т.е. мы можем получать доступ к внешнему значению 
}
*/


/* 
let input = document.querySelectorAll('input'); 
// доступ к input массиву (к каждому элементу)
let form1 = document.forms.form1; 
// доступ к самой форме (это просто разные способы получения доступа)
// console.log(input.length);
// console.log(form1.length);

for(let i=0; i<form1.length; i++){
    input[i].addEventListener('click', checkAll);
}

function checkAll(){
    let numChecked = 0;
    for(let i=0; i<form1.length; i++){
        if(input[i].checked && input[i].type == "checkbox"){ // условие, что нас интересуют только input с типом checkbox, а не radio кнопки
            numChecked++;
        } // атрибут checked обозначает, что в HTML на его месте будет изначально стоять галочка по умолчанию
    }

    if(numChecked == 3){ //  при обозначенных значения = 3
        for(let i=0; i<form1.length; i++){
            if(!input[i].checked && input[i].type == "checkbox"){
                input[i].disabled = true;
            }
        } 
    }

    else{ // иначе, т.е. если значение не равно 3
        for(let i=0; i<form1.length; i++){
            input[i].disabled = false;
        }
        
    }
    console.log(numChecked);
}
*/


/*
// 2й Вариант решения задачи
let input = document.querySelectorAll('input[type="checkbox"]');
// получаем доступ ТОЛЬКО к input с именем элемента checkbox
let form1 = document.forms.form1;


for (let i = 0; i <input.length; i++) {
    input[i].addEventListener('click', checkAll);
}

function checkAll() {
    let numChecked = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked ) {
            numChecked++;
        }
    }

    if (numChecked == 3) {
        for (let i = 0; i < input.length; i++) {
            if (!input[i].checked) {
                input[i].disabled = true;
            }
        }
    }

    else {
        for (let i = 0; i < input.length; i++) {
            input[i].disabled = false;
        }

    }
    console.log(numChecked);
}
*/


/*
// Задача с radio кнопками
// у radio кнопок есть одна Особенность - у них всегда ОДИНАКОВОЕ имя атрибута name !!!
let choose = document.querySelector('input[type="button"]');

choose.addEventListener('click', chooseColor);

function chooseColor(){
    let f = document.form3;
    // console.log(f.length);  //  7 (with legend)
    // console.log(f.radio2.length);  // 5 (ONLY radio)
    for(let i=0; i<f.radio2.length; i++){
        if(f.radio2[i].checked){
            document.body.style.background = f.radio2[i].value;
        }
    }
}
*/




/*    ***** Свойства select:  *****
optionS - коллекция из псевдоэлементов <option>  (массив)
selectedIndex - номер выбранного <option>  (номер или Индекс массива)
value - значение выбранного <option>         (значение)

//  Задача с картинками Город - Герб
let city = document.querySelector('#city');

city.addEventListener('change',setImage);

function setImage(){
    let cities = city.selectedIndex;
    // console.log(cities);
    let options = city.options;  //   коллекция массива
    // console.log(options);
    let code = options[cities].value;
    // console.log(code);

    let div = document.querySelector("#image");
    div.innerHTML = "<img src='img/"+ code +".png'>";
}
*/






//                 *********   NOVEMBER 16   **********
/*
// Задача с литрами бензина - КАЛЬКУЛЯТОР
let gas = document.querySelectorAll(".petrol");

// проходимся по всем кнопкам массива
for (let i=0; i<gas.length; i++){
    gas[i].addEventListener('click', function(){
        let gallons = document.querySelector(".gallons").value;
        let amount = this.getAttribute('data');

        let res = gallons * amount;
        // console.log(res);

        let sum = document.querySelector(".sum");
        sum.innerHTML = res;
    })
}
*/

/*
// Форма регистрации
// отличие события submit от click - тем, что мы получаем доступ к форме изначально
let reg = document.querySelector('.register');

reg.addEventListener('submit', function(){
    let log = reg.login.value;
    let pass = reg.password.value;
    let pass2 = reg.password2.value;
    let error = "";


    if(log == "" || pass == "" || pass == ""){
        alert("Все поля должны быть заполнены");
        return;  //  действие функции отменяется, пока это условие не выполниться
    }
    if(pass.length<6){
        error += "Слишком короткий пароль";
    }
    if(pass != pass2){
        error += "\nПароли не совпадают";
    }
    if(error == ""){
        alert("Поздравляем! Вы успешно прошли регистрацию");
    }
    else{
        alert(error);
    }
    
})
*/


//          *****   РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ    ******
//  регулярное выражение (РВ) - позволяет из СТРОКИ найти какие-то значения (например, для защиты сервера от вредоносных данных). Т.е. РВ - это какой-то шаблон, по которому производится проверка

/*  ***  Методы для работы с регулярными выражениями:
search - возвращает позицию (индекс), на которой РВ совпадает с вызывающей строкой, или значение " - 1 ", если совпадений нет

match - возращает все совпадения с РВ. Если нет совпадений - возвращает NULL

replace - заменяет все совпадения с РВ на новую подстроку

split - делит строку на массив, разбивая ее на указанной подстроке (либо по символу-разделителю)

test - выполяет поиск совпадений РВ со строкой. Возвращает булевое значение: true / false
[...] - ищет ЛЮБОй из заданных символов, но только ОДИН раз. [] - это один символ.


// ФЛАГИ:
g - это флаг (global). Представляет [шаблон] как массив из всех символов. Ищет все совпадения с шаблоном поиска (глобальный поиск)
i - (ignoreCase) - регистроНЕзависимый поиск
m - (multiline) - многострочный поиск


//  ДИАПАЗОНЫ:
//[0-9] - может быть любая цифра от 0 до 9 ВКЛючительно, [3-6]
[A-Z] - заглавные буквы
[a-z] - строчные буквы
[А-ЯЁ]
[а-яё]
[А-яё] - также рабочий вариант

[^abc]  - исключащий диапазон, НИ один из указанных символов

// КОЛИЧЕСТВО повторений
{3} - кол-во символов идущих подряд
{1, } - от 1 до Бесконечного кол-ва повторений
{2, 5} - от 2 до 5 повторений включ-но

 */


/*
// синтаксис записи РВ
let regexp = new RegExp("шаблон");  //  1 способ
let regexp = /шаблон/;
*/


/*
let str = "Я ищу совпадения в 2023 году";
let regexp = /ищу/;  
document.write(str + "<br>");

document.write(str.search(regexp) + "<br>"); 
// возращает номер индекса начала РВ
document.write(str.match(regexp) + "<br>"); 
// возращает само значение совпадения
document.write(regexp.test(str) + "<br>");  
// меняем местами шаблон со строкой
*/

/*
let str = "Я ищу совпадения в 2023 году 7892";
let regexp = /[ищу]/g;   // [] - возвращает 1 какой-то символ из заданных символов. По факту мы ищем не само это число, а только эти цифры в наборе. Поэтому используются флаги - g
document.write(str + "<br>");
document.write(str.match(regexp) + "<br>"); 
*/

/*
let str = "Я ищу совпадения в 2023 году 7892";
document.write(str + "<br>");

let regexp = /[я]/gi; 
document.write(str.match(regexp) + "<br>"); 
*/

/*
let str = "Я ищу совпадения в 2023 году 7892";
document.write(str + "<br>");

let regexp = /[0-9]/g;  // одна любая цифра
document.write(str.match(regexp) + "<br>"); 
*/

/*
let str = "Я ищу совпадения в 2023 году 7892";
document.write(str + "<br>");

let regexp = /[А-Яа-я]/g;  
document.write(str.match(regexp) + "<br>"); 
*/

/*
let str = "Я ищу совпадения в 2023 году 7892ё";  // ищем отдельно букву ё
document.write(str + "<br>");

let regexp = /[А-яЁё]/g;  
document.write(str.match(regexp) + "<br>"); 
*/


/*
let str = "Я ищу совпадения в 2023 году 7892ё";  
document.write(str + "<br>");

let regexp = /[^0-9]/g;  
document.write(str.match(regexp) + "<br>"); 
*/

/*
let str = "Я ищу совпадения в 2023 году 78927879971ё";  
document.write(str + "<br>");

let regexp = /[0-9]{2,5}/g;  // [0-9] - это ОДНА цифра (символ) - размер значения от 2х до 5и цифр
document.write(str.match(regexp) + "<br>"); 
*/


/*
let html = `
    <table>
        <tr>
            <td bgcolor="#CCC">
                <img src="1f3.png">
            </td>
            <td bgcolor="#003399">
                <img src="222.png">
            </td>
            <td bgcolor="#00ccdd>
                <img src="fff.png">
            </td>
        </tr>
    </table> 
    `; // помещаем в строку тег table в ``

let exp = /#([0-9a-f]{3}){1,2}/gi; 
// т.е длина символа состоит из 3х цифр, и это может повторятся либо 1 раз, либо 2  => либо 3 символа, либо 6
document.write(html.match(exp) + "<br>");
*/


/*  Символьные классы:
\d (digit) - любая цифра
\s (space) - пробельный символ, включая табуляцию и пробельный символ
\w (word) - любая цифра, буква (английский алфавит) или символ подчеркивания
 */

/* ОБРАТНЫЕ Символьные классы:
\D - все, кроме цифры
\S - все, кроме пробельных символов, включая табуляцию и пробельный символ
\W - все, кроме цифр, букв(английский алфавит) или символов подчеркивания
*/

/*  ТОЧКА - любой символ  */


// let str = "Я ищу совпадения в 2023 году 789 27879 971_ё_hello";  
// document.write(str + "<br>");

// let regexp = /\D/g;  
// document.write(str.match(regexp) + "<br>"); 

// let regexp = /\d./g;  
// document.write(str.match(regexp) + "<br>"); 



/*
^ - начало строки (перед последовательностью ничего не должно быть). Если он не в []
$ - конец строки (после последовательности ничего не должно быть)
*/

/*
let html = '909';
let reg = /^\d{3}$/g;   // ^ - циркумфлекс
document.write(html.match(reg) + "<br>");
*/


//            ******** NOVEMBER 21   ********

/* Квантификаторы - кол-во повторений:
+ - повторение от 1 до бесконечности = {1,0}
? - кол-во повторений от 0 до 1 = {0,1}
* - кол-во повторений 0 до бесконечности = {0,}
*/

/*
let html = `
    <b>my text</b>
    <img src='222.jpg'>
    <span>else. if</span>
    <img src='fgt222.png'>
    <img src='rdfg2.png'>
    <img src='ewr.gif'>
`;

let exp = /\w+\.(jpg|png|gif|jpeg|bmp)/ig;
document.write(html.match(exp) + "<br>");
*/

/*
let html = 'Дмитрий Васильев';
let exp = /(Дмитрий) Васильев/;  
// () - идут как сохраняющие скобки
document.write(html.match(exp) + "<br>");
*/

//  () - круглые скобки нужны как СОХРАНЯЮЩИЕ или как ГРУППИРУЮЩИЕ

//  *********   Метод REPLACE  *******

/*
document.write("aaa".replace('a','b') + "<br>");
document.write("aaa".replace(/a/g,'b') + "<br>");  // этот вариант работает как шаблон - поиск всех "а" и замена
*/


/*
let text = "I kill you black dog";
document.write(text + "<br>");
let exp = /(book|kill|black)/ig;  
// запрещенные слова
text = text.replace(exp, "***") // text - это НЕИЗМЕНЯЕМАЯ строка, которую мы не можем поменять, а можем только ПЕРЕЗАПИСАТЬ
// text = text.replace(exp, "<img src='1.jpg'>")
document.write("<p>" + text + "</p>");
*/

/*
let str = "John Smith";
let re = /(\w+)\s(\w+)/;
document.write(str.replace(re, "$2 && $1 $2"));
// Нумерация в () идет с 1 !!!
*/

/*
let text = "red color: #F00 and green: #090";
let exp = /(#[a-f0-9]{3})/ig;
text = text.replace(exp, "<span style='color:$1'>$1</span>");
document.write("<p>" + text + "</p>");
*/


/*
let text = "I love yandex.ru";
let exp = /(([a-z0-9-]{2,}\.)+[a-z]{2,4})/i;
text = text.replace(exp, "<a href='http://$1'>$1</a>");
document.write("<p>" + text + "</p>");
*/

/*  */
//  Задание из папки JS 8 - Регулярные выражения
let but = document.querySelector('#but');
but.addEventListener("click", smsUser);

function smsUser() {
    let name = document.getElementsByName("your_name")[0].value;
    let sms = document.getElementsByName("your_message")[0].value;
    let regExpBBMail = /([0-9a-z_.]+@[0-9a-z_^\.]+\.[a-z]{2,3})/ig;
    sms = sms.replace(regExpBBMail, "<span style='color:red'>$1</span>");
    document.write(`
        <fieldset>
            <legend>${name}</legend>
            <div>${sms}</div>
        </fieldset> 
    `);
}


/*
let str = " текст ";
str = str.replace(/^\s+|\s+$/g, "");
alert(">" + str + "<");
*/



// ********* Метод SPLIT - тот же для шаблонов, что и для строк

/*
let str = "Новая строка символов";
let re = str.split(" ");
console.log(re);
*/

/*
let str = "25-10-2022, 12.03.2023, 30/12/2020";
let re = str.split(/[-./,]/); 
// работа метода разделения, НО для шаблона - 1й вариант
console.log(re);
*/

/*
let num = 123456;
console.log(num);  // значение - Число
let str = String(num);
console.log(str);    // значение - Строка
let arr = str.split('');  // ('') - каждый элемент - 2й вариант
console.log(arr);
*/



