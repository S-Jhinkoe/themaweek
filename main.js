let blocksize = 25;
let rows = 20;
let cols = 20;
let board;
let context;


////hoofd snake/////
let snakeX = blocksize * 5;
let snakeY = blocksize * 5;

let velocityX = 0;
let velocityY = 0;


//powerup///
let powerupX;
let powerupY;

window.onload = function() {
    board = document.querySelector("#board");
    board.height = rows * blocksize;
    board.width = cols * blocksize;
    context = board.getContext("2d");

    placePowerup()
   
    document.addEventListener("keyup", changeDirection);

     //update();
     setInterval(update,1000/10); ////100 miliseconden
}

function changeDirection(i) {
if (i.code == "ArrowUp") {
    velocityX = 0;
    velocityY = -1;
}

else if (i.code == "ArrowDown") {
    velocityX = 0;
    velocityY = 1;
}

else if (i.code == "ArrowLeft") {
    velocityX = -1;
    velocityY = 0;
}

else if (i.code == "ArrowRight") {
    velocityX = 1;
    velocityY = 0;
}
}

function update() {
    context.fillStyle = "black";
    context.fillRect(0,0, board.width, board.height);

    context.fillStyle = "lime";
    snakeX += velocityX;
    snakeY += velocityY;
    context.fillRect(snakeX, snakeY, blocksize, blocksize);

    context.fillStyle = "red";
    context.fillRect(powerupX, powerupY, blocksize, blocksize);

}

function placePowerup() {
    powerupX =  Math.floor(Math.random() * cols) * blocksize;
    powerupY =  Math.floor(Math.random() * rows) * blocksize;
}