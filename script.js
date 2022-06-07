let balloon = document.querySelector("p");

function inflate() {
    let balloonSize = Number(balloon.style.fontSize.replace("px", ""));
    balloonSize *= 1.1;
    balloonSize = balloonSize + "px";
    balloon.style.fontSize = balloonSize;
    console.log("It GROWS!");
}

function deflate() {
    let balloonSize = Number(balloon.style.fontSize.replace("px", ""));
    balloonSize *= 0.9;
    balloonSize = balloonSize + "px";
    balloon.style.fontSize = balloonSize;
    console.log("It SHRINKS!");
}

function onKeyDownArrowUp(event) {
    if (event.key !== "ArrowUp") return; //Arrow keys are only triggered by onkeydown, not onkeypress.

    event.preventDefault(); //prevents from default scrolling

    if (event.repeat === true) return; // how to stop event.repeat if the key is pressed long

    inflate();

    if (Number(balloon.style.fontSize.replace("px", "")) > 100) {
        balloon.innerText = "💥";
        window.removeEventListener("keydown", onKeyDownArrowUp);
    }
}

function onKeyDownArrowDown(event) {
    console.log(event.key);
    if (event.key !== "ArrowDown") return;

    event.preventDefault(); //prevents from default scrolling

    if (event.repeat === true) return; // how to stop event.repeat if the key is pressed long

    deflate();

}

window.addEventListener("keydown", onKeyDownArrowUp);

window.addEventListener("keydown", onKeyDownArrowDown);