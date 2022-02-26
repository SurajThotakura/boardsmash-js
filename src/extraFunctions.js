export function buttonDisable(button){

    button.style.opacity = '0.5';

    button.style.pointerEvents = 'none';

}

export function buttonEnnable(button){

    button.style.opacity = '1';

    button.style.pointerEvents = 'auto';

}