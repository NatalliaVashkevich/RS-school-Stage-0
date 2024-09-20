const image = document.querySelectorAll(".image");
const audio = document.querySelector(".audio-file");
const playPauseButton = document.querySelector(".play-pause-button");
const playButton = document.querySelector(".play-button");
const pauseButton = document.querySelector(".pause-button");
const currentTimeOnDisplay = document.querySelector(".current-time");
const durationTimeOnDisplay = document.querySelector(".duration-time");
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

audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;
   
    const currentMinutes = Math.floor( currentTime / 60);
    const currentSeconds = Math.floor( currentTime % 60);
    if (currentTime < 10) {
        currentTimeOnDisplay.textContent = `0:0${currentSeconds}`;
    } else if (currentTime < 60) {
    currentTimeOnDisplay.textContent = `0:${currentSeconds}`;
} else {
    currentTimeOnDisplay.textContent = `${currentMinutes}:${currentSeconds}`;
}
});
