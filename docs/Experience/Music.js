export default class MusicPlayer {
    constructor() {
        this.myAudio = document.getElementById("myAudio");
        this.isPlaying = false;
    
        this.playButton = document.getElementById("playButton");
        this.playIcon = document.getElementById("playIcon");
        this.pauseIcon = document.getElementById("pauseIcon");
        this.toggleCircle = document.querySelector(".music-toggle-circle");
    
        this.setEventListeners();
    }
  
    setEventListeners() {
        this.playButton.addEventListener("click", () => {
            this.togglePlay();
        });
  
        this.myAudio.onplaying = () => {
            this.isPlaying = true;
            this.toggleCircle.classList.add("slide");
            this.playIcon.style.display = "none"; // hide the play icon
            this.pauseIcon.style.display = "block"; // show the pause icon
        };
  
        this.myAudio.onpause = () => {
            this.isPlaying = false;
            this.toggleCircle.classList.remove("slide");
            this.playIcon.style.display = "block"; // show the play icon
            this.pauseIcon.style.display = "none"; // hide the pause icon
        };
    }
  
    togglePlay() {
        this.isPlaying ? this.myAudio.pause() : this.myAudio.play();
    }
}
