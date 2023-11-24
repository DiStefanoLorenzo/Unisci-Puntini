import * as counters from "../counters.js";
import { DrawingElement } from "./drawingElement.js";
import { Point } from "./point.js";
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
        this.points.push(new Point(1, String(id), x, y));
        this.coordinate = this.points[0].getPosition().x + "," + this.points[0].getPosition().y;
        this.svg = document.getElementById("drawingpage");
        this.element = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    }
    // GETTERS
    getPoints() {
        return this.points;
    }
    // AZIONI
    addPoint(x, y) {
        var id = "lp" + this.points.length;
        this.points.push(new Point(1, String(id), x, y));
        this.coordinate = "";
        for (var i = 0; i < this.points.length; i++) {
            this.points[i].getElement().style.display = "none";
            this.coordinate += " " + this.points[i].getPosition().x + "," + this.points[i].getPosition().y;
        }
        this.draw();
    }
    removePoint(index) {
        this.points[index].remove();
        this.points.splice(index, 1);
        this.coordinate = "";
        for (var i = 0; i < this.points.length; i++) {
            this.coordinate += " " + this.points[i].getPosition().x + "," + this.points[i].getPosition().y;
        }
        this.draw();
    }
    move(index, x, y) {
        this.points[index].getPosition().x = x;
        this.points[index].getPosition().y = y;
        this.points[index].move(x, y);
        this.coordinate = "";
        for (var i = 0; i < this.points.length; i++) {
            this.coordinate += " " + this.points[i].getPosition().x + "," + this.points[i].getPosition().y;
        }
        this.draw();
    }
    remove() {
        for (var i = 0; i < this.points.length; i++) {
            this.points[i].remove();
        }
        this.svg.removeChild(this.element);
    }
    draw() {
        this.element.setAttribute("points", this.coordinate);
        this.element.setAttribute("stroke", this.color);
        this.element.setAttribute("stroke-width", counters.controls.values.size * this.size);
        this.element.setAttribute("fill", "none");
        this.svg.appendChild(this.element);
    }
}
