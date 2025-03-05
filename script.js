const kick = document.getElementById('kick');

const playAudioChild = element => {
    element.children[0].play();
}

// playAudioChild(kick);

const drumArr = Array.from(document.getElementsByClassName('drum-pad'));

drumArr.forEach((item, index) => {
    // setTimeout(() => {
    //     playAudioChild(item);
    //     console.log(item);
    // }, index * 500); // Increase delay based on index
    item.addEventListener("click", () => playAudioChild(item));
});

document.addEventListener("keypress", event => {
    console.log(event.keyCode)
    switch (event.keyCode) {
        case 113:
            playAudioChild(kick);
    }
});

const clickDrumPad = () => {
    
}