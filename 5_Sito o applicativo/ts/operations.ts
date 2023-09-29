import * as main from "./main.js";

/**
 * @author Lorenzo Di Stefano
 * @version 29.09.2023
 */

export var actions = {
    useMouse: false,
    insertPoint: false,
    insertSquare: false,
    insertCircle: false,
    draw: false,
    cancel: false
};

export function nothing(){
}

// HAMBURGER 

export function hamburgerOperation(){
    var menu = document.getElementById("menu") as HTMLElement;
    var tools = document.getElementById("tools") as HTMLElement;

    if(main.HMBBTN.getStatus()){
        tools.style.display = "none";
        menu.style.display = "block";
    }else{
        tools.style.display = "block";
        menu.style.display = "none";
    }
}

export function actionsReset(){
    // Actions.
    actions.useMouse = false;   
    actions.insertPoint = false;
    actions.insertSquare = false;
    actions.insertCircle = false;
    actions.draw = false;
    actions.cancel = false;
    // Reset contatori.
    //mouseClicks = 0;
}

export function buttonsReset(){
    // 1
    
    if(main.MOUSE_BTN.getStatus() && !actions.useMouse){
        main.MOUSE_BTN.reset();
    }
    // 2
    
    if(main.POINT_BTN.getStatus() && !actions.insertPoint){
        main.POINT_BTN.reset();
    }
    // 3
    if(main.SQUARE_BTN.getStatus() && !actions.insertSquare){
        main.SQUARE_BTN.reset();
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
export function insertSquare(){
    actionsReset();
    if(main.SQUARE_BTN.getStatus()){
        actions.insertSquare = true;
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