import { DrawingElement } from "./drawingElement.js";
/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */
export class Text extends DrawingElement {
    //punto;
    constructor(id, x, y) {
        // Super
        super(id);
        this.canvas = document.getElementById("drawingpage");
        // Point
        //this.punto = new Point("0",x,y);
        // Creazione elemento HTML
        this.element = this.canvas.getContext("2d");
        //this.element.id = this.id;
        this.setStyle();
    }
    setStyle() {
        this.element.font = "90% Arial Black";
        this.element.strokeText("Hello World", this.position.x, this.position.y);
    }
}
