let start = document.querySelector("#start");
let game = document.querySelector("#game");
let score = 0;
let time = document.querySelector("#time");
let isGameStarted = false;
let timeHeader = document.querySelector('#time-header');
let resultHeader = document.querySelector('#result-header');
let result = document.querySelector('#result');
let gameTime = document.querySelector('#game-time');


gameTime.addEventListener('input', setGameTime);
start.addEventListener('click', startGame);
game.addEventListener("click", handleBoxClick)


function startGame() {
    score = 0;  // обнуляем результат перед новой игрой
    setGameTime();
    gameTime.setAttribute('disabled', true);
    timeHeader.classList.remove('hide');
    resultHeader.classList.add('hide');


    isGameStarted = true;
    // console.log("Start");
    start.classList.add('hide');
    game.style.background = "#FFF";

    let interval = setInterval(function () {
        let t = time.textContent;
        if (t <= 0) {
            clearInterval(interval);
            endGame();
        }
        else {
            time.textContent = (t - 0.1).toFixed(1);
        }
    }, 100)

    renderBox();
}

function setGameTime(){
    let tm = +gameTime.value;
    time.textContent = tm.toFixed(1);
    timeHeader.classList.remove('hide');
    resultHeader.classList.add('hide');
}

function endGame(){
    isGameStarted = false;
    start.classList.remove("hide");
    game.style.background = "#9be8fb";
    game.innerHTML = "";
    timeHeader.classList.add('hide');
    resultHeader.classList.remove('hide');
    result.textContent = score;
    gameTime.removeAttribute('disabled');
}


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomColor(){
    return Math.floor(Math.random() * 256);
}


function renderBox() {
    game.innerHTML = ""; 
    let box = document.createElement('div');
    let boxSize = getRandom(30, 100);
    let gameSize = game.getBoundingClientRect();
    let maxTop = gameSize.height - boxSize;
    let maxLeft = gameSize.width - boxSize;


    box.style.width = box.style.height = boxSize + "px";
    // box.style.background = "#000";
    box.style.background = 'rgb(' + randomColor() +', ' + randomColor() + ', ' + randomColor() + ')';
    box.style.position = "absolute";
    box.style.top = getRandom(0, maxTop) + "px";
    box.style.left = getRandom(0, maxLeft) + "px";
    box.style.cursor = "pointer";
    box.setAttribute("data-box", "true");  

    game.insertAdjacentElement("afterbegin", box);
}



function handleBoxClick(event) {
    if(!isGameStarted){
        return;
    }
    if (event.target.dataset.box) {
        score++;
        renderBox();
    }
}
