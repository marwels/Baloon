let balloon = document.querySelector("p");


window.addEventListener("keydown", event => { //Arrow keys are only triggered by onkeydown, not onkeypress.
    console.log(event.key);
    if (event.key === "ArrowUp") {
        event.preventDefault(); //prevents from default scrolling
        let balloonSize = Number(balloon.style.fontSize.replace("px", ""));
        balloonSize *= 1.1;
        balloonSize = balloonSize + "px";
        balloon.style.fontSize = balloonSize;
        event.repeat = false; // how to stop event.repeat ?? if the key is pressed long?????
        console.log("It GROWS!");

    }
}
)

window.addEventListener("keydown", event => { //Arrow keys are only triggered by onkeydown, not onkeypress.
    console.log(event.key);
    if (event.key === "ArrowDown") {
        event.preventDefault(); //prevents from default scrolling
        let balloonSize = Number(balloon.style.fontSize.replace("px", ""));
        balloonSize *= 0.9;
        balloonSize = balloonSize + "px";
        balloon.style.fontSize = balloonSize;
        event.repeat = false;
        console.log("It SHRINKS!");

    }
}
)