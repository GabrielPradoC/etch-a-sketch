import { createDivArr } from './modules/createDivArr';
import { appendDiv } from './modules/appendDiv';
import { clearDivChildren } from './modules/clearDiv';
let inputNumber = 16;
export const containerDiv = document.getElementById(
    'container',
) as HTMLDivElement;
const clearBtn = document.getElementById('clear') as HTMLInputElement;
let selectedColor: string = '#000';
let isClicking: boolean = false;
containerDiv.style.gridTemplateColumns = `repeat(${inputNumber}, 1fr)`;
renderDivElements(inputNumber);
alert('Click on the board to start drawing!');

clearBtn.addEventListener('click', () => {
    do {
        inputNumber = +promptForNumber();
    } while (!`${inputNumber}`.match(/^([1-9]|[1-4][0-9])$/));
    containerDiv.style.gridTemplateColumns = `repeat(${inputNumber}, 1fr)`;
    renderDivElements(inputNumber);
});

containerDiv.addEventListener('mousedown', (ev) => {
    ev.preventDefault();
    selectedColor = (document.querySelector('#color') as HTMLInputElement)
        .value;
    isClicking = true;
});

document.addEventListener('mouseup', () => {
    isClicking = false;
});

function renderDivElements(numberOfDivs: number): void {
    clearDivChildren(containerDiv);
    appendDiv(createDivArr(numberOfDivs));
}

function promptForNumber() {
    const num = prompt('Enter a number between 1 and 49:', '16');
    return num;
}

export function draw(): void {
    if (this === containerDiv || isClicking === false) return;
    if (+this.style.opacity < 1)
        this.style.opacity = `${+this.style.opacity + 0.1}`;
    this.style.backgroundColor = selectedColor;
}
