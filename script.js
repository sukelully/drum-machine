const display = document.getElementById('display');
let currentAudio = null; // Track the currently playing audio element

// Hit drum, play sound
const playDrumPad = item => {
    const audioChild = item.pad.children[0];

    // If there's an audio currently playing, stop it
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Play the new sound
    audioChild.play();
    currentAudio = audioChild;
    display.innerText = item.id;
};

// Create array of .drum-pad objects and store play state
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
    const charString = event.key.toLowerCase(); // Use event.key instead of event.keyCode
    const keyPress = drumArr.find((item) => item.char === charString);

    if (keyPress) {
        playDrumPad(keyPress);
    }
});