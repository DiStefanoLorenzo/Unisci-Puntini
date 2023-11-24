import * as counters from "./counters.js";
import * as operations from "./operations.js";
import { Button } from "./gui/button.js";
/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */
// Bottone hamburger.
export const HMBBTN = new Button(operations.hamburgerOperation, "../img/hamburger.png", "../img/x.png", true, "hamb");
// Bottoni della toolbar.
export const MOUSE_BTN = new Button(operations.useMouse, "../img/mouse.png", "../img/mouse.png", true, "toolbtn1");
export const POINT_BTN = new Button(operations.insertPoint, "../img/point.png", "../img/point.png", true, "toolbtn2");
export const PENCIL_BTN = new Button(operations.draw, "../img/pencil.png", "../img/pencil.png", true, "toolbtn3");
export const ERASER_BTN = new Button(operations.cancel, "../img/eraser.png", "../img/eraser.png", true, "toolbtn4");
export const LINE_BTN = new Button(operations.insertLine, "../img/line.png", "../img/line.png", true, "toolbtn5");
export const CIRCLE_BTN = new Button(operations.insertCircle, "../img/circle.png", "../img/circle.png", true, "toolbtn6");
export const COLOR_BTN = new Button(operations.nothing, "../img/palette.png", "../img/palette.png", false, "toolbtn7");
export const SIZE_BTN = new Button(operations.incSize, "../img/1.png", "../img/1.png", false, "toolbtn8");
// Bottone per espandere il menu dei layer.
export const EXTD_BTN = new Button(operations.extendLayersSection, "../img/LArrow.png", "../img/RArrow.png", true, "layersExtender"); // Layers Extender
// Bottoni di visibilità dei layer.
export const LAYBTN1 = new Button(operations.layerOne, "../img/eye.png", "../img/barred_eye.png", true, "laybtn1"); // Bottone Layer 1.
export const LAYBTN2 = new Button(operations.layerTwo, "../img/eye.png", "../img/barred_eye.png", true, "laybtn2"); // Bottone Layer 2.
export const LAYBTN3 = new Button(operations.layerThree, "../img/eye.png", "../img/barred_eye.png", true, "laybtn3"); // Bottone Layer 3.
SIZE_BTN.getElement().addEventListener("contextmenu", function (event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    if (counters.controls.values.size > 1) {
        counters.controls.values.size--;
    }
    operations.setImage();
});
const INPUTE = COLOR_BTN.getElement().querySelector('input');
INPUTE === null || INPUTE === void 0 ? void 0 : INPUTE.addEventListener("input", function (event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    counters.controls.values.color = INPUTE.value;
    console.log(INPUTE.value);
    COLOR_BTN.getElement().style.backgroundColor = counters.controls.values.color;
});
