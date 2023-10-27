import { Button } from "./gui/button.js";
import * as operations from "./operations.js";
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
export const COLOR_BTN = new Button(operations.changeColor, "../img/palette.png", "../img/palette.png", false, "toolbtn7");
export const TEST_BTN = new Button(operations.nothing, "../img/circle.png", "../img/circle.png", false, "toolbtn8");
// Bottone per espandere il menu dei layer.
export const EXTD_BTN = new Button(operations.nothing, "../img/LArrow.png", "../img/RArrow.png", true, "layersExtender"); // Layers Extender
// Bottoni di visibilità dei layer.
export const LAYBTN1 = new Button(operations.nothing, "../img/eye.png", "../img/barred_eye.png", true, "laybtn1"); // Bottone Layer 1.
export const LAYBTN2 = new Button(operations.nothing, "../img/eye.png", "../img/barred_eye.png", true, "laybtn2"); // Bottone Layer 2.
export const LAYBTN3 = new Button(operations.nothing, "../img/eye.png", "../img/barred_eye.png", true, "laybtn3"); // Bottone Layer 3.
