import { isEqual, partial } from "lodash";
import { BACKSPACE, ODD_KEYS, SPACE } from "../data";
import { moveCaret } from "./mutations";

export function handleValidation(inputKey, characterArr, state, caretEl) {
    const currentState = state.get();
    const { keyPosition, wordCount, errorCount, numberOfAllKeyStrokes } =
        currentState;

    const characters = characterArr[0].chars;

    const expectedChar = characters[keyPosition].innerText;

    const isInputKeyEqualTo = partial(isEqual, inputKey);

    if (isInputKeyEqualTo(expectedChar)) {
        characters[keyPosition].style.color = "var(--font-grey)";
        const targetLeft = characters[keyPosition + 1].offsetLeft;
        const targetTop = characters[keyPosition + 1].offsetTop;
        moveCaret(caretEl, targetLeft, targetTop);
        if (isInputKeyEqualTo(SPACE)) {
            state.set({ wordCount: wordCount + 1 });
        }
        state.set({ keyPosition: keyPosition + 1 });
    } else if (isInputKeyEqualTo(BACKSPACE)) {
        characters[keyPosition - 1].style.color = "var(--second-grey)";
        const targetLeft = characters[keyPosition - 1].offsetLeft;
        const targetTop = characters[keyPosition - 1].offsetTop;
        moveCaret(caretEl, targetLeft, targetTop);
        state.set({ wordCount: wordCount - 1 });
    } else if (ODD_KEYS.includes(inputKey)) {
        // do nothing for now
    } else if (!isInputKeyEqualTo(expectedChar)) {
        characters[keyPosition].style.color = "var(--error)";
        const targetLeft = characters[keyPosition + 1].offsetLeft;
        const targetTop = characters[keyPosition + 1].offsetTop;
        moveCaret(caretEl, targetLeft, targetTop);
        state.set({ keyPosition: keyPosition + 1, errorCount: errorCount + 1 });
    }
    state.set({ numberOfAllKeyStrokes: numberOfAllKeyStrokes + 1 });
}
