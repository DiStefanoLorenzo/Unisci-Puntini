

export class Point{

    radius;

    position = {
        x: 0,
        y: 0
    };


    constructor(
        x,
        y,
        radius
    ){
        this.Move(x,y);
        this.radius = radius;
    }

    Move(x,y) {
        this.position.x = x;
        this.position.y = y;
    }
}