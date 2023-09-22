import {Text} from "./draw/text.js"

var txt;
var menu = document.getElementById("menu") as HTMLElement;
var tools = document.getElementById("tools") as HTMLElement;

var open = false;

function Pulsante(){
    txt = new Text("hello",2,2);
    console.log("Point:"+txt.punto.position.x);

    var c = document.getElementById("drawingpage") as HTMLCanvasElement;
    var ctx = c.getContext("2d")!;
    ctx.moveTo(0,0);
    ctx.lineTo(200,100);
    ctx.stroke();

    open = !open;
    if(open){
        tools.style.display = "none";
        menu.style.display = "block";
    }else{
        tools.style.display = "block";
        menu.style.display = "none";
    }
}

const Buttone = document.getElementById("hamb") as HTMLElement;
Buttone.addEventListener("click", Pulsante);