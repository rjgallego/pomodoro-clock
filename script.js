let remainingSeconds = 10;
let interval = null;

function setTimer(){
    const timerSwitch = document.getElementById('timer-type');
    remainingSeconds = timerSwitch.checked ? 300 : 1500;

    document.getElementById('time').textContent = convertTime();
}

function convertTime(){
    const minutes = parseInt(remainingSeconds / 60);
    const seconds = addLeadingZero(remainingSeconds % 60);

    return `${minutes}:${seconds}` 
}

function addLeadingZero(value){
    return value < 10 ? `0${value}` : value;
}

function startTimer() {

    remainingSeconds -= 1;
    document.getElementById('time').textContent = convertTime();

    interval = setInterval(() => {
        if(remainingSeconds == 1){
            playBeep();
        }
        if(remainingSeconds == 0){
            resetTimer();
            return;
        }
        remainingSeconds -= 1;
        document.getElementById('time').textContent = convertTime();
    }, 1000);
}

function resetTimer() {
    clearInterval(interval);
    
    document.getElementById('start-button').addEventListener('onclick', startTimer)

    setTimer();
}

function playBeep() {
    var audio = new Audio('https://www.soundjay.com/button/sounds/beep-01a.mp3');  
    audio.play();
}