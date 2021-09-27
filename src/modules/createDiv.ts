import { draw } from "../index";

//Create one div and returns it, the div contains one event listener linked to the draw function
export function createCellDiv(): HTMLDivElement {    
    const divEl: HTMLDivElement = document.createElement('div');
    divEl.classList.add('cell');
    divEl.style.opacity = '0';
    divEl.addEventListener('mouseenter', draw);
    return divEl;
}