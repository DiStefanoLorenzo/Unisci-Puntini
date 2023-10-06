import { Point } from "./draw/point.js";
import * as operations from "./operations.js"

/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */

// DICHIARAZIONE VARIABILI.

var mouseClicks: number = 0;
var mouseIsClicking: boolean = false;
var pointSelected: boolean = false;
var punti: Point[] = [];

var mousePosition = {
    x: 0,
    y: 0
}

var pageSize = {
    x: 0,
    y: 0
};

function getPageInfo(): void{
    pageSize.x = document.body.clientWidth;
    pageSize.y = document.body.clientHeight;
}

function getMouseInfo(event: any): void{
    mousePosition.x = event.clientX - pageSize.x/4;
    mousePosition.y = event.clientY - 60;
}

function resetPoints(){
    for(var punto of punti){
        punto.isMoving = false;
    }
    pointSelected = false;
}




function pageClickEvent(){
    point();
}

function pageMoveEvent(){
    mouseMove();
    mouseSelect();
    pencil();
    eraser();
}

function mouseSelect(){
    // CONTROLLA CHE SIA IN USO LO STRUMENTO MOUSE
    if(operations.actions.useMouse){
        for(var punto of punti){
            if(punto.getIsMoving() || pointSelected){
                return;
            }
            punto.checkIsMoving(mousePosition.x,mousePosition.y);
            if(punto.getIsMoving()){
                pointSelected = true;
            }
        }
    }
}

function mouseMove(){
    // CONTROLLA CHE SIA IN USO LO STRUMENTO MOUSE
    if(operations.actions.useMouse){
        for(var punto of punti){
            if(punto.getIsMoving()){
                punto.move(mousePosition.x,mousePosition.y);
            }
            console.log(punto.getIsMoving());
            punto.draw();
        }
        console.log("============"+ punti.length);
    }
}

function point(){
    // CONTROLLA CHE SIA IN USO LO STRUMENTO POINT
    if(operations.actions.insertPoint){
        punti.push(new Point(5,String(punti.length),mousePosition.x,mousePosition.y));
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
        if(mouseIsClicking){
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
        mouseIsClicking = true;
    }
);

// MOUSE UP

drawingPage.addEventListener(
    "mouseup", 
    () => {
        mouseIsClicking = false;
    }
);