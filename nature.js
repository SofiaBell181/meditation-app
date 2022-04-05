const btnStart = document.querySelector('#btnStart');

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#player').pause()
})

btnStart.addEventListener('click', () => {
    document.querySelector('#player').play();
    document.querySelector('#myVideo').play();
})

const time = 5;
let amountTime = time * 60;
let numberOfClick = 0;
let timeID;

btnStart.addEventListener('click', () => {
    numberOfClick++;
    if (numberOfClick%2 != 0) {
        btnStart.textContent = 'Pause';
        timeID = setInterval(calculate, 1000);
    }

    else {
        btnStart.textContent = 'Resume';
        clearInterval(timeID);
        document.querySelector('#player').pause();
    }
})



function calculate() {
    const countDown = document.querySelector('#countDown');

    let minute = Math.floor(amountTime/60);
    let second = amountTime%60;


    if (second < 10) {
        second = '0' + second;
    }

    countDown.textContent = `${minute} : ${second}`;
    amountTime--;

    if (amountTime < 0) {
        stopTimer()
        amountTime = 0;
    }

    function stopTimer() {
        clearInterval(timeID);
    }

} 

gsap.from('#container', 1.5, {
    opacity: 0,
    y: -100,
    delay: 1
}) 

gsap.from('#container_audio', 1.5, {
    opacity: 0,
    y: -150,
    delay: 1.8
}) 


gsap.from('button', 1.5, {
    opacity: 0,
    x: -100,
    y: -30,
    stagger: 1,
    delay: 2
}) 
