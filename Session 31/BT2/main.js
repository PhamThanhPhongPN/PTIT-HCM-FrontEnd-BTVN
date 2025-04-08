let click = 0;
function Toggle(){
    if (click == 0){
        document.getElementById("body").style.backgroundColor = "black";
        document.getElementById("header").style.color = "white";
        document.getElementById("text").style.color = "white";
        click = 1;
    } else {
        document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("header").style.color = "black";
        document.getElementById("text").style.color = "black";
        click = 0;
    }
}