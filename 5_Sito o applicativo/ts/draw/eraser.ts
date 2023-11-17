import * as counters from "../counters.js";
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
        this.element = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
        );
    }

    // GETTERS

    private getArea(x:number, y:number): boolean{
        if(
            x >= (this.position.x - this.radius * 2 * counters.controls.values.size) &&
            y >= (this.position.y - this.radius * 2 * counters.controls.values.size) &&
            x <= (this.position.x + this.radius * 2 * counters.controls.values.size) &&
            y <= (this.position.y + this.radius * 2 * counters.controls.values.size)
        ){
            return true;
        }else{
            return false;
        }
    }

    // SETTERS

    public move(x:number, y:number): void{
        this.position.x = x;
        this.position.y = y;
        this.element.setAttribute("cx"  , String(x));
        this.element.setAttribute("cy"  , String(y));
    }

    // AZIONI

    public remove(){
        try{
            this.lines();
            this.pencil();
        }catch{

        }
        
    }

    private lines(){
        for(var i=0;i<counters.linee.length;i++){
            for(var ii=0;ii<counters.linee[i].getPoints().length;ii++){
                if(this.getArea(counters.linee[i].getPoints()[ii].getPosition().x,counters.linee[i].getPoints()[ii].getPosition().y)){
                    counters.linee[i].remove();
                    return;
                }
            }
        }
    }

    private pencil(){
        for(var i=0;i<counters.pencil.length;i++){
            for(var ii=0;ii<counters.pencil[i].getPoints().length;ii++){
                if(this.getArea(counters.pencil[i].getPoints()[ii].getPosition().x,counters.pencil[i].getPoints()[ii].getPosition().y)){
                    counters.pencil[i].remove();
                    return;
                }
            }
        }
    }

    public draw(){
        this.element.setAttribute("cx"      , String(this.position.x));
        this.element.setAttribute("cy"      , String(this.position.y));
        this.element.setAttribute("r"       , String(this.radius * counters.controls.values.size));
        this.element.setAttribute("fill"    , "blue");
        this.svg.appendChild(this.element);
    }

    public unDraw(){
        this.svg.removeChild(this.element);
    }
}