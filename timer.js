// Timer fields
const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const millisecondElement = document.querySelector('.millisecond');

// Bottons
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');
const newButton = document.querySelector('.new');

// Listeners
startButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10)
});

pauseButton.addEventListener('click', () => {
    clearInterval(interval)
});

stopButton.addEventListener('click', () => {
    clearInterval(interval);
    clearFields();

    disableBtn();
});

newButton.addEventListener('click', () => {
    clearInterval(interval);
    counter++;
    const results = document.querySelector('.result');
    const block = document.createElement('div');
    block.classList.add('results_info');
    block.innerText = `Result: ${counter} - ${hour}:${minute}:${second}:${millisecond}`
    results.append(block);
    clearFields();
    clearInterval(interval);
    interval = setInterval(startTimer, 10)
});

// Varibles

let hour = 0,
    minute = 0,
    second = 0,
    millisecond = 0,
    interval,
    counter = 0,
    disabled = true;

function startTimer() {

    // millisecond
    millisecond ++;
    if (millisecond < 9) {
        millisecondElement.innerText = '0' + millisecond;
    }
    if (millisecond > 9) {
        millisecondElement.innerText = millisecond;
    }
    if (millisecond > 99) {
        second++;
        secondElement.innerText = '0' + second;
        millisecond = 0;
        millisecondElement.innerText = '0' + millisecond;
    }

    // second
    if (second < 9) {
        secondElement.innerText = '0' + second;
    }
    if (second > 9) {
        secondElement.innerText = second;
    }
    if (second > 59) {
        minute++;
        minuteElement.innerText = '0' + minute;
        second = 0;
        secondElement.innerText = '0' + second;
    }

    // Minute
    if (minute > 9) {
        minuteElement.innerText = minute;
    }

    // Hours
    if (hour > 9) {
        minuteElement.innerText = hour;
    }

    newButton.disabled = false;
}

function clearFields() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    hourElement.textContent = '00';
    minuteElement.textContent = '00';
    secondElement.textContent = '00';
    millisecondElement.textContent = '00';
}

function disableBtn() {
    if (disabled) {
        newButton.disabled = true;
    }
}
disableBtn();

/*--------------------------------------*/

const day = document.querySelector('.day');
const hourT = document.querySelector('.hour_t');
const minuteT = document.querySelector('.minute_t');
const seconds = document.querySelector('.seconds');

const titleTimer = document.querySelector('.title_timer');

const startButtonT = document.querySelector('.start_t');

const stopButtonTimer = document.querySelector('.stop_timer');
const reloadButtonTimer = document.querySelector('.reload_timer');

let minuteTimer = 60;
let minuteTBack = 24;
let hourTTimerBack = 1;
let hourTBack = 1;
let titleTimerChang = 'До конца акции 1 день';
const endStock = 'Акция закончилась !!!';
let clearOllData;

day.innerText = hourTBack;
seconds.innerText = minuteTimer;
minuteT.innerText = minuteTBack;
hourT.innerText = hourTTimerBack;
titleTimer.innerText = titleTimerChang;

function puskTimer() {
    minuteTimer--;
    seconds.innerText = minuteTimer;
    if (minuteTimer === 0) {
        minuteTBack--;
        minuteT.innerText = minuteTBack;
        minuteTimer = 60;
        titleTimer.innerText = titleTimerChang;
    }

    if (minuteTBack === 0) {
        hourTTimerBack--;
        hourT.innerText = hourTTimerBack;
        minuteTBack = 24;
    }

    if (hourTTimerBack === 0) {
        hourTBack--;
        day.innerText = hourTBack;
        hourTTimerBack = 1;
    }

    if (hourTBack === 0) {
        titleTimer.innerText = endStock;
        clearInterval(clearOllData);
    }

}

startButtonT.addEventListener('click', () => {
    clearInterval(clearOllData);
    clearOllData = setInterval(puskTimer, 10)
});

stopButtonTimer.addEventListener('click', () => {
    clearInterval(clearOllData)
});

reloadButtonTimer.addEventListener('click', () => {
    clearInterval(clearOllData);
    clearTimer();
});

function clearTimer() {
    minuteTimer = 60;
    minuteTBack = 24;
    hourTTimerBack = 1;
    hourTBack = 1;

    seconds.textContent = '60';
    minuteT.textContent = '24';
    hourT.textContent = '1';
    day.textContent = '1';
    titleTimer.textContent = titleTimerChang;
}












