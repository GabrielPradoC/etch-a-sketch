(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};(()=>{e.d({},{i:()=>d});var t=16,n=document.getElementById("container"),o=document.getElementById("clear"),r="#000",i=!1;function a(e){!function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(n),function(e){var t=document.getElementById("container");t.append.apply(t,e)}(function(e){void 0===e&&(e=1);for(var t,n=[],o=Math.pow(e,2),r=0;r<o;r++){var i=(t=void 0,(t=document.createElement("div")).classList.add("cell"),t.style.opacity="0",t.addEventListener("mouseenter",d),t);n.push(i)}return n}(e))}function d(){this!==n&&!1!==i&&(+this.style.opacity<1&&(this.style.opacity=""+(+this.style.opacity+.1)),this.style.backgroundColor=r)}n.style.gridTemplateColumns="repeat("+t+", 1fr)",a(t),alert("Click on the board to start drawing!"),o.addEventListener("click",(function(){do{void 0,e=prompt("Enter a number between 1 and 49:","16"),t=+e}while(!(""+t).match(/^([1-9]|[1-4][0-9])$/));var e;n.style.gridTemplateColumns="repeat("+t+", 1fr)",a(t)})),n.addEventListener("mousedown",(function(e){e.preventDefault(),r=document.querySelector("#color").value,i=!0})),document.addEventListener("mouseup",(function(){i=!1}))})()})();