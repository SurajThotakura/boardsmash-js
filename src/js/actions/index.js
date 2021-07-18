import { INITIAL_STATE } from "../data";
import { documentSelector } from "../helpers";
import { handleKeyDownValidation, handleStartBtnClick } from "./eventListeners";
import { globalState } from "./mutations";

window.onload = () => {
    const state = globalState(INITIAL_STATE);
    const startBtn = documentSelector("#startButton");
    const bodyEl = documentSelector("body");
    startBtn.addEventListener("click", () =>
        handleStartBtnClick(startBtn, state)
    );
    bodyEl.addEventListener("keydown", (e) =>
        handleKeyDownValidation(e, state)
    );
};
