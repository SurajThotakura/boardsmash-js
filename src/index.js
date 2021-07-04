import {generateContent} from "./contentGen";

let tab = document.getElementsByClassName('tab');

let tabContent = document.getElementsByClassName('tabContent');

// let content = document.getElementById('content');

const timeCount = document.getElementById('timeCount');

let startButton = document.getElementById('startButton');

let characterArray = 0;

const keystrokeCapture = document.getElementsByTagName('body')[0];

const caret = document.getElementById('caret');

const timeValue = 30;

let time = timeValue;

let globals = {
    keyPosition: 0, // i
    numberOfAllKeyStrokes: 0, //k
    errorCount: 0, // j
    wordCount: 0, // w
    speed: 0,
    accuracy: 0,
    generatedContent: []
}

const SPACE = ' ';
const oddKeys = ['Shift','Tab','Alt'];

// function to clear all the tab contents
function clearTabs() {
    for (let index = 0; index < tabContent.length; index++) {
        document.getElementById('tab'+index+'Content').style.display= 'none';
    }
}

// function to open the specific tab
function openTab(i) {
    document.getElementById('tab'+i+'Content').style.display= 'block';
}

for (let index = 0; index < tab.length; index++) {
    const element = tab[index];
    showTab(element, index);
}

// function to make tabs clickable
function showTab(e,i) {
    e.addEventListener('click', () => {
        clearTabs();
        openTab(i);
    });
}

function countDown(){
    // console.log('countdown started');
    let countdownTimer = setInterval(() => {
        // this has a delay of 1s, to compensate it time is shown as 'time-1' and only timeValue-1 intervals are requested.
        if(time>1){
            timeCount.innerHTML = (time-1);
            time--;
        }
        else{
            let {keyPosition, wordCount, speed, accuracy, numberOfAllKeyStrokes} = globals;
            speed = wordCount*2;
            accuracy = Math.floor((keyPosition/numberOfAllKeyStrokes)*100);

            timeCount.style.fontSize = '4rem';
            timeCount.innerHTML = 'Typing Speed: '+ speed + 'WPM' + '</br>Accuracy: ' + accuracy + '%';
            startButton.style.opacity = '1';
            startButton.style.pointerEvents = 'auto';

            clearInterval(countdownTimer);

            keystrokeCapture.removeEventListener('keydown', handleValidation);
            characterArray = 0;

            time = timeValue;
            startButton.disabled = false;
        }
    }, 1000);
}

function resetVariables(){
    globals.keyPosition= 0, globals.errorCount= 0, globals.numberOfAllKeyStrokes= 0, globals.wordCount = 0, globals.speed = 0, globals.accuracy = 0;
}

// Verification of the entries (Did not work when outside of the event listner).
const handleValidation = (e) => {
    // b -> inputKey
    // a -> expectedChar
    // w -> wordCount
    // i -> keyPosition
    console.log(e.target);
    let characters = characterArray[0].chars;
    let {keyPosition,numberOfAllKeyStrokes,wordCount,errorCount,generatedContent} = globals; // adding this is not allowing updating the variables.
    let expectedChar = characterArray[0].chars[globals.keyPosition].innerText;
    let inputKey = e.key;
    // console.log(globals);
    console.log(expectedChar, inputKey, keyPosition, "errors = " + errorCount, numberOfAllKeyStrokes, wordCount);
    
    if(numberOfAllKeyStrokes == 0){
        countDown();
    }

    numberOfAllKeyStrokes++;

    if(inputKey == expectedChar){
        characterArray[0].chars[globals.keyPosition].style.color = 'var(--font-grey)';
        characters[globals.keyPosition]
        caret.style.left = characters[globals.keyPosition+1].offsetLeft + "px";
        caret.style.top = characters[globals.keyPosition+1].offsetTop + "px";
        if(inputKey == SPACE){
            wordCount++;
        };
        keyPosition++;
    }
    else if(inputKey == 'Backspace'){
        characterArray[0].chars[globals.keyPosition-1].style.color = 'var(--second-grey)';
        caret.style.left = characters[globals.keyPosition-1].offsetLeft + "px";
        caret.style.top = characters[globals.keyPosition-1].offsetTop + "px";
        if(inputKey == SPACE){
            wordCount--;
        }
        keyPosition--;
    }
    else if(oddKeys.includes(inputKey)){
    }
    else if (inputKey != expectedChar ){
        characterArray[0].chars[globals.keyPosition].style.color = 'var(--error)';
        caret.style.left = characters[globals.keyPosition+1].offsetLeft + "px";
        caret.style.top = characters[globals.keyPosition+1].offsetTop + "px";
        keyPosition++;
        errorCount++;
    }

    // populating the globals object with the changed variables
    globals = {keyPosition,numberOfAllKeyStrokes,wordCount,errorCount,generatedContent};
};


// var,function were part of javascript. ES6 let and const -> lack hoisting


window.onload = () => {

    // to clear all the tabs when the page is loaded
    clearTabs();

    // to open the default tab wihch is tab[0]
    openTab(0);
}

function resteContent(){
    content.outerHTML = '<div id="content">Test</div>';
}

function makeContent(){
    resteContent();
    let contentReset = document.getElementById('content');
    characterArray = generateContent(contentReset);
}

startButton.addEventListener('click', () => {
    startButton.style.opacity = '.5';
    startButton.style.pointerEvents = 'none';

    resetVariables();

    makeContent();

    console.log(characterArray)

    timeCount.style.fontSize = '7rem';
    timeCount.innerHTML = timeValue;
    caret.style.left = characterArray[0].chars[0].offsetLeft + "px"
    caret.style.top = characterArray[0].chars[0].offsetTop + "px"
    caret.style.display = "block";

    keystrokeCapture.addEventListener('keydown',handleValidation);
});