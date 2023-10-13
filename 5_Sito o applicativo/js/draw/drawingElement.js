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
        this.layer = 1;
        this.size = 1;
        this.color = "black";
        this.visible = true;
    }
}
