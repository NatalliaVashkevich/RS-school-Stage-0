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
};
});

audio.addEventListener("timeupdate", () => {
    const durationTime = audio.duration;
    const durationMinutes = Math.floor( durationTime / 60);
    const durationSeconds = Math.floor( durationTime % 60);
    if (durationSeconds < 10) {
        durationTimeOnDisplay.textContent = `${durationMinutes}:0${durationSeconds}`;
    } else {
    durationTimeOnDisplay.textContent = `${durationMinutes}:${durationSeconds}`;
}
});

audio.addEventListener("timeupdate", () => {
    const durationTime = audio.duration;
    const currentTime = audio.currentTime;
    const playingTime = (currentTime /durationTime) * 100;
    progressBar.style.width = `${playingTime}%`;
  
});

const arrOfSounds = [
    {
        "img": "../assets/img/Honkcover.jpeg",
        "audio": "../assets/audio/The Rolling Stones – Living In A Ghost Town.mp3",
        "artist": "The Rolling Stones",
        "title": "Living In A Ghost Town",
    },
    {
        "img": "../assets/img/The Beatles.jpeg",
        "audio": "../assets/audio/The Beatles – Now And Then.mp3",
        "artist": "The Beatles",
        "title": "Now And Then",  
    },
];

function fillData() {
    for (let i = 0; i < arrOfSounds.length; i++) {
        const main = document.querySelector("main");
        const image = document.createElement("img");
        image.src = arrOfSounds[i].img;
        main.afterbegin(image);
        


    
    }
};
fillData();
    
    
   