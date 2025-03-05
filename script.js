const display = document.getElementById('display');

const playDrumPad = item => {
    if (!item.isPlaying) {    // Play audio node
        item.pad.children[0].play();
        console.log(item.id);
        // console.log(item.char);
        console.log(toChar(item.char));
        display.innerText = item.id;
    } else {}
}

const toChar = string => {
    if (string.length > 1) return
    else return string.toLowerCase().charCodeAt(0);
}

// Create array of .drum-pad objects and store play state
const drumArr = Array.from(document.getElementsByClassName('drum-pad')).map((drumPad) => ({
    pad: drumPad,
    isPlaying: false,
    id: drumPad.getAttribute('id'),
    char: drumPad.textContent.trim()
}));

drumArr.forEach((item) => {
    item.pad.addEventListener("click", () => playDrumPad(item));
});

document.addEventListener("keypress", event => {
    console.log(event.keyCode);
    switch (event.keyCode) {
        case 113:
            // console.log()
    }
});