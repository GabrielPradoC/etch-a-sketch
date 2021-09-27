//Prompts for a number and returns it
export function promptForNumber(): number {
    const num: string = prompt('Enter a number between 1 and 49:', '16');
       return +num; 
}
