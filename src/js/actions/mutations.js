import { getFirstCharacterPositionOfSplittingContent } from "../helpers";

export function globalState(initialState) {
    let _initialState = initialState;
    let state = initialState;

    function get() {
        return { ...state };
    }

    function set(newState) {
        state = { ...state, ...newState };
    }

    function reset() {
        state = { ..._initialState };
        return { ...state };
    }

    return { get, set, reset };
}

export function setTimerEl(timerEl, innerHTML, fontSize) {
    timerEl.innerHTML = innerHTML;
    timerEl.style.fontSize = fontSize;
}

export function resetCaretEl(caretEl, characterArray) {
    caretEl.style.left =
        getFirstCharacterPositionOfSplittingContent(
            characterArray,
            "offsetLeft"
        ) + "px";
    caretEl.style.top =
        getFirstCharacterPositionOfSplittingContent(
            characterArray,
            "offsetTop"
        ) + "px";
    caretEl.style.display = "block";
}

export function moveCaret(caretEl, targetLeft, targetTop) {
    const caretStyle = caretEl.style;
    caretStyle.left = targetLeft + "px";
    caretStyle.top = targetTop + "px";
}
