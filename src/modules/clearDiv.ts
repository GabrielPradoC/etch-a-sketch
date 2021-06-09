export function clearDivChildren(div: HTMLDivElement){
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
}