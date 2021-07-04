import {paragraph as _paragraph} from 'txtgen';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";


export function generateContent(a) {
    const paragraph = _paragraph(50);
    a.innerText = paragraph;
    console.log(paragraph);
    const characterArray = Splitting({
        target: a,
        by: 'chars',
        whitespace: 'true',
        key: 'null'
    });
    return characterArray;
}