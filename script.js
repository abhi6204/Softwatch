let timerdisplay = document.querySelector('.timerdisplay');
let stopbutton = document.getElementById('stopbutton');
let startbutton = document.getElementById('startbutton');
let Resetbutton = document.getElementById('Resetbutton');


let msec = 00;
let secs = 00;
let mins = 00;

let timerid = null;

startbutton.addEventListener('click', function () {
    if (timerid !== null) {
        clearInterval(timerid);
    }
    timerid = setInterval(startTimer, 10);
});

stopbutton.addEventListener('click', function () {
    clearInterval(timerid);
});

Resetbutton.addEventListener('click', function () {
    clearInterval(timerid);
    timerdisplay.innerHTML = `00: 00: 00`;
    msec = secs = mins = 00;
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;

        if (secs == 60) {
            secs = 0;
            mins = mins + 1;
        }
    }


   let msecstring =  msec < 10 ? `0${msec}` : msec;
   let secsString =  secs < 10 ? `0${secs}` : secs;
   let minsstring =  mins < 10 ? `0${mins}` : mins;

    timerdisplay.innerHTML = `${minsstring} :${secsString} : ${msecstring}`;
}