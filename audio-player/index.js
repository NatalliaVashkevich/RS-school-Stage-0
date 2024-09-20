const image = document.querySelectorAll(".image");
const audio = document.querySelector(".audio-file");
const playPauseButton = document.querySelector(".play-pause-button");
const playButton = document.querySelector(".play-button");
const pauseButton = document.querySelector(".pause-button");
const currentTime = document.querySelector(".current-time");
const durationTime = document.querySelector(".duration-time");
const nextSong = document.querySelector(".next-song");
const prevSong = document.querySelector(".prev-song");

let isPlaying = false;
playPauseButton.addEventListener("click", () => {
    if(isPlaying) {
        audio.pause();
        pauseButton.style.display = "none";
        playButton.style.display = "block";
        
    } else {
        
        audio.play();
        pauseButton.style.display = "block";
        playButton.style.display = "none";
    } 
    isPlaying = !isPlaying;
});

