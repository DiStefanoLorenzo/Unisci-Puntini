import { DrawingElement } from "./drawingElement.js";
import { Point } from "./point.js";
export class Text extends DrawingElement {
    constructor(id, x, y) {
        // Super
        super(id);
        this.canvas = document.getElementById("drawingpage");
        // Point
        this.punto = new Point("0", x, y);
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
