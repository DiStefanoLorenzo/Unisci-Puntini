import { DrawingElement } from "./drawingElement.js";

export class Point extends DrawingElement{

    position = {
        x: 0,
        y: 0
    };


    constructor(
        id: string,
        x: number,
        y: number,
        protected radius: number = 10,
    ){
        super(id);
        this.move(x,y);
        this.radius = radius;
    }

    move(x: number = 0,y: number = 0) {
        this.position.x = x;
        this.position.y = y;
    }
}