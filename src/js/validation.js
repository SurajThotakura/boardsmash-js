import { countDown } from './countdownTimer';
const SPACE = ' ';
const BACKSPACE = 'Backspace';
const oddKeys = [
    'Shift',
    'Tab',
    'Alt',
    'Enter',
    'CapsLock',
    'F1',
    'F2',
    'F3',
    'F4',
    'F5',
    'F6',
    'F7',
    'F8',
    'F9',
    'F10',
    'F11',
    'F12',
    'NumLock',
    'ScrollLock',
];
let caretPosition = caret.style;
function moveCaretRight(characters, keyPosition) {
    caretPosition.left = characters[keyPosition + 1].offsetLeft + 'px';
    caretPosition.top = characters[keyPosition + 1].offsetTop + 'px';
}
function moveCaretLeft(characters, keyPosition) {
    caretPosition.left = characters[keyPosition - 1].offsetLeft + 'px';
    caretPosition.top = characters[keyPosition - 1].offsetTop + 'px';
}
function rightInput(characters, keyPosition) {
    characters[keyPosition].style.color = 'var(--font-grey)';
    moveCaretRight(keyPosition);
}
function backspaceUsed(characters, keyPosition) {
    characters[keyPosition - 1].style.color = 'var(--second-grey)';
    moveCaretLeft(keyPosition);
}
function wrongInput(characters, keyPosition) {
    characters[keyPosition].style.color = 'var(--error)';
    moveCaretRight(keyPosition);
}
export function validation(Event, characterArray, globals, caret) {
    // console.log(characterArray);
    let inputKey = Event.key;
    let characters = characterArray[0].chars;
    let { keyPosition, numberOfAllKeyStrokes, wordCount, errorCount } = globals;
    let expectedChar = characters[globals.keyPosition].innerText;
    let validationCondition =
        numberOfAllKeyStrokes > 0
            ? () => {
                  countDown(timeCount, startButton, validation);
              }
            : inputKey == expectedChar
            ? () => {
                  rightInput(characters, keyPosition);
                  let isWordComplete = inputKey == SPACE ? wordCount++ : {};
                  isWordComplete;
                  keyPosition++;
              }
            : inputKey == BACKSPACE
            ? () => {
                  backspaceUsed(characters, keyPosition);
                  let isWordDeleted = inputKey == SPACE ? wordCount-- : {};
                  isWordDeleted;
                  keyPosition--;
              }
            : oddKeys.includes(inputKey)
            ? () => {}
            : inputKey != expectedChar
            ? () => {
                  wrongInput(characters, keyPosition);
                  keyPosition++;
                  errorCount++;
              }
            : {};
    validationCondition();
    numberOfAllKeyStrokes++;
    globals = { keyPosition, numberOfAllKeyStrokes, wordCount, errorCount };
    return globals;
}
