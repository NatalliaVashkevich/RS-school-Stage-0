
const arrOfSounds = {
    
        img: ["assets/img/Honkcover.jpeg", "assets/img/The Beatles.jpeg",],
        track: ["assets/audio/The Rolling Stones – Living In A Ghost Town.mp3", "assets/audio/The Beatles – Now And Then.mp3",],
        artist: ["The Rolling Stones", "The Beatles",],
        title: ["Living In A Ghost Town", "Now And Then",],
    };
    
const audio = document.querySelector(".audio-file");
const backgroundImage = document.querySelector(".background-image");
const coverImage = document.querySelector(".cover-image");
const playPauseBtn = document.querySelector(".play-pause-button");
const playBtn = document.querySelector(".play-button");
const pauseBtn = document.querySelector(".pause-button");
const currentTimeOnDisplay = document.querySelector(".current-time");
const durationTimeOnDisplay = document.querySelector(".duration-time");
const nextSongBtn = document.querySelector(".next-song");
const prevSongBtn = document.querySelector(".prev-song");

const artistName = document.querySelector(".artist");
const title = document.querySelector(".title");
let playNow = 0;

function fillData(playNow) {
    backgroundImage.src = arrOfSounds.img[playNow];
    coverImage.src = arrOfSounds.img[playNow];
    audio.src = arrOfSounds.track[playNow];
    artistName.innerHTML = arrOfSounds.artist[playNow];
    title.innerHTML = arrOfSounds.title[playNow];
};
fillData(playNow);

let isPlaying = false;
playPauseBtn.addEventListener("click", () => {
    if(isPlaying) {
        audio.pause();
        pauseBtn.style.display = "none";
        playBtn.style.display = "block";
        
    } else {
        
        audio.play();
        pauseBtn.style.display = "block";
        playBtn.style.display = "none";
    } 
    isPlaying = !isPlaying;
});


const progressBar = document.querySelector(".progress-bar");

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
const durationTime = audio.duration;
    
    const playingTime = (currentTime /durationTime) * 100;
    progressBar.style.width = `${playingTime}%`;

});

audio.addEventListener("loadeddata", () => {
    const durationTime = audio.duration;
    const durationMinutes = Math.floor( durationTime / 60);
    const durationSeconds = Math.floor( durationTime % 60);
    if (durationSeconds < 10) {
        durationTimeOnDisplay.textContent = `${durationMinutes}:0${durationSeconds}`;
    } else {
    durationTimeOnDisplay.textContent = `${durationMinutes}:${durationSeconds}`;
}
});



nextSongBtn.addEventListener('click', () => {
    if(playNow === arrOfSounds.track.length - 1) {
        playNow = 0;
    } else {
        playNow += 1; 
    }
    fillData(playNow);
    audio.play();
    pauseBtn.style.display = "block";
    playBtn.style.display = "none";

});

prevSongBtn.addEventListener('click', () => {
    if(playNow === 0) {
        playNow = arrOfSounds.track.length - 1;
    } else {
        playNow -= 1; 
    }
    fillData(playNow);
    audio.play();
    pauseBtn.style.display = "block";
    playBtn.style.display = "none";

});




    


    
    
   