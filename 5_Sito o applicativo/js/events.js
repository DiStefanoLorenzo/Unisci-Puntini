import * as counters from "./counters.js";
import * as operations from "./operations.js";
import * as functionTool from "./functions/tools.js";
import * as functionHelp from "./functions/infoHelp.js";
import { Eraser } from "./draw/eraser.js";
/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */
function resetPoints() {
    for (var puntoNumerato of counters.puntiNumerati) {
        puntoNumerato.getPoint().isMoving = false;
    }
    counters.controls.point.selected = false;
}
function pageClickEvent() {
    functionTool.circle(true);
    if (operations.actions.insertCircle) {
        counters.controls.mouse.clicks++;
    }
    functionTool.point();
    functionTool.line();
}
var gomma = new Eraser(5, "", -30, -30);
function pageMoveEvent() {
    mouseMove(false);
    functionTool.mouseSelect();
    functionTool.pencil();
    functionTool.eraser(gomma);
}
function mouseMove(destro) {
    // CONTROLLA CHE SIA IN USO LO STRUMENTO MOUSE
    if (operations.actions.useMouse) {
        for (var i = 0; i < counters.puntiNumerati.length; i++) {
            if (counters.puntiNumerati[i].getPoint().getIsMoving() && destro) {
                counters.puntiNumerati[i].remove();
                counters.removeNumberedPoint();
            }
            else if (counters.puntiNumerati[i].getPoint().getIsMoving()) {
                counters.puntiNumerati[i].move(counters.mousePosition.x, counters.mousePosition.y);
                counters.obj.lineaAutogenerata.move(i, counters.mousePosition.x, counters.mousePosition.y);
            }
        }
    }
}
// EVENTI PAGINA DI DISEGNO.
const drawingPage = document.getElementById("drawingpage");
// MOUSE DOWN
drawingPage.addEventListener("mousedown", () => {
    counters.controls.mouse.clicked = true;
});
// MOUSE UP
drawingPage.addEventListener("mouseup", () => {
    counters.controls.mouse.clicked = false;
    counters.controls.mouse.click = 0;
    gomma.unDraw();
});
// MOUSE CLICK DESTRO
document.body.addEventListener("contextmenu", function (event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    if (operations.actions.useMouse) {
        mouseMove(true);
    }
});
// MOUSE CLICK
drawingPage.addEventListener("click", pageClickEvent);
// MOUSE MOVE
drawingPage.addEventListener("mousemove", () => {
    functionHelp.getMouseInfo(event);
    functionHelp.getInfos();
    functionTool.circle(false);
    console.log(counters.controls.mouse.clicks);
    if (counters.controls.mouse.clicked) {
        pageMoveEvent();
    }
    else {
        resetPoints();
    }
});
