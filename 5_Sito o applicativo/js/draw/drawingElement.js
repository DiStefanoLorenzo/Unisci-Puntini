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
        this.canvas = document.getElementById("drawingpage");
        this.element = this.canvas.getContext("2d");
        this.width = 0;
        this.height = 0;
        this.layer = 1;
    }
}
