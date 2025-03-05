const display = document.getElementById('display');

const playDrumPad = pad => {
    pad.children[0].play();
    console.log(pad.id);
    display.innerText = pad.id;
}

// Create array of .drum-pad objects and store play state
const drumArr = Array.from(document.getElementsByClassName('drum-pad')).map((drumPad) => ({
    pad: drumPad,
    playing: false,
    id: drumPad.getAttribute('id')
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