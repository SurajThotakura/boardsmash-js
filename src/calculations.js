import {globals} from './index'

export function calculateSpeed() {

    let {keyPosition, wordCount, speed, accuracy, numberOfAllKeyStrokes} = globals;
    
    speed = wordCount*2;
    
    accuracy = Math.floor((keyPosition/numberOfAllKeyStrokes)*100);

    // console.log(globals);

    return {speed, accuracy};

}