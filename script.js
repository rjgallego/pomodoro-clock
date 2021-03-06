let remainingSeconds = 1500;
let interval = null;
let running = false;

//Set timer amount in seconds on toggle switch
function setTimer(){
    const timerSwitch = document.getElementById('timer-type');

    if(running){
        timerSwitch.checked = !timerSwitch.checked;
        return;
    }
    remainingSeconds = timerSwitch.checked ? 300 : 1500;

    document.getElementById('time').textContent = convertTime();
}

//Convert total seconds to minutes & seconds
function convertTime(){
    const minutes = parseInt(remainingSeconds / 60);
    const seconds = addLeadingZero(remainingSeconds % 60);

    return `${minutes}:${seconds}` 
}

//Add a 0 to front of minutes if < 10
function addLeadingZero(value){
    return value < 10 ? `0${value}` : value;
}

//Start running the timer countdown
function startTimer() {
    document.getElementById('start-button').onclick = null;
    
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

    running = true;
}

//Clear the interval and reset the timer when pressing reset button
function resetTimer() {
    running = false;
    clearInterval(interval);
    
    document.getElementById('start-button').onclick = startTimer;

    setTimer();
}

function pauseTimer(){
    running = false; 

    clearInterval(interval);

    document.getElementById('start-button').onclick = startTimer;
}

//Play beep noise once timer is at 0
function playBeep() {
    var audio = new Audio('https://www.soundjay.com/button/sounds/beep-01a.mp3');  
    audio.play();
}