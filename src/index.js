import { tabs } from "./tabs";

import {generateContent} from "./contentGen";

import {buttonDisable} from "./extraFunctions";

import { countDown } from "./countdownTimer";

// import {validation} from "./validation";


const timeCount = document.getElementById('timeCount');

let startButton = document.getElementById('startButton');

const timeValue = 10;

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

const BACKSPACE = 'Backspace'

const oddKeys = ['Shift','Tab','Alt', 'Enter','CapsLock','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','NumLock','ScrollLock'];



function moveCaretRight(characters, keyPosition){

    caretPosition.left = characters[keyPosition+1].offsetLeft + "px";

    caretPosition.top = characters[keyPosition+1].offsetTop + "px";

}

function moveCaretLeft(characters, keyPosition){

    caretPosition.left = characters[keyPosition-1].offsetLeft + "px";

    caretPosition.top = characters[keyPosition-1].offsetTop + "px";

}

function rightInput(characters, keyPosition){

    characters[keyPosition].style.color = 'var(--font-grey)';

    moveCaretRight(characters, keyPosition);

}

function backspaceUsed(characters, keyPosition){

    characters[keyPosition-1].style.color = 'var(--second-grey)';

    moveCaretLeft(characters, keyPosition);

}

function wrongInput(characters, keyPosition){

    characters[keyPosition].style.color = 'var(--error)';

    moveCaretRight(characters, keyPosition);

}

let caretPosition = caret.style;

let validation = (e) => {

    let inputKey = e.key;

    let characters = characterArray[0].chars;

    let {keyPosition, numberOfAllKeyStrokes, wordCount, errorCount} = globals;
    
    let expectedChar = characters[globals.keyPosition].innerText;

    // console.log(expectedChar, inputKey, keyPosition, "errors = " + errorCount, numberOfAllKeyStrokes, wordCount);

    let validationCondition = numberOfAllKeyStrokes == 0 ? () => {
        
        countDown(timeCount, startButton, validation); 

        
    }: inputKey == expectedChar ? () => {

        rightInput(characters, keyPosition);
        
        let isWordComplete = inputKey == SPACE ? wordCount++ : {};

        isWordComplete;

        keyPosition++;


    } : inputKey == BACKSPACE ? () => {

        backspaceUsed(characters, keyPosition);

        let isWordDeleted = inputKey == SPACE ? wordCount-- : {};

        keyPosition--;

        isWordDeleted;


    } : oddKeys.includes(inputKey) ? () => {


    } : inputKey != expectedChar ? () => {

        wrongInput(characters, keyPosition);

        keyPosition++;
        
        errorCount++;

    } : {};

    validationCondition();

    numberOfAllKeyStrokes++;

    globals = {keyPosition, numberOfAllKeyStrokes, wordCount, errorCount};

}



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
    // debugger;

    startTestChanges();

    document.body.addEventListener('keydown',validation);

});


export {globals};