import { DrawingElement } from "./drawingElement.js";

/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */

export class Point extends DrawingElement{
    public isMoving: boolean;

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
        this.radius     = radius;
        this.isMoving   = false;
        // Costruzione del Point nel SVG.
        this.svg = document.getElementById("drawingpage") as HTMLElement;
        this.element = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
        );
        // Metodi di costruzione.
        this.draw();
    }

    // GETTERS

    getIsMoving(): boolean {
        return this.isMoving;
    }

    getPosition(): any{
        return this.position;
    }

    // SETTERS

    setIsMoving(value: boolean): void {
        this.isMoving = value;
    }

    setId(value: number){
        if(value > 0){
            this.id = "p"+value;
        }
    }

    // CONTROLLI

    checkIsMoving(x: number,y: number): void {
        if(
            x >= (this.position.x - this.radius*2) &&
            y >= (this.position.y - this.radius*2) &&
            x <= (this.position.x + this.radius*2) &&
            y <= (this.position.y + this.radius*2)
        ){
            this.isMoving = true;
        }else{
            this.isMoving = false;

        }
    }

    // AZIONI

    move(x:number, y:number): void{
        this.position.x = x;
        this.position.y = y;
        this.element.setAttribute("cx"  , String(this.position.x));
        this.element.setAttribute("cy"  , String(this.position.y));
    }

    draw(): void{
        this.element.setAttribute("cx"  , String(this.position.x));
        this.element.setAttribute("cy"  , String(this.position.y));
        this.element.setAttribute("r"   , String(this.radius));
        this.element.setAttribute("fill", this.color);
        this.svg.appendChild(this.element);
    }

    remove(): void{
        this.svg.removeChild(this.element);
    }
}