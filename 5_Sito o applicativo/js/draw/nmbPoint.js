import { DrawingElement } from "./drawingElement.js";
import { Text } from "./text.js";
/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */
export class nmbPoint extends DrawingElement {
    constructor(id, order, x, y) {
        // Super.
        super(id);
        // Oggetti.
        //this.point = new Point("nmb"+String(order),x,y);
        this.text = new Text(String(order) + ".", x, y);
    }
}
