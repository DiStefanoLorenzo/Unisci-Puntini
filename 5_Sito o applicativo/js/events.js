import { Point } from "./draw/point.js";
import * as operations from "./operations.js";
/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */
// DICHIARAZIONE VARIABILI.
var mouseClicks = 0;
var mousePosition = {
    x: 0,
    y: 0
};
var pageSize = {
    x: 0,
    y: 0
};
function pageClickEvent() {
    mouse();
    point();
}
function mouse() {
    if (operations.actions.useMouse) {
        console.log("Mouse: " + mousePosition.x + "," + mousePosition.y);
    }
}
var punto;
function point() {
    if (operations.actions.insertPoint) {
        console.log("Point: " + mousePosition.x + "," + mousePosition.y);
        punto = new Point(5, "767", mousePosition.x, mousePosition.y);
        // PROVA
    }
}
// EVENTI PAGINA DI DISEGNO.
const drawingPage = document.getElementById("drawingpage");
drawingPage.addEventListener("click", pageClickEvent);
drawingPage.addEventListener("mousedown", () => { });
drawingPage.addEventListener("mouseup", () => { });
document.addEventListener("mousemove", (event) => {
    pageSize.x = document.body.clientWidth;
    pageSize.y = document.body.clientHeight;
    mousePosition.x = event.clientX - pageSize.x / 4;
    mousePosition.y = event.clientY - 60;
});
