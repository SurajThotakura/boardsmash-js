import { paragraph as _paragraph } from 'txtgen';

let tab = document.getElementsByClassName('tab');

let tabContent = document.getElementsByClassName('tabContent');

let content = document.getElementById('content');

const textAreaElement = document.getElementById('type');

const timeCount = document.getElementById('timeCount');

let startButton = document.getElementById('startButton');

let restartButton = document.getElementById('restartButton');

// console.log(textAreaElement);

const timeValue = 30;

let time = timeValue;

let i= 0, j= 0, k= 0, w = 0, speed = 0, accuracy = 0;

const globals = {
    keyPosition: 0,
    numberOfAllKeyStrokes: 0,
    errorCount: 0,
    wordCount: 0,
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

// loop to assign eventListeners to all the tabs
// for (let index = 0; index < tab.length; index++) {
//     const element = tab[index];
//     element.addEventListener('click', () => {
//         clearTabs();
//         openTab(index);
//     });
// }

function generateText(){
    // Generating typing content
    const paragraph = _paragraph(50);
    content.innerHTML = paragraph;
    // console.log(paragraph);

    // To convert all the charecters to lower case
    return globals.generatedContent = content.innerText;
}

function countDown(){
    console.log('countdown started');
    let haha = setInterval(() => {
        // this has a delay of 1s, to compensate it time is shown as 'time-1' and only timeValue-1 intervals are requested.
        if(time>1){
            timeCount.innerHTML = (time-1);
            time--;
        }
        else{
            speed = w*2;
            accuracy = Math.floor((i/k)*100);

            timeCount.style.fontSize = '4rem';
            timeCount.innerHTML = 'Typing Speed: '+ speed + 'WPM' + '</br>Accuracy: ' + accuracy + '%';

            textAreaElement.disabled= true;
            startButton.style.opacity = '1';
            startButton.style.pointerEvents = 'auto';

            clearInterval(haha);

            textAreaElement.removeEventListener('keyup', handleValidation);

            time= timeValue;
            startButton.disabled = false;
            console.log(textAreaElement);
        }
    }, 1000);
}

function resetVariables(){
    i= 0, j= 0, k= 0, w = 0, speed = 0, accuracy = 0;
}

// Verification of the entries (Did not work when outside of the event listner).
const handleValidation = (event) => {
    // b-> inputKey
    //a -> expectedChar
    //w -> wordCount
    //i -> keyPosition
    console.log('called');
    let {keyPosition,numberOfAllKeyStrokes,wordCount,errorCount,generatedContent} = globals;
    const expectedChar = generatedContent[keyPosition];
    const inputKey = event.key;
    // console.log(a, b, keyPosition, "errors = " + j, k, w);
    numberOfAllKeyStrokes++;

    if(inputKey===expectedChar){
        if(inputKey === SPACE){
            wordCount++;
        };
        keyPosition++;
        numberOfAllKeyStrokes++;
    }
    else if(inputKey === 'Backspace'){
        if(inputKey === SPACE){
            wordCount--;
        }
        keyPosition--;
    }
    else if(oddKeys.includes(inputKey)){
    }
    else if (inputKey !== expectedChar ){
        keyPosition++;
        errorCount++;
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
    // console.log(i);

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