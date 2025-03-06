const display = document.getElementById('display');
let currentAudio = null;

// Hit drum, play sound
const playDrumPad = item => {
    const audioChild = item.pad.children[0];

    // If there's audio currently playing, stop it
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Play sound and update display
    audioChild.play();
    currentAudio = audioChild;
    display.textContent = item.id;

    // Darken pad colour with short animation
    item.pad.classList.add("active");
    setTimeout(() => {
        item.pad.classList.remove("active");
    }, 100);
};

// Create array of .drum-pad objects and store id and keycode characters
const drumArr = Array.from(document.getElementsByClassName('drum-pad')).map((drumPad) => ({
    pad: drumPad,
    id: drumPad.getAttribute('id'),
    char: drumPad.textContent.trim().toLowerCase()
}));

drumArr.forEach((item) => {
    item.pad.addEventListener("click", () => playDrumPad(item));
});

// Play drum pad if correct key is pressed
document.addEventListener("keydown", event => {
    const charString = event.key.toLowerCase();
    const keyPress = drumArr.find((item) => item.char === charString);

    if (keyPress) {
        playDrumPad(keyPress);
    }
});