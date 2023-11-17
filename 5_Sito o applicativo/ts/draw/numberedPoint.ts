import * as counters from "../counters.js";
import { DrawingElement } from "./drawingElement.js";
import { Point } from "./point.js";
import { Text } from "./text.js";

/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */

export class NumberedPoint extends DrawingElement{
    protected isRemoved: boolean;
    //protected point: Point;
    protected text: Text;
    protected point: Point;

    position = {
        x: 0,
        y: 0
    };

    constructor(
        id: string,
        x: number,
        y: number
    ){
        // Super.
        super(id);
        this.position.x = x;
        this.position.y = y;
        this.isRemoved = false;
        // Oggetti.;
        this.text = new Text(
            "."+this.id,
            this.position.x,
            this.position.y - counters.controls.values.size*10
        );
        this.point = new Point(
            counters.controls.values.size*5,
            "p"+this.id,
            this.position.x,
            this.position.y
        );  
    }

    // GETTERS

    getId(): number{
        return Number(this.id);
    }

    getPoint(): Point{
        return this.point;
    }

    getText(): Text{
        return this.text;
    }

    getIsRemoved(): boolean{
        return this.isRemoved;
    }

    // AZIONI

    move(x: number, y: number): void{
        this.position.x = x;
        this.position.y = y;
        this.point.move(x,y);
        this.text.move(x,y - 10);
    }

    remove(): void{
        this.point.remove();
        this.text.remove();
        this.isRemoved = true;
    }

    renumber(value: number): void{
        if(value>0){
            this.id = String(value);
            this.point.setId(value);
            this.text.setId(value);
        }
    }
}