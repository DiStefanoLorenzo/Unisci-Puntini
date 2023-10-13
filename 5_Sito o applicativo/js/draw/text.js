import { DrawingElement } from "./drawingElement.js";
/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */
export class Text extends DrawingElement {
    //punto;
    constructor(id, x, y) {
        super(id);
        this.position.x = x;
        this.position.y = y;
        // Costruzione del Text nel SVG.
        this.svg = document.getElementById("drawingpage");
        this.element = document.createElementNS("http://www.w3.org/2000/svg", "text");
        // Metodi di costruzione.
        this.draw();
    }
    // AZIONI
    move(x, y) {
        this.position.x = x;
        this.position.y = y;
        this.element.setAttribute("x", String(this.position.x));
        this.element.setAttribute("y", String(this.position.y));
    }
    draw() {
        this.element.setAttribute("x", String(this.position.x));
        this.element.setAttribute("y", String(this.position.y));
        this.element.setAttribute("fill", this.color);
        this.element.textContent = this.id;
        this.svg.appendChild(this.element);
    }
    remove() {
        this.svg.removeChild(this.element);
    }
}
