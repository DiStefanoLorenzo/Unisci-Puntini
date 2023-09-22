import { DrawingElement } from "./drawingElement.js";
import { Point } from "./point.js";
export class Line extends DrawingElement {
    constructor(id, x, y) {
        // Super
        super(id);
        //
        this.points = [];
        this.points.push();
        this.canvas = document.getElementById("drawingpage");
        this.element = this.canvas.getContext("2d");
    }
    // COSTRUZIONE.
    setStyle() {
        this.element.font = "90% Arial Black";
        this.element.strokeText("Hello World", this.position.x, this.position.y);
    }
    // MODIFICA.
    addPoint(x, y) {
        var id = this.points.length;
        var p = new Point(String(id), x, y);
        this.points.push(p);
    }
    moveLine() {
    }
}
