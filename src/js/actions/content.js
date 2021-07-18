import { paragraph as _paragraph } from "txtgen";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

export function generateContent(contentDiv) {
    const paragraph = _paragraph(50);
    contentDiv.innerText = paragraph;

    const characterArray = Splitting({
        target: contentDiv,
        by: "chars",
        whitespace: "true",
        key: Math.random(),
    });
    return characterArray;
}
