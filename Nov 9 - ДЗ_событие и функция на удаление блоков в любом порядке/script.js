'use srtict';


let div = document.querySelectorAll(".pane");
let b = document.querySelectorAll(".remove-button");

/*
for(let i=0; i<b.length; i++){
    b[i].addEventListener("click", top);
    function top(){
        div[i].remove();
    }
}
*/


// 2nd OPTION
for(let i=0; i<b.length; i++){
    b[i].addEventListener("click", top);
    function top(){
        this.parentNode.remove();
        // b[i].parentNode.remove();

    }
}









