import { tabs } from "./tabs";

import {generateContent} from "./contentGen";

import {buttonDisable} from "./extraFunctions";

import {buttonEnnable} from "./extraFunctions";

import { countDown } from "./countdownTimer";


const timeValue = 10;

const timeCount = document.getElementById('timeCount');

let startButton = document.getElementById('startButton');

let characterArray;

const caret = document.getElementById('caret');

let globals = {
    keyPosition: 0,
    numberOfAllKeyStrokes: 0,
    errorCount: 0,
    wordCount: 0,
    speed: 0,
    accuracy: 0,
}

const SPACE = ' ';

const oddKeys = ['Shift','Tab','Alt', 'Enter','CapsLock','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','NumLock','ScrollLock'];


// Verification of the entries (Did not work when outside of the event listner).
const validation = (e) => {

    console.log(e.target);
    let characters = characterArray[0].chars;
    let {keyPosition,numberOfAllKeyStrokes,wordCount,errorCount,generatedContent} = globals; // adding this is not allowing updating the variables.
    let expectedChar = characters[globals.keyPosition].innerText;
    let inputKey = e.key;
    // console.log(globals);
    console.log(expectedChar, inputKey, keyPosition, "errors = " + errorCount, numberOfAllKeyStrokes, wordCount);
    
    if(numberOfAllKeyStrokes == 0){
        countDown(timeCount, startButton, validation);
    }

    numberOfAllKeyStrokes++;

    if(inputKey == expectedChar){
        characters[keyPosition].style.color = 'var(--font-grey)';
        caret.style.left = characters[keyPosition+1].offsetLeft + "px";
        caret.style.top = characters[keyPosition+1].offsetTop + "px";
        if(inputKey == SPACE){
            wordCount++;
        };
        keyPosition++;
    }
    else if(inputKey == 'Backspace'){
        characters[keyPosition-1].style.color = 'var(--second-grey)';
        caret.style.left = characters[keyPosition-1].offsetLeft + "px";
        caret.style.top = characters[keyPosition-1].offsetTop + "px";
        if(inputKey == SPACE){
            wordCount--;
        }
        keyPosition--;
    }
    else if(oddKeys.includes(inputKey)){
    }
    else if (inputKey != expectedChar ){
        characters[keyPosition].style.color = 'var(--error)';
        caret.style.left = characters[keyPosition+1].offsetLeft + "px";
        caret.style.top = characters[keyPosition+1].offsetTop + "px";
        keyPosition++;
        errorCount++;
    }

    // populating the globals object with the changed variables
    globals = {keyPosition,numberOfAllKeyStrokes,wordCount,errorCount,generatedContent};
};


function resetVariables(){
    globals.keyPosition= 0, globals.errorCount= 0, globals.numberOfAllKeyStrokes= 0, globals.wordCount = 0, globals.speed = 0, globals.accuracy = 0;
}

function resetContent(){

    content.outerHTML = '<div id="content">Test</div>';

}

function makeContent(){

    resetContent();

    let contentReset = document.getElementById('content');

    characterArray = generateContent(contentReset);

}

function timerReset(){

    timeCount.style.fontSize = '7rem';

    timeCount.innerHTML = timeValue;

}

function caretReset(){

    caret.style.left = characterArray[0].chars[0].offsetLeft + "px"

    caret.style.top = characterArray[0].chars[0].offsetTop + "px"
    
    caret.style.display = "block";

}

function startTestChanges(){
    
    buttonDisable(startButton);
    
    resetVariables();
    
    makeContent();
    
    timerReset();
    
    caretReset();
}


window.onload = () => {

    let computeTabs = tabs('tab', 'tabContent');

}

startButton.addEventListener('click', () => {
    
    startTestChanges();
    
    document.body.addEventListener('keydown',validation);

});


export {globals};