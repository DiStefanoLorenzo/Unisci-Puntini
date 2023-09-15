import {DrawingElement} from "./drawingElement.js"
import {Point} from "./point.js"

export class Text extends DrawingElement{
    punto;

    constructor(
        id,
        x,
        y
    ){
        // Super
        super(id);
        // Point
        this.punto = new Point(x,y,4);
        // Creazione elemento HTML
        this.element = document.createElement("text");
        this.element.id = this.id;
        this.SetStyle();
        document.getElementById("drawingpage").appendChild(this.element);
    }

    SetStyle(){
        this.element.style.fontFamily = "Verdana";
        this.element.style.fill = "#000000";
        this.element.innerHTML = "testo";
        this.element.style.fontSize = 2;
        
    }
}