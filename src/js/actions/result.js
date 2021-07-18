import { getAccuracy, getSpeed } from "../calculations";

export const getResult = (state) => {
    const currentState = state.get();
    const { wordCount, keyPosition, numberOfAllKeyStrokes } = currentState;
    const calculatedSpeed = getSpeed(wordCount);
    const calculatedAccuracy = getAccuracy({
        keyPosition,
        numberOfAllKeyStrokes,
    });
    state.set({ speed: calculatedSpeed, accuracy: calculatedAccuracy });
    return { speed: calculatedSpeed, accuracy: calculatedAccuracy };
};
