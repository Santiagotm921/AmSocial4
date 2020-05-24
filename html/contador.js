window.onload = updateClock;

var totalTime = 30;
var audio = new Audio();

function updateClock() {
    document.getElementById('countdown').innerHTML = totalTime + 's';
    if (totalTime == 0) {
        console.log('Final');

        function sound() {
            audio.src = "/Alarma.mp3"
            audio.play();
        }
        sound();

    } else {
        totalTime -= 1;
        setTimeout("updateClock()", 1000);
    }
}

