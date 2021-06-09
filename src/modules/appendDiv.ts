export function appendDiv(divArr:Array<HTMLDivElement>): void{
    const containerDiv = document.getElementById('container');
        containerDiv.append(...divArr);
}