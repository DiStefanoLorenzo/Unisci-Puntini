import { Point } from "./draw/point.js";
import * as counters from "./counters.js";
import * as operations from "./operations.js"
import { NumberedPoint } from "./draw/numberedPoint.js";

/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */

function getPageInfo(): void{
    counters.pageSize.x = document.body.clientWidth;
    counters.pageSize.y = document.body.clientHeight;
}

function getWindowInfo(){
    counters.windowsSize.x = window.innerWidth;
    counters.windowsSize.y = window.innerHeight;
}

function getMouseInfo(event: any): void{
    counters.mousePosition.x = event.clientX - counters.pageSize.x/4;
    counters.mousePosition.y = event.clientY - 60;
}

function resetPoints(){
    for(var puntoNumerato of counters.puntiNumerati){
        puntoNumerato.getPoint().isMoving = false;
    }
    counters.controls.point.selected = false;
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
        selectNumberedPoint()
    }
}

function selectNumberedPoint(){
    for(var puntoNumerato of counters.puntiNumerati){
        if(puntoNumerato.getPoint().getIsMoving() || counters.controls.point.selected){
            return;
        }
        puntoNumerato.getPoint().checkIsMoving(counters.mousePosition.x,counters.mousePosition.y);
        if(puntoNumerato.getPoint().getIsMoving()){
            counters.controls.point.selected = true;
            console.log("Selected")
        }
    }
}

function mouseMove(destro:boolean){
    // CONTROLLA CHE SIA IN USO LO STRUMENTO MOUSE
    if(operations.actions.useMouse){
        for(var puntoNumerato of counters.puntiNumerati){
            if(puntoNumerato.getPoint().getIsMoving()&&destro){
                puntoNumerato.remove();
                counters.removeNumberedPoint();
            }else if(puntoNumerato.getPoint().getIsMoving()){
                puntoNumerato.move(counters.mousePosition.x,counters.mousePosition.y);
            }
        }
    }
}

function point(){
    // CONTROLLA CHE SIA IN USO LO STRUMENTO POINT
    if(operations.actions.insertPoint){
        counters.puntiNumerati.push(new NumberedPoint(String(counters.puntiNumerati.length+1),counters.mousePosition.x,counters.mousePosition.y));
        console.log(counters.puntiNumerati.length);
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


// MOUSE MOVE

drawingPage.addEventListener(
    "mousemove",
    () => {
        getPageInfo();
        getMouseInfo(event);
        getWindowInfo();
        if(counters.controls.mouse.clicked){
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
        counters.controls.mouse.clicked = true;
    }
);

// MOUSE UP

drawingPage.addEventListener(
    "mouseup", 
    () => {
        counters.controls.mouse.clicked = false;
    }
);

// MOUSE CLICK DESTRO

document.body.addEventListener("contextmenu", function(event){
    event?.preventDefault();
    if(operations.actions.useMouse){
        mouseMove(true);
    }
});

// MOUSE CLICK

drawingPage.addEventListener(
    "click",
    pageClickEvent
);