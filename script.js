const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');



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

let currentSong = 0;

loadSong(songs[currentSong]);

// Prev song
function prevSong() {
    currentSong--;
    if (currentSong < 0) {

        currentSong = songs.length - 1;
    }

    loadSong(songs[currentSong]);
    playSong();
}


// Next songs
function nextSong() {
    currentSong++;
    if (currentSong > songs.length - 1) {

        currentSong = 0;
    }

    loadSong(songs[currentSong]);
    playSong();
}


// update progress bar

function updateProgressBar(e) {
    if (isPlaying) {


        // destructuring
        const { duration, currentTime } = e.srcElement;

        //updateProgressBar

        // Get percentage
        const progressPercent = (currentTime / duration) * 100;

        // style progress bar width

        progress.style.width = `${progressPercent}%`;

        // calculate display for duration
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if (durationSeconds < 10) {
            durationSeconds = `0${durationSeconds}`;
        }



        // delay switching duration to hide NAN

        if (durationSeconds) {
            durationEl.textContent = `${durationMinutes}:${durationSeconds}`
        }

        // calculate display current minutes
        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if (currentSeconds < 10) {
            currentSeconds = `0${currentSeconds}`;
        }

        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
    }

}

function setProgressBar(e) {
    // get width of client
    const width = this.clientWidth;
    // get where i am clicking
    const clickX = e.offsetX;

    // get duration from music element

    const { duration } = music;
    console.log((clickX / width) * duration);

    music.currentTime = (clickX / width) * duration;


}

// Event Listeners
prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar);


