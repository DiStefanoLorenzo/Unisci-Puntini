import { Button } from "./gui/button.js";
import * as operators from "./operations.js";
/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */
// Bottone hamburger.
export const HMBBTN = new Button(operators.hamburgerOperation, "../img/hamburger.png", "../img/x.png", "hamb");
// Bottoni della toolbar.
export const MOUSE_BTN = new Button(operators.useMouse, "../img/mouse.png", "../img/mouse.png", "toolbtn1");
export const POINT_BTN = new Button(operators.insertPoint, "../img/point.png", "../img/point.png", "toolbtn2");
export const PENCIL_BTN = new Button(operators.draw, "../img/pencil.png", "../img/pencil.png", "toolbtn3");
export const ERASER_BTN = new Button(operators.cancel, "../img/eraser.png", "../img/eraser.png", "toolbtn4");
export const SQUARE_BTN = new Button(operators.insertSquare, "../img/square.png", "../img/square.png", "toolbtn5");
export const CIRCLE_BTN = new Button(operators.insertCircle, "../img/circle.png", "../img/circle.png", "toolbtn6");
// Bottoni di visibilità dei layer.
export const LAYBTN1 = new Button(operators.nothing, "../img/eye.png", "../img/barred_eye.png", "laybtn1"); //Bottone Layer 1.
export const LAYBTN2 = new Button(operators.nothing, "../img/eye.png", "../img/barred_eye.png", "laybtn2"); //Bottone Layer 2.
export const LAYBTN3 = new Button(operators.nothing, "../img/eye.png", "../img/barred_eye.png", "laybtn3"); //Bottone Layer 3.
