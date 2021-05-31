import { paragraph as _paragraph } from 'txtgen';

let tab = document.getElementsByClassName('tab');

let tabContent = document.getElementsByClassName('tabContent');

let content = document.getElementById('content');

const typeUpdate = document.getElementById('type');

const timeCount = document.getElementById('timeCount');

let startButton = document.getElementById('startButton');

let restartButton = document.getElementById('restartButton');

let smash;

// console.log(typeUpdate);

const timeValue = 30;

let time = timeValue;

let i= 0, j= 0, k= 0, w = 0, speed = 0, accuracy = 0;

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
    return smash = content.innerText;
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

            typeUpdate.disabled= true;
            startButton.style.opacity = '1';
            startButton.style.pointerEvents = 'auto';

            clearInterval(haha);

            // typeUpdate.removeEventListener('mousemove', validation);

            time= timeValue;
            startButton.disabled = false;
            console.log(typeUpdate);
        }
    }, 1000);
}

function resetVariables(){
    i= 0, j= 0, k= 0, w = 0, speed = 0, accuracy = 0;
}

// Verification of the entries (Did not work when outside of the event listner).
// let validation = (e, f) => {
//     let a = f[i];
//     let b = e.key;
//     console.log(a, b, i, "errors = " + j, k, w);
//     k++;
//     if(a==b){
//         if(b == ' '){
//             w++;
//         };
//         i++;
//     }
//     else if(b == 'Backspace'){
//         if(b == ' '){
//             w--;
//         }
//         i--;
//     }
//     else if(b == 'Shift' || b == 'Tab' || b == 'Alt'){
//         console.log('hello you pressed an odd key');
//     }
//     else if (a != b){
//         i++;
//         j++;
//     }
// };

window.onload = () => {
    restartButton.style.display = 'none';
    typeUpdate.disabled= true;

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

    typeUpdate.value = '';
    typeUpdate.disabled= false;
    typeUpdate.focus();
    timeCount.style.fontSize = '7rem';
    timeCount.innerHTML = timeValue;
    countDown();

    // validation
    typeUpdate.addEventListener('keyup', (e) => {
    let a = smash[i];
    let b = e.key;
    console.log(a, b, i, "errors = " + j, k, w);
    k++;
    if(a==b){
        if(b == ' '){
            w++;
        };
        i++;
    }
    else if(b == 'Backspace'){
        if(b == ' '){
            w--;
        }
        i--;
    }
    else if(b == 'Shift' || b == 'Tab' || b == 'Alt'){
        console.log('hello you pressed an odd key');
    }
    else if (a != b){
        i++;
        j++;
    }
    });

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

//     typeUpdate.value = '';
//     typeUpdate.disabled= false;
//     typeUpdate.focus();
//     timeCount.style.fontSize = '7rem';
//     timeCount.innerHTML = timeValue;
//     countDown();

// })