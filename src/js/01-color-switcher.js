let timerId;
const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.querySelector('body')
}; 

refs.stopBtn.setAttribute('disabled', 'true');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const onStartClick = () => {
    refs.startBtn.setAttribute('disabled', 'true');
    refs.stopBtn.removeAttribute('disabled');
    timerId = setInterval(() => { refs.body.style.backgroundColor = getRandomHexColor() }, 1000);  
};

const onStopClick = () => {
    clearInterval(timerId); 
    refs.startBtn.removeAttribute('disabled');
    refs.stopBtn.setAttribute('disabled', 'true');
};

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);