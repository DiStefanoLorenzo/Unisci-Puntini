// DICHIARAZIONE VARIABILI.
var mouseClicks = 0;
var mousePosition = {
    x: 0,
    y: 0
};
export var actions = {
    useMouse: true,
    insertPoint: false,
    insertLine: false,
    insertCircle: false,
    draw: false,
    cancel: false
};
// FUNZIONI ACTION.
function actionsReset() {
    // Actions.
    actions.useMouse = false;
    actions.insertPoint = false;
    actions.insertLine = false;
    actions.insertCircle = false;
    actions.draw = false;
    actions.cancel = false;
    // Reset contatori.
    mouseClicks = 0;
}
export function useMouse() {
    actionsReset();
    actions.useMouse = true;
}
export function insertPoint() {
    actionsReset();
    actions.insertPoint = true;
}
export function insertLine() {
    actionsReset();
    actions.insertLine = true;
}
export function insertCircle() {
    actionsReset();
    actions.insertCircle = true;
}
export function draw() {
    actionsReset();
    actions.draw = true;
}
export function cancel() {
    actionsReset();
    actions.cancel = true;
}
// INPUT AZIONI
function createPoint() {
    if (actions.insertPoint) {
    }
}
function pageClickEvent() {
}
// EVENTI PAGINA DI DISEGNO.
const drawingPage = document.getElementById("drawingpage");
drawingPage.addEventListener("click", pageClickEvent);
document.addEventListener("mousemove", (event) => {
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
});
