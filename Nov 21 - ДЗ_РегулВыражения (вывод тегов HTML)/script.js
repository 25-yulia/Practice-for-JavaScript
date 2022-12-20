'use strict';

// Задание из папки JS_8 - файл 4.pdf

let but = document.querySelector("#but");
but.addEventListener("click", mes);

function mes() {
    let user = document.getElementsByName("user")[0].value;
    let message = document.getElementsByName("message")[0].value;
    
    var regExpBBBold = /<(b|u|i|s|h1|p)>(.*?)<(\/)\1>/ig;   
    // 1 - тоже самое, что /<(b|u|i|s|h1|p)>(.*?)<(\/)(b|u|i|s|h1|p)>/ig; ТОЛЬКО в этом случае (при использовании 1) будет искать только тот тег, который открылся и он же должен закрыться. Если тег открыт один (h1), а закрыт другой (p), то он исключится из поиска. Если вместо 1 использовать (b|u|i|s|h1|p), то будут находится разные теги
    // () - каждая скобка - это $1 $2 и т.д
    
    message = message.replace(regExpBBBold, "<span style='color:red'>&lt;$1&gt;</span><span style='color:green'> $2 </span><span style='color:red'>&lt;$3$1&gt;</span><br>");

    
    // message = message.replace(/</g, "&lt;");  
    // message = message.replace(/>/g, "&gt;");  

    document.write(`
    <fieldset>
        <legend>${user}</legend>
        <div>${message}</div>
    </fieldset> 
`);
}


// Вариант 1:
    // var regExpBBBold = /<(b|u|i|s|h1|p)>(.*?)<\/\1>/ig;   // 1 - почему?
    // message = message.replace(regExpBBBold, "<span style='color:red'>&lt; $1 &gt;</span><span style='color:green'>\n $2 \n</span><span style='color:red'>&lt; /$1 &gt;</span><br>");