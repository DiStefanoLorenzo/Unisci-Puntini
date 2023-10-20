import * as main from "./main.js";
import * as counters from "./counters.js";
/**
 * @author Lorenzo Di Stefano
 * @version 29.09.2023
 */
export var actions = {
    useMouse: false,
    insertPoint: false,
    insertLine: false,
    insertCircle: false,
    draw: false,
    cancel: false
};
export function nothing() {
}
// HAMBURGER 
export function hamburgerOperation() {
    var menu = document.getElementById("menu");
    var tools = document.getElementById("tools");
    if (main.HMBBTN.getStatus()) {
        tools.style.display = "none";
        menu.style.display = "block";
    }
    else {
        tools.style.display = "block";
        menu.style.display = "none";
    }
}
export function actionsReset() {
    // Actions.
    actions.useMouse = false;
    actions.insertPoint = false;
    actions.insertLine = false;
    actions.insertCircle = false;
    actions.draw = false;
    actions.cancel = false;
}
export function buttonsReset() {
    // 1
    if (main.MOUSE_BTN.getStatus() && !actions.useMouse) {
        main.MOUSE_BTN.reset();
    }
    // 2
    if (main.POINT_BTN.getStatus() && !actions.insertPoint) {
        main.POINT_BTN.reset();
    }
    // 3
    if (main.LINE_BTN.getStatus() && !actions.insertLine) {
        main.LINE_BTN.reset();
    }
    // 4
    if (main.CIRCLE_BTN.getStatus() && !actions.insertCircle) {
        main.CIRCLE_BTN.reset();
    }
    // 5
    if (main.PENCIL_BTN.getStatus() && !actions.draw) {
        main.PENCIL_BTN.reset();
    }
    // 6
    if (main.ERASER_BTN.getStatus() && !actions.cancel) {
        main.ERASER_BTN.reset();
    }
}
// 1
export function useMouse() {
    actionsReset();
    if (main.MOUSE_BTN.getStatus()) {
        actions.useMouse = true;
    }
    buttonsReset();
}
// 2
export function insertPoint() {
    actionsReset();
    if (main.POINT_BTN.getStatus()) {
        actions.insertPoint = true;
    }
    buttonsReset();
}
// 3
export function insertLine() {
    actionsReset();
    if (main.LINE_BTN.getStatus()) {
        actions.insertLine = true;
    }
    buttonsReset();
}
// 4
export function insertCircle() {
    actionsReset();
    if (main.CIRCLE_BTN.getStatus()) {
        actions.insertCircle = true;
    }
    buttonsReset();
}
// 5
export function draw() {
    actionsReset();
    if (main.PENCIL_BTN.getStatus()) {
        actions.draw = true;
    }
    buttonsReset();
}
// 6
export function cancel() {
    actionsReset();
    if (main.ERASER_BTN.getStatus()) {
        actions.cancel = true;
    }
    buttonsReset();
}
// OPZIONI
// Cambia Colore
export function changeColor() {
    const parentElement = main.COLOR_BTN.getElement();
    const childInput = parentElement.querySelector('input');
    if (childInput) {
        counters.controls.values.color = childInput.value;
        parentElement.style.backgroundColor = counters.controls.values.color;
    }
}
