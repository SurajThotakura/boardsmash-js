export function Timer(callback, timerLimitInMillis, onDone) {
    let timerId = null;
    let _passedTimeLimit = timerLimitInMillis;
    let _limit = timerLimitInMillis;
    let _cb = callback;
    let _doneCb = onDone;

    const startTimer = () => {
        if (_limit <= 0) {
            stopTimer();
            return;
        }
        _limit = _limit - 1000;
        timerId = setTimeout(() => {
            _cb(_limit);
            startTimer();
        }, 1000);
    };
    const restartTimer = () => {
        _limit = _passedTimeLimit;
        startTimer();
    };

    const stopTimer = () => {
        _doneCb();
        clearTimeout(timerId);
    };

    const setOnDone = (cb) => (_doneCb = cb);

    return { timerId, stopTimer, restartTimer, startTimer, setOnDone };
}
