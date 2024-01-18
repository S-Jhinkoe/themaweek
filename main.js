let blocksize = 25;
let rows = 20;
let cols = 20;
let board;
let context;


////hoofd snake/////
let snakeX = blocksize * 5;
let snakeY = blocksize * 5;

//powerup///
let powerupX = blocksize * 10;
let powerupY = blocksize * 10;

window.onload = function() {
    board = document.querySelector("#board");
    board.height = rows * blocksize;
    board.width = cols * blocksize;
    context = board.getContext("2d");

    update();
}

function update() {
    context.fillStyle = "black";
    context.fillRect(0,0, board.width, board.height);

    context.fillStyle = "lime";
    context.fillRect(snakeX, snakeY, blocksize, blocksize);

    context.fillStyle = "red";
    context.fillRect(powerupX, powerupY, blocksize, blocksize);
}