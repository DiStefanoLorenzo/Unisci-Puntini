import { Point } from "./draw/point.js";
import { mouseClicks, mousePosition, pageSize, windowsSize, punti, controls, puntiNumerati } from "./counters.js";
import * as operations from "./operations.js"
import { NumberedPoint } from "./draw/numberedPoint.js";

/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */

function getPageInfo(): void{
    pageSize.x = document.body.clientWidth;
    pageSize.y = document.body.clientHeight;
}

function getWindowInfo(){
    windowsSize.x = window.innerWidth;
    windowsSize.y = window.innerHeight;
}

function getMouseInfo(event: any): void{
    mousePosition.x = event.clientX - pageSize.x/4;
    mousePosition.y = event.clientY - 60;
}

function resetPoints(){
    for(var puntoNumerato of puntiNumerati){
        puntoNumerato.getPoint().isMoving = false;
    }
    controls.point.selected = false;
    console.log("Deselected")
}




function pageClickEvent(){
    point();
}

function pageMoveEvent(){
    mouseMove(false);
    mouseSelect();
    pencil();
    eraser();
}

function mouseSelect(){
    // CONTROLLA CHE SIA IN USO LO STRUMENTO MOUSE
    if(operations.actions.useMouse){
        for(var puntoNumerato of puntiNumerati){
            if(puntoNumerato.getPoint().getIsMoving() || controls.point.selected){
                return;
            }
            puntoNumerato.getPoint().checkIsMoving(mousePosition.x,mousePosition.y);
            if(puntoNumerato.getPoint().getIsMoving()){
                controls.point.selected = true;
                console.log("Selected")
            }
        }
    }
}

function mouseMove(destro:boolean){
    // CONTROLLA CHE SIA IN USO LO STRUMENTO MOUSE
    if(operations.actions.useMouse){
        for(var puntoNumerato of puntiNumerati){
            if(puntoNumerato.getPoint().getIsMoving()&&destro){
                puntoNumerato.remove();
            }else if(puntoNumerato.getPoint().getIsMoving()){
                puntoNumerato.move(mousePosition.x,mousePosition.y);
                console.log(puntoNumerato.getPoint().position.x+":"+puntoNumerato.getPoint().position.y);
            }
        }
    }
}

function point(){
    // CONTROLLA CHE SIA IN USO LO STRUMENTO POINT
    if(operations.actions.insertPoint){
        //punti.push(new Point(5,String(punti.length),mousePosition.x,mousePosition.y));
        puntiNumerati.push(new NumberedPoint(String(puntiNumerati.length),mousePosition.x,mousePosition.y));
        console.log(puntiNumerati.length);
    }
}

function pencil(){
    // CONTROLLA CHE SIA IN USO LO STRUMENTO PENCIL
    if(operations.actions.draw){

    }
}

function eraser(){
    // CONTROLLA CHE SIA IN USO LO STRUMENTO ERASER
    if(operations.actions.cancel){

    }
}

// EVENTI PAGINA DI DISEGNO.

const drawingPage = document.getElementById("drawingpage") as HTMLElement;

// MOUSE CLICK

drawingPage.addEventListener(
    "click",
    pageClickEvent
);

// MOUSE MOVE

drawingPage.addEventListener(
    "mousemove",
    () => {
        getPageInfo();
        getMouseInfo(event);
        getWindowInfo();
        if(controls.mouse.clicked){
            pageMoveEvent();
        }else{
            resetPoints();
        }
    }
);

// MOUSE DOWN

drawingPage.addEventListener(
    "mousedown", 
    () => {
        controls.mouse.clicked = true;
    }
);

// MOUSE UP

drawingPage.addEventListener(
    "mouseup", 
    () => {
        controls.mouse.clicked = false;
    }
);

document.body.addEventListener("contextmenu", function(event){
    event?.preventDefault();
    if(operations.actions.useMouse){
        mouseMove(true);
    }
});