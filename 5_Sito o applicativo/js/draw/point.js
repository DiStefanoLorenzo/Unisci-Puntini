import { DrawingElement } from "./drawingElement.js";
/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */
export class Point extends DrawingElement {
    constructor(radius, id, x, y) {
        super(id);
        this.radius = radius;
        this.position = {
            x: 0,
            y: 0
        };
        this.move(x, y);
        this.radius = radius;
        // Costruzione del Point nel CANVAS.
        this.canvas = document.getElementById("drawingpage");
        this.element = this.canvas.getContext("2d");
        this.element.arc(x, y, radius, 0, 2 * Math.PI);
        this.element.stroke();
        // DEBUG
        console.log("Canvas: " + this.canvas.innerHTML);
    }
    move(x = 0, y = 0) {
        this.position.x = x;
        this.position.y = y;
    }
}
