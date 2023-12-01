import * as counters from "./counters.js";
import * as operations from "./operations.js";
import * as functionTool from "./functions/tools.js";
import * as functionHelp from "./functions/infoHelp.js";
// Classi
import { NumberedPoint } from "./draw/numberedPoint.js";
import { Point } from "./draw/point.js";
import { Line } from "./draw/line.js";
import { Eraser } from "./draw/eraser.js";
import { Circle } from "./draw/circle.js";

/**
 * @author Lorenzo Di Stefano
 * @version 22.09.2023
 */

export function resetPoints(){
    for(var puntoNumerato of counters.puntiNumerati){
        puntoNumerato.getPoint().isMoving = false;
    }
    counters.controls.point.selected = false;
}

// Esegue le funzioni ad ogni click sulla pagina di disegno.
export function pageClickEvent(){
    functionTool.circle();              // Inserisce un Cerchio.            (se attivo)
    functionTool.point();               // Inserisce un Puntino Numerato.   (se attivo)
    functionTool.line();                // Inserisce un Segmento.           (se attivo)
    counters.controls.mouse.clicks++;   // Incrementa il contatore.         (azioni eseguite dalla pressione)
}

// Esegue le funzioni al movimento del mouse cliccato sulla pagina di disegno.
export function pageClickedMoveEvent(){
    counters.controls.mouse.right = false;      // Resetta il controllo del click destro.
    // tools.ts
    functionTool.mouseMove();                   // Sposta il Puntino Numerato selezionato.  (se attivo)
    functionTool.mouseSelect();                 // Seleziona il Puntino Numerato cliccato.  (se attivo)
    functionTool.pencil();                      // Disegna                                  (se attivo)
    functionTool.eraser();                      // Mostra e muove la gomma                  (se attivo)
}

// EVENTI PAGINA DI DISEGNO.

const drawingPage = document.getElementById("drawingpage") as HTMLElement;


// MOUSE DOWN

drawingPage.addEventListener(
    "mousedown", 
    () => {
        counters.controls.mouse.clicked = true;
    }
);

// MOUSE UP

drawingPage.addEventListener(
    "mouseup", 
    () => {
        counters.controls.mouse.clicked = false;
        counters.controls.mouse.click   = 0;
        try{functionTool.gomma.unDraw();}catch{}        // Rimuove la gomma.
    }
);

// MOUSE CLICK DESTRO

document.body.addEventListener("contextmenu", function(event){
    event?.preventDefault();
    // CONTROLLA CHE SIA IN USO LO STRUMENTO MOUSE
    if(operations.actions.useMouse){
        counters.controls.mouse.right = true;   // Imposta il valore al controllo del click destro.
        functionTool.mouseMove();               // Elimina Il Puntino Numerato selezionato.
    }
});

// MOUSE CLICK

drawingPage.addEventListener(
    "click",
    pageClickEvent
);

// MOUSE MOVE

drawingPage.addEventListener(
    "mousemove",
    () => {
        functionHelp.getMouseInfo(event);   // Aggiorna la poszione del mouse.
        functionHelp.getInfos();            // Aggiorna i valori della pagina.
        functionTool.circle();              //
        // CONTROLLA CHE IL MOUSE SIA PREMUTO
        if(counters.controls.mouse.clicked){
            pageClickedMoveEvent();
        }else{
            resetPoints();
        }
    }
);