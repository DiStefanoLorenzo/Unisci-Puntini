import { DrawingElement } from "./drawingElement.js";
export class Point extends DrawingElement {
    constructor(id, x, y, radius = 10) {
        super(id);
        this.radius = radius;
        this.position = {
            x: 0,
            y: 0
        };
        this.move(x, y);
        this.radius = radius;
    }
    move(x = 0, y = 0) {
        this.position.x = x;
        this.position.y = y;
    }
}
