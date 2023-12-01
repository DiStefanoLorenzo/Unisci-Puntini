import * as operations from "../operations.js";
import * as counters from "../counters.js";
// classes
import { Point } from "../draw/point.js";
import { NumberedPoint } from "../draw/numberedPoint.js";
import { Line } from "../draw/line.js";
import { Eraser } from "../draw/eraser.js";
import { Circle } from "../draw/circle.js";


/**
 * @author Lorenzo Di Stefano
 * @version 10.11.2023
 */

export var gomma = new Eraser(5,"",-30,-30);

// =====================================
//              << MOUSE >>
// =====================================

export function mouseSelect(){
    // CONTROLLA CHE SIA IN USO LO STRUMENTO MOUSE
    if(operations.actions.useMouse){
        selectNumberedPoint()
    }
}

export function mouseMove(){
    // CONTROLLA CHE SIA IN USO LO STRUMENTO MOUSE
    if(operations.actions.useMouse){
        interactSelectedPoint();
    }
}

// Controlla co quale Puntino Numerato si sta interagendo.
function interactSelectedPoint(){
    for(var i=0;i<counters.puntiNumerati.length;i++){
        if(
            counters.puntiNumerati[i].getPoint().getIsMoving()   &&
            counters.controls.mouse.right
        ){
            counters.puntiNumerati[i].remove();
            counters.removeNumberedPoint();
        }else if(
            counters.puntiNumerati[i].getPoint().getIsMoving()
        ){
            counters.puntiNumerati[i].move(counters.mousePosition.x,counters.mousePosition.y);
            counters.obj.lineaAutogenerata.move(i,counters.mousePosition.x,counters.mousePosition.y);
        }
    }
}

// =====================================
//              << POINT >>
// =====================================

export function point(){
    // CONTROLLA CHE SIA IN USO LO STRUMENTO POINT
    if(operations.actions.insertPoint){
        counters.puntiNumerati.push(
            new NumberedPoint(
                String(counters.puntiNumerati.length+1),
                counters.mousePosition.x,
                counters.mousePosition.y
            )
        );
        generateSolution(counters.mousePosition.x,counters.mousePosition.y);
    }
}

// =====================================
//          << NUMBERED POINT >>
// =====================================

function selectNumberedPoint(){
    for(var puntoNumerato of counters.puntiNumerati){
        // Se un punto è in movimento esce
        if(puntoNumerato.getPoint().getIsMoving()){
            return;
        }
        // Se un punto è già selezionato esce
        if(counters.controls.point.selected){
            return;
        }
        puntoNumerato.getPoint().checkIsMoving(
            counters.mousePosition.x,
            counters.mousePosition.y
        );
        
        if(puntoNumerato.getPoint().getIsMoving()){
            counters.controls.point.selected = true;
        }
    }
}

// =====================================
//              << LINE >>
// =====================================

export function line(){
    // CONTROLLA CHE SIA IN USO LO STRUMENTO LINE
    if(operations.actions.insertLine){
        if(counters.controls.mouse.clicks==0){
            counters.linee.push(
                new Line(
                    "",
                    counters.mousePosition.x,
                    counters.mousePosition.y
                )
            );
            counters.controls.mouse.clicks++;
        }else{
            counters.linee[counters.linee.length-1].addPoint(
                counters.mousePosition.x,
                counters.mousePosition.y
            );
        }
    }
}

function generateSolution(x:number, y:number){
    if(counters.puntiNumerati.length==1){
        counters.obj.lineaAutogenerata = new Line("solution",x,y);
    }else{
        counters.obj.lineaAutogenerata.addPoint(x,y);
    }
}

// =====================================
//              << CIRCLE >>
// =====================================

export function circle(){
    // CONTROLLA CHE SIA IN USO LO STRUMENTO CIRCLE
    if(operations.actions.insertCircle){
        // CONTROLLA CHE SI POSSA CREARE UN NUOVO CERCHIO
        if(
            counters.controls.mouse.clicks==0   &&
            counters.controls.circle.create
        ){
            counters.circles.push(new Circle(
                "",
                counters.mousePosition.x,
                counters.mousePosition.y
            ));
            counters.controls.circle.create = false;
        // CONTROLLA CHE SI POSSA MODIFICARE IL CERCHIO
        }else if(counters.controls.mouse.clicks==1){
            counters.circles[counters.circles.length-1].preview(
                counters.mousePosition.x,
                counters.mousePosition.y
            );
        // RESETTA I VALORI
        }else{
            counters.controls.circle.create = true;
            counters.controls.mouse.clicks = 0;
        }
    }
}

// =====================================
//              << PENCIL >>
// =====================================

export function pencil(){
    // CONTROLLA CHE SIA IN USO LO STRUMENTO PENCIL
    if(operations.actions.draw){
        if(counters.controls.mouse.click==0){
            counters.pencil.push(
                new Line(
                    "",
                    counters.mousePosition.x,
                    counters.mousePosition.y
                )
            );
            counters.controls.mouse.click++;
        }else{
            counters.pencil[counters.pencil.length-1].addPoint(
                counters.mousePosition.x,
                counters.mousePosition.y
            );
        }
    }
}

// =====================================
//              << ERSER >>
// =====================================


export function eraser(){
    // CONTROLLA CHE SIA IN USO LO STRUMENTO ERASER
    if(operations.actions.cancel){
        if(counters.controls.mouse.click==0){
            gomma.draw();
            gomma.move(counters.mousePosition.x,counters.mousePosition.y);
            gomma.remove();
            counters.controls.mouse.click++
        }else{
            gomma.move(counters.mousePosition.x,counters.mousePosition.y);
        }
    }
}