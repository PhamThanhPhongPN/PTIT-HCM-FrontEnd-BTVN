function sizeUp() {
    const textEl = document.getElementById("text");
    let currentSize = window.getComputedStyle(textEl).fontSize;
    let newSize = parseInt(currentSize) + 2; 
    textEl.style.fontSize = newSize + "px";
}

function sizeDown() {
    const textEl = document.getElementById("text");
    let currentSize = window.getComputedStyle(textEl).fontSize;
    let newSize = parseInt(currentSize) - 2; 
    if (newSize >= 8) { 
        textEl.style.fontSize = newSize + "px";
    }
}
