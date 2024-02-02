var music = document.querySelector("#player");
var timer = document.querySelector(".timer");

window.onload = function(){
    music.play();
}

// music.addEventListener('timeupdate', (event) => {
//     const currentTime = Math.floor(music.currentTime);
//     minutes = 0;
//     if (currentTime < 10){
//         let zeroes = "0" + currentTime;
//         timer.innerHTML = "00:"+zeroes;
//     }
//     else if(currentTime > 59){
//         let minutes = 1;
//         let seconds = currentTime%60;
//     }
//     else{
//         timer.innerHTML =  minutes + ":"+currentTime;

//     }
// }, false);


// app.js
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
