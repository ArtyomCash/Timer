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
const timerMinutes = document.querySelector('.minute_timer');
const hourTimer = document.querySelector('.hour_timer');
const dayTimer = document.querySelector('.day_timer');
const titleTimer = document.querySelector('.title_timer');

const puskButton = document.querySelector('.pusk');
const stopButtonTimer = document.querySelector('.stop_timer');
const reloadButtonTimer = document.querySelector('.reload_timer');

let minuteTimer = 60;
let hourTimerBack = 24;
let dayTimerTimerBack = 1;
let titleTimerChang = 'До конца акции 1 день';
const endStock = 'Акция закончилась !!!';
let clearOllData;

timerMinutes.innerText = minuteTimer;
hourTimer.innerText = hourTimerBack;
dayTimer.innerText = dayTimerTimerBack;
titleTimer.innerText = titleTimerChang;

function puskTimer() {
    minuteTimer--;
    timerMinutes.innerText = minuteTimer;
    if (minuteTimer === 0) {
        hourTimerBack--;
        hourTimer.innerText = hourTimerBack;
        minuteTimer = 60;
        titleTimer.innerText = titleTimerChang;
    }

    if (hourTimerBack === 0) {
        dayTimerTimerBack--;
        dayTimer.innerText = dayTimerTimerBack;
        hourTimerBack = 24;
    }

    if (dayTimerTimerBack < 0) {
        clearInterval(clearOllData);
        titleTimer.innerText = endStock;
        dayTimer.innerText = 0;
    }

}

puskButton.addEventListener('click', () => {
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
    hourTimerBack = 24;
    dayTimerTimerBack = 1;

    timerMinutes.textContent = '60';
    hourTimer.textContent = '24';
    dayTimer.textContent = '1';
    titleTimer.textContent = titleTimerChang;
}












