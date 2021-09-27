//function for getting the container for all divs and append them
export function appendDiv(divArr:Array<HTMLDivElement>): void{
    const containerDiv = document.getElementById('container') as HTMLDivElement;
    if(containerDiv){
        containerDiv.append(...divArr);
    }else{
        console.error("Couldn't find container div.");
        alert("Couldn't find container div.");
    }    
}