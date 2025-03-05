const kick = document.getElementById('kick');

const playAudioChild = element => {
    element.children[0].play();
}

playAudioChild(kick);

document.addEventListener("keypress", event => {
    console.log(event.keyCode)
    switch (event.keyCode) {
        case 113:
            playAudioChild(kick);
    }
});