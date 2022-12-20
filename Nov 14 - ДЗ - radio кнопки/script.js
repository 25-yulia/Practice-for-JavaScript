'use strict';

let but = document.querySelector("input[type='button']");

but.addEventListener('click', chooseAns);

function chooseAns(){
    let n = document.form;
    // console.log(n.fm.length);
    for(let i=0; i<n.fm.length; i++){
        if(n.fm[i].checked){
            alert("Ответ: " + n.fm[i].value);
        }
    }
}