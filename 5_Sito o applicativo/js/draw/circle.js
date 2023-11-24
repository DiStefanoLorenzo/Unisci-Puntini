import { DrawingElement } from "./drawingElement.js";
import { Point } from "./point.js";
/**
 * @author Lorenzo Di Stefano
 * @version 24.11.2023
 */
export class Circle extends DrawingElement {
    constructor(id, x, y) {
        // Super
        super(id);
        //
        this.position.x = x;
        this.position.y = y;
        this.point = new Point(1, String(id), x, y);
        this.point.getElement().style.display = "none";
        this.svg = document.getElementById("drawingpage");
        this.element = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.draw();
    }
    // GETTERS
    getPoints() {
        return this.point;
    }
    getRadius(x, y) {
        var deltaX = Math.abs(this.point.position.x - x);
        var deltaY = Math.abs(this.point.position.y - y);
        this.radius = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
        return this.radius;
    }
    // AZIONI
    preview(x, y) {
        this.element.setAttribute("r", String(this.getRadius(x, y)));
    }
    draw() {
        this.element.setAttribute("cx", String(this.position.x));
        this.element.setAttribute("cy", String(this.position.y));
        this.element.setAttribute("r", String(0));
        this.element.setAttribute("fill", this.color);
        this.svg.appendChild(this.element);
    }
}
