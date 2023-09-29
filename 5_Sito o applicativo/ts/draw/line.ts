import {DrawingElement} from "./drawingElement.js"
import {Point} from "./point.js"

/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */

export class Line extends DrawingElement{
    protected points: Point[];


    constructor(
        id: string,
        x: number,
        y: number
    ){
        // Super
        super(id);
        //
        this.points = [];
        this.points.push();

        this.canvas = document.getElementById("drawingpage") as HTMLCanvasElement;
        this.element = this.canvas.getContext("2d")!;
    }

    // COSTRUZIONE.

    setStyle(){
        this.element.font = "90% Arial Black";
        this.element.strokeText("Hello World",this.position.x,this.position.y);
        
    }

    // MODIFICA.

    public addPoint(x:number,y:number): any{
        var id = this.points.length;
        //var p = new Point(String(id),x,y);
        //this.points.push(p);
    }

    public moveLine(){
        
    }
}
