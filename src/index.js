import { paragraph as _paragraph } from 'txtgen';

let tab = document.getElementsByClassName('tab');

let tabContent = document.getElementsByClassName('tabContent');

let content = document.getElementById('content');

const textAreaElement = document.getElementById('type');

const timeCount = document.getElementById('timeCount');

let startButton = document.getElementById('startButton');

let restartButton = document.getElementById('restartButton');

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

function generateText(){
    // Generating typing content
    const paragraph = _paragraph(50);
    content.innerHTML = paragraph;

    // To convert all the characters to lower case
    return globals.generatedContent = content.innerText;
}

function countDown(){
    // console.log('countdown started');
    let haha = setInterval(() => {
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

            textAreaElement.disabled= true;
            startButton.style.opacity = '1';
            startButton.style.pointerEvents = 'auto';

            clearInterval(haha);

            textAreaElement.removeEventListener('keyup', handleValidation);

            time = timeValue;
            startButton.disabled = false;
        }
    }, 1000);
}

function resetVariables(){
    globals.keyPosition= 0, globals.errorCount= 0, globals.numberOfAllKeyStrokes= 0, globals.wordCount = 0, globals.speed = 0, globals.accuracy = 0;
}

// Verification of the entries (Did not work when outside of the event listner).
const handleValidation = (event) => {
    // b -> inputKey
    // a -> expectedChar
    // w -> wordCount
    // i -> keyPosition
    // let {keyPosition,numberOfAllKeyStrokes,wordCount,errorCount,generatedContent} = globals; // adding this is not allowing updating the variables.
    let expectedChar = globals.generatedContent[globals.keyPosition];
    let inputKey = event.key;
    // console.log(globals);
    // console.log(globals.expectedChar, globals.inputKey, globals.keyPosition, "errors = " + globals.errorCount, globals.numberOfAllKeyStrokes, globals.wordCount);
    
    globals.numberOfAllKeyStrokes++;

    if(inputKey == expectedChar){
        if(inputKey == SPACE){
            globals.wordCount++;
        };
        globals.keyPosition++;
    }
    else if(inputKey == 'Backspace'){
        if(inputKey == SPACE){
            globals.wordCount--;
        }
        globals.keyPosition--;
    }
    else if(oddKeys.includes(inputKey)){
    }
    else if (inputKey != expectedChar ){
        globals.keyPosition++;
        globals.errorCount++;
    }
};


// var,function were part of javascript. ES6 let and const -> lack hoisting


window.onload = () => {
    restartButton.style.display = 'none';
    textAreaElement.disabled= true;

    // generateText();

    // to clear all the tabs when the page is loaded
    clearTabs();

    // to open the default tab wihch is tab[0]
    openTab(0);
}

startButton.addEventListener('click', () => {
    // console.log('test started');
    startButton.style.opacity = '.5';
    startButton.style.pointerEvents = 'none';

    // console.log('yo this is the thing'+ smash);
    resetVariables();
    // console.log(globals);

    generateText();

    textAreaElement.value = '';
    textAreaElement.disabled= false;
    textAreaElement.focus();
    timeCount.style.fontSize = '7rem';
    timeCount.innerHTML = timeValue;
    countDown();

    // validation
    textAreaElement.addEventListener('keyup',handleValidation);

});


// Tried to seperate the event listner for validation, did not work.
// restartButton.addEventListener('click', () => {
//     console.log('restarted test');
//     restartButton.style.pointerEvents = 'none';
//     restartButton.style.opacity = '.5';
//     resetVariables();

//     // Generating typing content
//     const paragraph = _paragraph(50);
//     content.innerHTML = paragraph;
//     console.log(paragraph);

//     // To convert all the charecters to lower case
//     let smash = content.innerText;

//     textAreaElement.value = '';
//     textAreaElement.disabled= false;
//     textAreaElement.focus();
//     timeCount.style.fontSize = '7rem';
//     timeCount.innerHTML = timeValue;
//     countDown();

// })