
/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */

export class DrawingElement{
    protected element: CanvasRenderingContext2D;
    protected canvas: HTMLCanvasElement;
    
    protected width: number;
    protected height: number;  
    
    protected layer: number;

    protected position = {
        x: 0,
        y: 0
    };

    constructor(
        protected id: string
    ){
        this.canvas = document.getElementById("drawingpage") as HTMLCanvasElement;
        this.element = this.canvas.getContext("2d")!;

        this.width = 0;
        this.height = 0;
        this.layer = 1;
    }
}