var music = document.querySelector("#player");
var timer = document.querySelector(".timer");

document.addEventListener('DOMContentLoaded', function () {
    setInterval(function () {
        timer.innerText = formatTime(music.currentTime);
    }, 1000);

    function formatTime(timeInSeconds) {
        const minutes = "0" + Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
});

function change(x){
    if (music.paused == true) {
        music.play();
        x.classList.remove('fa-play');
        x.classList.add('fa-pause');
    }
    else{
        music.pause();
        x.classList.add('fa-play');
        x.classList.remove('fa-pause');
    }

}