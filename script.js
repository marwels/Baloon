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


window.addEventListener("keydown", event1 => { //Arrow keys are only triggered by onkeydown, not onkeypress.

    if (event1.key === "ArrowUp") {
        event1.preventDefault(); //prevents from default scrolling
        event1.repeat = false; // how to stop event.repeat ?? if the key is pressed long?????
        inflate();
        if (Number(balloon.style.fontSize.replace("px", "")) > 100) {
            balloon.innerText = "💥";
            window.removeEventListener("keydown", event1);
        }
    }
}
)

window.addEventListener("keydown", event => { //Arrow keys are only triggered by onkeydown, not onkeypress.
    console.log(event.key);
    if (event.key === "ArrowDown") {
        event.preventDefault(); //prevents from default scrolling
        event.repeat = false;
        deflate();

    }
}
)