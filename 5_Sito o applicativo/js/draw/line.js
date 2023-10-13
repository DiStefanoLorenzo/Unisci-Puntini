import { DrawingElement } from "./drawingElement.js";
/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */
export class Line extends DrawingElement {
    constructor(id, x, y) {
        // Super
        super(id);
        //
        this.points = [];
        this.points.push();
        this.svg = document.getElementById("drawingpage");
    }
    // COSTRUZIONE.
    setStyle() {
        this.element.font = "90% Arial Black";
        this.element.strokeText("Hello World", this.position.x, this.position.y);
    }
    // MODIFICA.
    addPoint(x, y) {
        var id = this.points.length;
        //var p = new Point(String(id),x,y);
        //this.points.push(p);
    }
    moveLine() {
    }
}
