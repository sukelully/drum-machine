const display = document.getElementById('display');

const playDrumPad = item => {
    if (!item.isPlaying) {    // Play audio node
        item.pad.children[0].play();
        // console.log(item.char);
        display.innerText = item.id;
    } else {}
}

// Create array of .drum-pad objects and store play state
const drumArr = Array.from(document.getElementsByClassName('drum-pad')).map((drumPad) => ({
    pad: drumPad,
    isPlaying: false,
    id: drumPad.getAttribute('id'),
    char: drumPad.textContent.trim().toLowerCase()
}));

drumArr.forEach((item) => {
    item.pad.addEventListener("click", () => playDrumPad(item));
});

// Play drum pad if correct keycode
document.addEventListener("keypress", event => {
    const charString = String.fromCharCode(event.keyCode).toLowerCase();

    const keyPress = drumArr.find((item) => item.char === charString);
    if (keyPress) playDrumPad(keyPress)
    else return;
});