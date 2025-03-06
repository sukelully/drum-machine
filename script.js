const display = document.getElementById('display');
let currentAudio = null;

// Create array of .drum-pad objects and store id and keycode characters
const drumArr = Array.from(document.getElementsByClassName('drum-pad')).map((drumPad) => ({
    pad: drumPad,
    id: drumPad.getAttribute('id'),
    char: drumPad.textContent.trim().toLowerCase()
}));

// Hit drum, play sound
const playDrumPad = drumPad => {
    // If there's audio currently playing, stop it
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Play sound and update display
    const audioChild = drumPad.pad.children[0];
    audioChild.play();
    currentAudio = audioChild;
    display.textContent = drumPad.id;

    // Darken pad colour with short animation
    drumPad.pad.classList.add("active");
    setTimeout(() => {
        drumPad.pad.classList.remove("active");
    }, 100);
};

// Play drum pad if correct key is pressed
document.addEventListener("keydown", event => {
    const charString = event.key.toLowerCase();
    const keyPress = drumArr.find((drumPad) => drumPad.char === charString);

    if (keyPress) {
        playDrumPad(keyPress);
    }
});

drumArr.forEach((drumPad) => {
    drumPad.pad.addEventListener("click", () => playDrumPad(drumPad));
});