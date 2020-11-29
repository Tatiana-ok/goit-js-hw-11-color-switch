const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const body = document.querySelector('body');

startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', stopChangeColor);

let intId = '';

stopBtn.setAttribute('disabled', true);

function changeColor() {
    intId = setInterval(() => {
        const resultColor = colors[randomIntegerFromInterval(0,5)];
        document.body.style.background = resultColor;
    }, 1000);
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled', false);
};

function stopChangeColor() {
    clearInterval(intId);
    startBtn.removeAttribute('disabled', false);
    stopBtn.setAttribute('disabled', true);
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

