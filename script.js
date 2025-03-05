const display = document.getElementById('display');

const playDrumPad = pad => {
    if (!pad.isPlaying) {    // Play audio node
        pad.children[0].play();
        console.log(pad.id);
        console.log(pad.char);
        display.innerText = pad.id;
    } else {}

}

// Create array of .drum-pad objects and store play state
const drumArr = Array.from(document.getElementsByClassName('drum-pad')).map((drumPad) => ({
    pad: drumPad,
    isPlaying: false,
    id: drumPad.getAttribute('id'),
    char: drumPad.textContent
}));

drumArr.forEach((item) => {
    item.pad.addEventListener("click", () => playDrumPad(item.pad));
});

document.addEventListener("keypress", event => {
    console.log(event.keyCode);
    switch (event.keyCode) {
        case 113:
            // console.log()
    }
});