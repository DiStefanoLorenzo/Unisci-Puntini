import { DrawingElement } from "./drawingElement.js";
/**
 * @author Lorenzo Di Stefano
 * @version 06.10.2023
 */
export class Pencil extends DrawingElement {
    constructor(radius, id, x, y) {
        super(id);
        this.radius = radius;
        this.position = {
            x: 0,
            y: 0
        };
        this.position.x = x;
        this.position.y = y;
        this.radius = radius;
        // Costruzione del Point nel CANVAS.
        this.svg = document.getElementById("drawingpage");
        this.element.beginPath();
        this.element.arc(x, y, radius, 0, 2 * Math.PI);
        this.element.fill();
        console.log("Eraser: " + this.position.x + "," + this.position.y);
    }
    // AZIONI
    move(x, y) {
        this.position.x = x;
        this.position.y = y;
    }
}
