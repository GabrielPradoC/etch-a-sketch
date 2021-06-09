import { draw } from "../index";
export function createCellDiv(): HTMLDivElement {    
    const divEl = document.createElement('div');
    divEl.classList.add('cell');
    divEl.style.opacity = '0';
    divEl.addEventListener('mouseenter', draw);
    return divEl;
}