import { DrawingElement } from "./drawingElement.js";

/**
 * @author Lorenzo Di Stefano
 * @version 06.10.2023
 */

export class Eraser extends DrawingElement{

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
        this.position.x = x;
        this.position.y = y;
        this.radius = radius;
        // Costruzione del Point nel CANVAS.
        this.svg = document.getElementById("drawingpage") as HTMLElement;
        this.element.beginPath();
        this.element.arc(x,y,radius,0,2*Math.PI);
        this.element.fill();

        console.log("Eraser: "+this.position.x+","+this.position.y);
    }

    // AZIONI

    move(x:number, y:number): void{
        this.element.clearRect(this.position.x -this.radius,this.position.y-this.radius, this.radius*2.3, this.radius*2.3);
        this.position.x = x;
        this.position.y = y;
    }
}