import * as main from "./main.js";
import * as counters from "./counters.js";
import { Button } from "./gui/button.js";

/**
 * @author Lorenzo Di Stefano
 * @version 29.09.2023
 */

export var actions = {
    useMouse:       false,
    insertPoint:    false,
    insertLine:     false,
    insertCircle:   false,
    draw:           false,
    cancel:         false
};

export function nothing(){
}

// HAMBURGER 

export function hamburgerOperation(){
    var menu    = document.getElementById("menu")   as HTMLElement;
    var tools   = document.getElementById("tools")  as HTMLElement;

    if(main.HMBBTN.getStatus()){
        tools.style.display     = "none";
        menu.style.display      = "block";
    }else{
        tools.style.display     = "block";
        menu.style.display      = "none";
    }
}

export function actionsReset(){
    // Actions.
    actions.useMouse        = false;   
    actions.insertPoint     = false;
    actions.insertLine      = false;
    actions.insertCircle    = false;
    actions.draw            = false;
    actions.cancel          = false;
}

export function buttonsReset(){
    counters.controls.mouse.clicks = 0;
    // 1
    
    if(main.MOUSE_BTN.getStatus() && !actions.useMouse){
        main.MOUSE_BTN.reset();
    }
    // 2
    
    if(main.POINT_BTN.getStatus() && !actions.insertPoint){
        main.POINT_BTN.reset();
    }
    // 3
    if(main.LINE_BTN.getStatus() && !actions.insertLine){
        main.LINE_BTN.reset();
    }
    // 4
    if(main.CIRCLE_BTN.getStatus() && !actions.insertCircle){
        main.CIRCLE_BTN.reset();
    }
    // 5
    if(main.PENCIL_BTN.getStatus() && !actions.draw){
        main.PENCIL_BTN.reset();
    }
    // 6
    if(main.ERASER_BTN.getStatus() && !actions.cancel){
        main.ERASER_BTN.reset();
    }
}

// 1
export function useMouse(){
    actionsReset();
    if(main.MOUSE_BTN.getStatus()){
        actions.useMouse = true;
    }
    buttonsReset();
}

// 2
export function insertPoint(){
    actionsReset();
    if(main.POINT_BTN.getStatus()){
        actions.insertPoint = true;
    }
    buttonsReset();
}

// 3
export function insertLine(){
    actionsReset();
    if(main.LINE_BTN.getStatus()){
        actions.insertLine = true;
    }
    buttonsReset();
}

// 4
export function insertCircle(){
    actionsReset();
    if(main.CIRCLE_BTN.getStatus()){
        actions.insertCircle = true;
    }
    buttonsReset();
}

// 5
export function draw(){
    actionsReset();
    if(main.PENCIL_BTN.getStatus()){
        actions.draw = true;
    }
    buttonsReset();
}

// 6
export function cancel(){
    actionsReset();
    if(main.ERASER_BTN.getStatus()){
        actions.cancel = true;
    }
    buttonsReset();
}

// OPZIONI

// Cambia Colore

export function changeColor(): void{
    const parentElement = main.COLOR_BTN.getElement();
    const childInput = parentElement.querySelector('input');
    if (childInput) {
        counters.controls.values.color = childInput.value;
        parentElement.style.backgroundColor = counters.controls.values.color;
    }
    parentElement.style.backgroundColor = counters.controls.values.color;
}

export function incSize(){
    if(counters.controls.values.size<5){
        counters.controls.values.size++;
    }
    setImage()
}

export function setImage(){
    var img = "./img/"+String(counters.controls.values.size)+".png";
    const SIZE_ELEMENT = main.SIZE_BTN.getElement();
    SIZE_ELEMENT.style.backgroundImage = `url(${img})`;
}

// LAYERS

export function extendLayersSection(){
    const LAYERS_SECTION = document.getElementById("layerssection") as HTMLElement;
    counters.controls.layers.extended = !counters.controls.layers.extended;
    if(counters.controls.layers.extended){
        LAYERS_SECTION.style.width = "30%";
    }else{
        LAYERS_SECTION.style.width = "5%";
    }
}

// 1
export function layerOne(){
    counters.controls.layers.one = !counters.controls.layers.one;
    for(var i=0;i<counters.obj.lineaAutogenerata.getPoints().length;i++){
        if(counters.controls.layers.one){
            counters.obj.lineaAutogenerata.getPoints()[i].getElement().style.display = "block";
        }else{
            counters.obj.lineaAutogenerata.getPoints()[i].getElement().style.display = "none";
        }
    }
    if(counters.controls.layers.one){
        counters.obj.lineaAutogenerata.getElement().style.display = "block";
    }else{
        counters.obj.lineaAutogenerata.getElement().style.display = "none";
    }
}

// 2
export function layerTwo(){
    counters.controls.layers.two = !counters.controls.layers.two;
    for(var i=0;i<counters.puntiNumerati.length;i++){
        if(counters.controls.layers.two){
            counters.puntiNumerati[i].getPoint().getElement().style.display = "block";
            counters.puntiNumerati[i].getText().getElement().style.display  = "block";
        }else{
            counters.puntiNumerati[i].getPoint().getElement().style.display = "none";
            counters.puntiNumerati[i].getText().getElement().style.display  = "none";
        }
    }
}

// 3
export function layerThree(){
    counters.controls.layers.three = !counters.controls.layers.three;
}