// import {paragraph as _paragraph} from 'txtgen';

import { generatePara } from "./paraGen";

import "splitting/dist/splitting.css";

import "splitting/dist/splitting-cells.css";

import Splitting from "splitting";

export function generateContent(contentDiv) {
  const paragraph = generatePara(100);
  // const paragraph = _paragraph();

  contentDiv.innerHTML = paragraph;

  const characterArray = Splitting({
    target: contentDiv,

    by: "chars",

    whitespace: "true",

    key: "null",
  });

  return characterArray;
}
