import { createCellDiv } from "./createDiv";

//Handle how many divs will be created and return them all in an array
export function createDivArr(howManyDivs: number = 1): Array<HTMLDivElement>{
    const returnDivArr: Array<HTMLDivElement> = [];
    //Using 2 because the user input is only for 1 side of the square
    //We need the right number to fill the area of the main square
    //Since it's a square it's equal to input²
    const squaredInput: number = Math.pow(howManyDivs, 2);
    for (let i = 0; i < squaredInput; i++) {
        const element : HTMLDivElement = createCellDiv();
        returnDivArr.push(element);
    }
    return returnDivArr;
}