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
        this.points.push(new Point(this.size, String(id), x, y));
        this.coordinate = this.points[0].getPosition().x + "," + this.points[0].getPosition().y;
        this.svg = document.getElementById("drawingpage");
        this.element = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    }
    // COSTRUZIONE.
    setStyle() {
        this.element.font = "90% Arial Black";
        this.element.strokeText("Hello World", this.position.x, this.position.y);
    }
    // AZIONI
    addPoint(x, y) {
        var id = "lp" + this.points.length;
        this.points.push(new Point(this.size, String(id), x, y));
        this.coordinate = "";
        for (var point of this.points) {
            this.coordinate += point.getPosition().x + "," + point.getPosition().x + " ";
        }
        //for(var i=this.points.length-1; i>0; i--){
        //    this.coordinate += this.points[i].getPosition().x+","+this.points[i].getPosition().y+" ";
        //}
        this.draw();
    }
    draw() {
        this.element.setAttribute("points", this.coordinate);
        this.element.setAttribute("stroke", this.color);
        this.element.setAttribute("stroke-width", this.size);
        this.element.setAttribute("fill", "none");
        this.svg.appendChild(this.element);
        console.log("Coordinate: " + this.coordinate);
    }
    moveLine() {
    }
}
