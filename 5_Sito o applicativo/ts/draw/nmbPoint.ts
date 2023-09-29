import { DrawingElement } from "./drawingElement.js";
import { Point } from "./point.js";
import { Text } from "./text.js";

/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */

export class nmbPoint extends DrawingElement{
    //protected point: Point;
    protected text: Text;

    constructor(
        id: string,
        order: number,
        x: number,
        y: number
    ){
        // Super.
        super(id);
        // Oggetti.
        //this.point = new Point("nmb"+String(order),x,y);
        this.text = new Text(String(order)+".",x,y);  
    }
}