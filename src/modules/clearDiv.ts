//Delete all child elements from a div
export function clearDivChildren(div: HTMLDivElement): void{
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
}