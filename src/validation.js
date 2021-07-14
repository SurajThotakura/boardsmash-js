const SPACE = ' ';

const oddKeys = ['Shift','Tab','Alt', 'Enter','CapsLock','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','NumLock','ScrollLock'];

function rightInput(){
    characters[keyPosition].style.color = 'var(--font-grey)';
    CaretPosition.left = characters[keyPosition+1].offsetLeft + "px";
    caretPosition.top = characters[keyPosition+1].offsetTop + "px";
}

export function validation(Event, characterArray, globals, caret) {
    
    let inputKey = Event.key;

    let characters = characterArray[0].chars;

    let {keyPosition, numberOfAllKeyStrokes, wordCount, errorCount} = globals;
    
    let expectedChar = characters[globals.keyPosition].innerText;

    let caretPosition = caret.style;

    let isCorrectCondition = numberOfAllKeyStrokes == 0 ? countDown(timeCount, startButton, validation) 
        
    : inputKey == expectedChar ? () => {

        rightInput(characters, keyPosition, caretPosition);
        let isWordComplete = inputKey == SPACE ? wordCount++ : {};

    }

    console.log('validation was called');

    return globals;

}