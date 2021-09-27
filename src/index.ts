//Import for helper functions
import { createDivArr } from './modules/createDivArr';
import { appendDiv } from './modules/appendDiv';
import { clearDivChildren } from './modules/clearDiv';
import { promptForNumber } from './modules/promptForNumber';

//Number of divs to be created and appended on the main container, 16 is the default value on page load
let inputNumber: number = 16;

const containerDiv = document.getElementById(
    'container',
) as HTMLDivElement;
const clearBtn = document.getElementById('clear') as HTMLInputElement;

//Placeholder color
let selectedColor: string = '#000';
let isClicking: boolean = false;

//Add the right grid configuration and append all divs
containerDiv.style.gridTemplateColumns = `repeat(${inputNumber}, 1fr)`;
renderDivElements(inputNumber);

alert('Click on the board to start drawing!');

//Prompt for a new number and calls the render function
clearBtn.addEventListener('click', () => {
    do {
        inputNumber = promptForNumber();
    } while (!`${inputNumber}`.match(/^([1-9]|[1-4][0-9])$/));
    containerDiv.style.gridTemplateColumns = `repeat(${inputNumber}, 1fr)`;
    renderDivElements(inputNumber);
});

//Activates "drawing mode" on mouse down
containerDiv.addEventListener('mousedown', (ev) => {
    ev.preventDefault();
    selectedColor = (document.querySelector('#color') as HTMLInputElement)
        .value;
    isClicking = true;
});

//De-activates "drawing mode" on mouse up
document.addEventListener('mouseup', () => {
    isClicking = false;
});

//Delete all existing divs and append new ones
function renderDivElements(numberOfDivs: number): void {
    clearDivChildren(containerDiv);
    appendDiv(createDivArr(numberOfDivs));
}

//Drawing function
export function draw(): void {
    if (this === containerDiv || isClicking === false) return;
    if (+this.style.opacity < 1)
        this.style.opacity = `${+this.style.opacity + 0.1}`;
    this.style.backgroundColor = selectedColor;
}
