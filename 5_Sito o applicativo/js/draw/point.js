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
        this.position.x = x;
        this.position.y = y;
        this.radius = radius;
        this.isMoving = false;
        // Costruzione del Point nel SVG.
        this.svg = document.getElementById("drawingpage");
        this.element = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        // Metodi di costruzione.
        this.draw();
    }
    // GETTERS
    getIsMoving() {
        return this.isMoving;
    }
    getPosition() {
        return this.position;
    }
    // SETTERS
    setIsMoving(value) {
        this.isMoving = value;
    }
    setId(value) {
        if (value > 0) {
            this.id = "p" + value;
        }
    }
    // CONTROLLI
    checkIsMoving(x, y) {
        if (x >= (this.position.x - this.radius * 2) &&
            y >= (this.position.y - this.radius * 2) &&
            x <= (this.position.x + this.radius * 2) &&
            y <= (this.position.y + this.radius * 2)) {
            this.isMoving = true;
        }
        else {
            this.isMoving = false;
        }
    }
    // AZIONI
    move(x, y) {
        this.position.x = x;
        this.position.y = y;
        this.element.setAttribute("cx", String(this.position.x));
        this.element.setAttribute("cy", String(this.position.y));
    }
    draw() {
        this.element.setAttribute("cx", String(this.position.x));
        this.element.setAttribute("cy", String(this.position.y));
        this.element.setAttribute("r", String(this.radius));
        this.element.setAttribute("fill", this.color);
        this.svg.appendChild(this.element);
    }
    remove() {
        try {
            this.svg.removeChild(this.element);
        }
        catch (_a) {
        }
    }
}
