import { partial } from "lodash";

export function buttonDisable(button) {
    button.style.opacity = "0.5";
    button.style.pointerEvents = "none";
}
export function buttonEnnable(button) {
    button.style.opacity = "1";
    button.style.pointerEvents = "auto";
}

export const toggleDisabled = (el, flag = false) => {
    if (flag) {
        el.setAttribute("disabled", flag);
        el.classList.toggle("disabled");
    } else {
        el.removeAttribute("disabled");
        el.classList.toggle("disabled");
    }
};

const querySelector = (target, query) => target.querySelector(query);

export const documentSelector = partial(querySelector, document);

export const getFirstCharacterPositionOfSplittingContent = (
    characterArr,
    pos = "offsetLeft"
) => {
    characterArr[0].chars[0][pos];
};

export const preventSpaceKeyToScroll = (e) => e.preventDefault();

export const getReadableResultText = ({ speed, accuracy }) =>
    `Typing Speed: ${speed} WPM <br /> Accuracy: ${accuracy}%`;
