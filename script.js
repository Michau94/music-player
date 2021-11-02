const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const music = document.querySelector('audio');


// check if playing 

let isPlaying = false;

// play

function playSong() {
    isPlaying = true;
    music.play();
    playButton.classList.replace('fa-play', 'fa-pause');
    playButton.setAttribute('title', 'Pause');
}

function pauseSong() {
    isPlaying = false;
    music.pause();
    playButton.classList.replace('fa-pause', 'fa-play');
    playButton.setAttribute('title', 'Play');
}


playButton.addEventListener('click', () => {


    isPlaying ? pauseSong() : playSong();


})



