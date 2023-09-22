import { Text } from "./draw/text.js";
var txt;
var menu = document.getElementById("menu");
var tools = document.getElementById("tools");
var open = false;
function Pulsante() {
    txt = new Text("hello", 2, 2);
    console.log("Point:" + txt.punto.position.x);
    var c = document.getElementById("drawingpage");
    var ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
    open = !open;
    if (open) {
        tools.style.display = "none";
        menu.style.display = "block";
    }
    else {
        tools.style.display = "block";
        menu.style.display = "none";
    }
}
const Buttone = document.getElementById("hamb");
Buttone.addEventListener("click", Pulsante);
