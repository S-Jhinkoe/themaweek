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

const snakeBody = [];

//powerup///
let powerupX;
let powerupY;

let gameOver = false;

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
if (i.code == "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
}

else if (i.code == "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
}

else if (i.code == "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
}

else if (i.code == "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
}
}

function update() {

if (gameOver) {
    return;
}

    context.fillStyle = "black";
    context.fillRect(0,0, board.width, board.height);

    context.fillStyle = "red";
    context.fillRect(powerupX, powerupY, blocksize, blocksize);

if(snakeX == powerupX && snakeY == powerupY){
    snakeBody.push([powerupX, powerupY])
    placePowerup();
}

for (let i = snakeBody.length-1; i > 0; i--) {
    snakeBody[i] = snakeBody[i-1]; 
}
if (snakeBody.length) {
    snakeBody[0] = [snakeX, snakeY];
}


    context.fillStyle = "lime";
    snakeX += velocityX * blocksize;
    snakeY += velocityY * blocksize;
    context.fillRect(snakeX, snakeY, blocksize, blocksize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blocksize, blocksize)
    }

    //game over =
    if (snakeX < 0 || snakeX > cols*blocksize || snakeY < 0 || snakeY > rows*blocksize) {
        gameOver = true;
        alert("!!!Game Over!!!")
    }

for (let i = 0; i < snakeBody.length; i++) {
    if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
        gameOver = true;
        alert("!!!Game Over!!!")
    }
}

}

function placePowerup() {
    powerupX =  Math.floor(Math.random() * cols) * blocksize;
    powerupY =  Math.floor(Math.random() * rows) * blocksize;
}