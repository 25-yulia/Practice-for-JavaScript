'use strict';

/**/
let a = document.querySelector('#cl');
a.addEventListener('click', myMove);


function myMove() {
    // a.style.visibility = 'hidden';
    let elem = document.getElementById('animate');
    let pos = 0;
    let id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            // a.style.visibility = 'visible';
            a.addEventListener('click', myMove);
            clearInterval(id);
        }
        else {
            a.removeEventListener('click', myMove);
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";

        }
    }
    
}




//  ВАРИАНТ 2 - неверно
/*
let a = document.querySelector('#cl');
a.addEventListener('click', myMove);

let b = document.querySelector('p');
b.addEventListener('click', moveOn);

let i = 0;    

function moveOn() {
    if (i == 0) {         
        myMove();
            
    }
    else {  
        b.removeEventListener('click', moveOn);
    }

}

function myMove() {
    let elem = document.getElementById('animate');
    let pos = 0;
    let id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        }
        else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";

        }
    }
    a.removeEventListener('click', myMove);
}
*/

