import * as counters from "../counters.js";
import { DrawingElement } from "./drawingElement.js";
/**
 * @author Lorenzo Di Stefano
 * @version 06.10.2023
 */
export class Eraser extends DrawingElement {
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
        this.element = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    }
    // GETTERS
    getArea(radius = 0, x, y) {
        if (x + radius >= (this.position.x - this.radius * 2 * counters.controls.values.size) &&
            y + radius >= (this.position.y - this.radius * 2 * counters.controls.values.size) &&
            x - radius <= (this.position.x + this.radius * 2 * counters.controls.values.size) &&
            y - radius <= (this.position.y + this.radius * 2 * counters.controls.values.size)) {
            return true;
        }
        else {
            return false;
        }
    }
    // SETTERS
    move(x, y) {
        this.position.x = x;
        this.position.y = y;
        this.element.setAttribute("cx", String(x));
        this.element.setAttribute("cy", String(y));
    }
    // AZIONI
    remove() {
        try {
            this.lines();
            this.pencil();
            this.circles();
        }
        catch (_a) {
        }
    }
    circles() {
        for (var i = 0; i < counters.circles.length; i++) {
            if (this.getArea(counters.circles[i].getRadius(), counters.circles[i].getPoint().getPosition().x, counters.circles[i].getPoint().getPosition().y)) {
                counters.circles[i].remove();
                return;
            }
        }
    }
    lines() {
        for (var i = 0; i < counters.linee.length; i++) {
            for (var ii = 0; ii < counters.linee[i].getPoints().length; ii++) {
                if (this.getArea(0, counters.linee[i].getPoints()[ii].getPosition().x, counters.linee[i].getPoints()[ii].getPosition().y)) {
                    counters.linee[i].remove();
                    return;
                }
            }
        }
    }
    pencil() {
        for (var i = 0; i < counters.pencil.length; i++) {
            for (var ii = 0; ii < counters.pencil[i].getPoints().length; ii++) {
                if (this.getArea(0, counters.pencil[i].getPoints()[ii].getPosition().x, counters.pencil[i].getPoints()[ii].getPosition().y)) {
                    counters.pencil[i].remove();
                    return;
                }
            }
        }
    }
    draw() {
        this.element.setAttribute("cx", String(this.position.x));
        this.element.setAttribute("cy", String(this.position.y));
        this.element.setAttribute("r", String(this.radius * counters.controls.values.size));
        this.element.setAttribute("fill", "blue");
        this.svg.appendChild(this.element);
    }
    unDraw() {
        this.svg.removeChild(this.element);
    }
}
