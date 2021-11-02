const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const music = document.querySelector('audio');


// music
const songs = [
    {
        name: 'jacinto-1',
        displayName: 'Electic Michau',
        artist: 'Michau'
    },
    {
        name: 'jacinto-2',
        displayName: 'Mlem',
        artist: 'Michau'
    },
    {
        name: 'jacinto-3',
        displayName: ' Michau',
        artist: 'Michau'
    }
]


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



// update DOM 
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}


loadSong(songs[2]);