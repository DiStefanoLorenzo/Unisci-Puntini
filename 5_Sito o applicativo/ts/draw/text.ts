import {DrawingElement} from "./drawingElement.js"

/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */

export class Text extends DrawingElement{
    //punto;

    constructor(
        id: string,
        x: number,
        y: number
    ){
        super(id);
        this.position.x = x;
        this.position.y = y;
        // Costruzione del Text nel SVG.
        this.svg = document.getElementById("drawingpage") as HTMLElement;
        this.element = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
        );
        // Metodi di costruzione.
        this.draw();
    }

    // AZIONI

    move(x:number, y:number): void{
        this.position.x = x;
        this.position.y = y;
        this.element.setAttribute("x"  , String(this.position.x));
        this.element.setAttribute("y"  , String(this.position.y));
    }

    draw(): void {
        this.element.setAttribute("x"  , String(this.position.x));
        this.element.setAttribute("y"  , String(this.position.y));
        this.element.setAttribute("fill", this.color);

        this.element.textContent = this.id;
        this.svg.appendChild(this.element);            
    }

    remove(): void{
        this.svg.removeChild(this.element);
    }
}