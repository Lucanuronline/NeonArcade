const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const refreshBtn = document.getElementById("btnRefresh");
let direction = "right";
let snake = [
    { x: 10, y: 10 }
];
let food = {
    x: 5,
    y: 5
};

function handleClick() {
  window.location.reload();
}

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowUp" && direction !== "down") {
        direction = "up";
    }

    if (event.key === "ArrowDown" && direction !== "up") {
        direction = "down";
    }

    if (event.key === "ArrowLeft" && direction !== "right") {
        direction = "left";
    }

    if (event.key === "ArrowRight" && direction !== "left") {
        direction = "right";
    }

});

function up() {
    if (direction !== "down") {
        direction = "up";
    }
}

function down() {
    if (direction !== "up") {
        direction = "down";
    }
}

function left() {
    if (direction !== "right") {
        direction = "left";
    }
}

function right() {
    if (direction !== "left") {
        direction = "right";
    }
}

if ('ontouchstart' in window) {
    document.getElementById("controls").style.display = "block";
}

function moveSnake() {

    let head = {
        x: snake[0].x,
        y: snake[0].y
    };

    if (direction === "right") {
        head.x++;
    }

    if (direction === "left") {
        head.x--;
    }

    if (direction === "up") {
        head.y--;
    }

    if (direction === "down") {
        head.y++;
    }

    if (head.x === food.x && head.y === food.y) {
        snake.unshift(head);
        food.x = Math.floor(Math.random() * 20);
        food.y = Math.floor(Math.random() * 20);

}

    for (let i = 1; i < snake.length; i++) {

    if (head.x === snake[i].x && head.y === snake[i].y) {

        clearInterval(game);
        document.getElementById("gg").innerHTML = "❌ Game Over!";
        return;

    }

}

if (
    head.x < 0 ||
    head.x >= 20 ||
    head.y < 0 ||
    head.y >= 20
) {
    clearInterval(game);
    document.getElementById("gg").innerHTML = "❌ Game Over!";
    return;
}
    snake.unshift(head);
    snake.pop();
}

drawSnake();

function drawSnake() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snake.length; i++) {

        ctx.fillStyle = "lime";

        ctx.fillRect(
            snake[i].x * 20,
            snake[i].y * 20,
            20,
            20
        );

    }
    ctx.fillStyle = "red";
ctx.fillRect(
    food.x * 20,
    food.y * 20,
    20,
    20
);

}

setInterval(function () {
    moveSnake();
    drawSnake();
}, 120);

refreshBtn.addEventListener("click", handleClick);