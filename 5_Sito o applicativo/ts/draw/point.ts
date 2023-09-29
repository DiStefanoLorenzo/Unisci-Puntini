import { DrawingElement } from "./drawingElement.js";

/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */

export class Point extends DrawingElement{

    position = {
        x: 0,
        y: 0
    };


    constructor(
        protected radius: number,
        id: string,
        x: number,
        y: number
    ){
        super(id);
        this.move(x,y);
        this.radius = radius;
        // Costruzione del Point nel CANVAS.
        this.canvas = document.getElementById("drawingpage") as HTMLCanvasElement;
        this.element = this.canvas.getContext("2d")!;
        this.element.arc(x,y,radius,0,2*Math.PI);
        this.element.stroke();
        // DEBUG
        console.log("Canvas: "+this.canvas.innerHTML);
    }

    move(x: number = 0,y: number = 0) {
        this.position.x = x;
        this.position.y = y;
    }
}