import * as counters from "../counters.js";
import {DrawingElement} from "./drawingElement.js"
import {Point} from "./point.js"

/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */

export class Line extends DrawingElement{
    protected points: Point[];
    coordinate!: string;


    constructor(
        id: string,
        x: number,
        y: number
    ){
        // Super
        super(id);
        //
        this.points = [];
        this.points.push(new Point(1,String(id),x,y));
        this.coordinate = this.points[0].getPosition().x +","+this.points[0].getPosition().y;
        this.svg = document.getElementById("drawingpage") as HTMLElement;
        this.element = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "polyline"
        );
    }

    // COSTRUZIONE.

    setStyle(){
        this.element.font = "90% Arial Black";
        this.element.strokeText("Hello World",this.position.x,this.position.y);
        
    }

    // GETTERS

    getPoints(){
        return this.points;
    }

    // AZIONI

    public addPoint(x:number,y:number): any{
        var id = "lp"+this.points.length;
        this.points.push(new Point(1,String(id),x,y));
        this.coordinate = "";
        for(var i=0;i<this.points.length;i++){
            this.coordinate += " "+this.points[i].getPosition().x+","+this.points[i].getPosition().y;
        }
        this.draw();
    }

    public moveLine(index: number, x:number, y:number){
        this.points[index].getPosition().x = x;
        this.points[index].getPosition().y = y;
        this.points[index].move(x,y);
        this.coordinate = "";
        for(var i=0;i<this.points.length;i++){
            this.coordinate += " "+this.points[i].getPosition().x+","+this.points[i].getPosition().y;
        }
        this.draw();
    }

    public remove(){
        for(var i=0;i<this.points.length;i++){
            this.points[i].remove();
        }
        this.svg.removeChild(this.element);
    }

    private draw(): void{
        this.element.setAttribute("points"      , this.coordinate);
        this.element.setAttribute("stroke"      , this.color);
        this.element.setAttribute("stroke-width", counters.controls.values.size * this.size);
        this.element.setAttribute("fill"        , "none");
        this.svg.appendChild(this.element);
    }
}