'use scrict';

/*
let img = document.querySelector("#pic");


function show(){
    img.style.opacity = '1';
}

function hide(){
    img.style.opacity = '0';
}
*/

// OPTION 2

let s = document.querySelector('.show');
let h = document.querySelector('.hide');

s.addEventListener('click', function(){
    let img = document.querySelector('#pic');
    img.style.opacity = '1';
})

h.addEventListener('click', function(){
    let img = document.querySelector('#pic');
    img.style.opacity = '0';
})