import './styles.css';

const btnStart = document.querySelector('[data-action=start]');
const btnStop = document.querySelector('[data-action=stop]');
let bodyColor = null;
let timeInterval = null;

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function setRandomColor() {
    bodyColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    document.body.style.background = bodyColor;
    console.log(bodyColor);
};

btnStart.addEventListener('click', onStartClick);
btnStop.addEventListener('click', onStopClick);

function onStartClick() {
    btnStart.disabled = true;
    timeInterval = setInterval(()=>setRandomColor(), 1000);
}

function onStopClick(){
    btnStart.disabled = false;
    clearInterval(timeInterval);
}

