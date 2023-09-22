import { DrawingElement } from "./drawingElement.js";
import { Point } from "./point.js";
import { Text } from "./text.js";
export class nmbPoint extends DrawingElement {
    constructor(id, order, x, y) {
        // Super.
        super(id);
        // Oggetti.
        this.point = new Point("nmb" + String(order), x, y);
        this.text = new Text(String(order) + ".", x, y);
    }
}
