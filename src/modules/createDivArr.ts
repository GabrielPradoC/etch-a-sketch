import { createCellDiv } from "./createDiv";

export function createDivArr(howManyDivs: number = 1): Array<HTMLDivElement>{
    const returnDivArr: Array<HTMLDivElement> = [];
    const squaredInput: number = Math.pow(howManyDivs, 2);
    for (let i = 0; i < squaredInput; i++) {
        const element = createCellDiv();
        returnDivArr.push(element)
    }
    return returnDivArr;
}