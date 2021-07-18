import { TIME_VALUE } from "../data";

export const getTimeValue = () => TIME_VALUE;

export const getSpeed = (wordCount) => wordCount * 2;

export const getAccuracy = ({ keyPosition, numberOfAllKeyStrokes }) =>
    Math.floor((keyPosition / numberOfAllKeyStrokes) * 100);
