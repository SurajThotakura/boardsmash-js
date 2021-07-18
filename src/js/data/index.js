export const SPACE = " ";
export const BACKSPACE = "Backspace";
export const ODD_KEYS = [
    "Shift",
    "Tab",
    "Alt",
    "Enter",
    "CapsLock",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "NumLock",
    "ScrollLock",
];
export const INITIAL_STATE = {
    keyPosition: 0,
    numberOfAllKeyStrokes: 0,
    errorCount: 0,
    wordCount: 0,
    speed: 0,
    accuracy: 0,
    charactersArr: [],
    isTyping: false,
};

export const TIMER_LIMIT = 30 * 1000;
