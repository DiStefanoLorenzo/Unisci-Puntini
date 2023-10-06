import { DrawingElement } from "./drawingElement.js";

/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */

export class Point extends DrawingElement{
    isMoving: boolean;

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
        this.isMoving = false;
        // Costruzione del Point nel CANVAS.
        this.canvas = document.getElementById("drawingpage") as HTMLCanvasElement;
        this.element = this.canvas.getContext("2d")!;
        this.element.beginPath();
        this.element.arc(x,y,radius,0,2*Math.PI);
        this.element.fill();

        console.log("Point: "+this.position.x+","+this.position.y);
    }

    // GETTERS

    getIsMoving():boolean {
        return this.isMoving;
    }

    // CONTROLLI

    checkIsMoving(x: number,y: number): void {
        //y -= this.radius;
        if(
            x >= (this.position.x - this.radius*2) &&
            y >= (this.position.y - this.radius*2) &&
            x <= (this.position.x + this.radius*2) &&
            y <= (this.position.y + this.radius*2)
        ){
            console.log("L'oggetto è stato selezionato " + this.id);
            this.isMoving = true;
        }else{
            this.isMoving = false;

        }
    }

    // AZIONI

    move(x:number, y:number): void{
        this.element.clearRect(this.position.x -this.radius*1.2,this.position.y-this.radius, this.radius*3, this.radius*3);
        this.position.x = x;
        this.position.y = y;
        this.draw();
    }

    draw(): void{
        this.element.beginPath();
        this.element.arc(this.position.x,this.position.y,this.radius,0,2*Math.PI);
        this.element.fill();
    }
}