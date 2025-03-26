const dodger = document.getElementById("dodger");
const game = document.getElementById("game");
const gameWidth = 400;
const dodgerWidth = 40;

dodger.style.left = "180px";

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 5}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left + dodgerWidth < gameWidth) {
        dodger.style.left = `${left + 5}px`;
    }
}
