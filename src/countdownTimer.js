import { calculateSpeed } from "./calculations";

import { buttonEnnable } from "./extraFunctions";


const timeValue = 30;

let time = timeValue;

let countdownTimer;

function timeCountDecrease(timeDiv){

    timeDiv.innerHTML = (time-1);

    time--;

}


function displayResult(timeDiv, result){

    let {speed , accuracy} = result;

    timeDiv.style.fontSize = '4rem';

    timeDiv.innerHTML = 'Typing Speed: '+ speed + 'WPM' + '</br>Accuracy: ' + accuracy + '%';

}


function stopTimer(timeDiv, startButton, validation){

    const result = calculateSpeed();

    displayResult(timeDiv, result);
    
    clearInterval(countdownTimer);

    buttonEnnable(startButton);

    document.body.removeEventListener('keydown', validation);

    time = timeValue;

}

export function countDown(timeDiv, startButton, validation){

    countdownTimer = setInterval( function(){
        
        return time>1 ? timeCountDecrease(timeDiv) : stopTimer(timeDiv, startButton, validation);

    }, 1000);

}

export function stopTest(timeDiv, startButton, validation){

    stopTimer(timeDiv, startButton, validation);

}

export {time}