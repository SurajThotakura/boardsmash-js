import { generateContent } from "./content";
import { TIMER_LIMIT } from "../data";
import {
    documentSelector,
    getReadableResultText,
    preventSpaceKeyToScroll,
    toggleDisabled,
} from "../helpers";
import { resetCaretEl, setTimerEl } from "./mutations";
import { getResult } from "./result";
import { Timer } from "./timer";
import { handleValidation } from "./validation";

export const handleStartBtnClick = (startBtnEl, state) => {
    const timerEl = documentSelector("#timeCount");
    const caretEl = documentSelector("#caret");
    const contentEl = documentSelector("#content");
    const characterArray = generateContent(contentEl);
    const timer = Timer(
        (time) => setTimerEl(timerEl, time / 1000),
        TIMER_LIMIT
    );

    timer.setOnDone(() => {
        const result = getResult(state);
        setTimerEl(timerEl, getReadableResultText(result), "4rem");
        toggleDisabled(startBtnEl, false);
        state.set({ isTyping: false });
    });

    toggleDisabled(startBtnEl, true);
    state.reset();
    state.set({ charactersArr: [...characterArray], isTyping: true });
    resetCaretEl(caretEl, characterArray);
    setTimerEl(timerEl, TIMER_LIMIT / 1000, "7rem");
    timer.startTimer();
};

export const handleKeyDownValidation = (e, state) => {
    const currentState = state.get();
    const { isTyping, charactersArr } = currentState;
    if (!isTyping) {
        return;
    }
    const caretEl = documentSelector("#caret");
    preventSpaceKeyToScroll(e);
    const inputKey = e.key;
    handleValidation(inputKey, charactersArr, state, caretEl);
};
