import * as counters from "../counters.js";
/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */
export class DrawingElement {
    constructor(id) {
        this.id = id;
        this.position = {
            x: 0,
            y: 0
        };
        this.svg = document.getElementById("drawingpage");
        this.width = 0;
        this.height = 0;
        this.size = 2;
        this.color = counters.controls.values.color;
        this.visible = true;
    }
    getElement() {
        return this.element;
    }
}
