import { DrawingElement } from "./drawingElement.js";
import { Point } from "./point.js";
import { Text } from "./text.js";
/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */
export class NumberedPoint extends DrawingElement {
    constructor(id, x, y) {
        // Super.
        super(id);
        this.position = {
            x: 0,
            y: 0
        };
        this.position.x = x;
        this.position.y = y;
        this.isRemoved = false;
        // Oggetti.;
        this.text = new Text("." + this.id, this.position.x, this.position.y - 10);
        this.point = new Point(5, "p" + this.id, this.position.x, this.position.y);
    }
    getPoint() {
        return this.point;
    }
    getText() {
        return this.text;
    }
    getIsRemoved() {
        return this.isRemoved;
    }
    move(x, y) {
        this.position.x = x;
        this.position.y = y;
        this.point.move(x, y);
        this.text.move(x, y - 10);
    }
    remove() {
        this.point.remove();
        this.text.remove();
        this.isRemoved = true;
    }
}
