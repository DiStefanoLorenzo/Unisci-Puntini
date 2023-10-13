
/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */

export class DrawingElement{
    protected element: any;
    protected svg: HTMLElement;
    
    protected width : number;
    protected height: number;  
    protected size  : number;

    protected layer : number;

    protected color : string;

    protected visible : boolean;



    protected position = {
        x: 0,
        y: 0
    };

    constructor(
        protected id: string
    ){
        this.svg = document.getElementById("drawingpage") as HTMLElement;

        this.width  = 0;
        this.height = 0;
        this.layer  = 1;
        this.size   = 1;

        this.color  = "black";

        this.visible = true;
    }
}