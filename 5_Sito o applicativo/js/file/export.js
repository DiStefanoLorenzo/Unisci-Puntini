"use strict";
// Creazione delle variabili conteneti gli elementi HTML.
const outputEsportaImmagine = document.getElementById('esporta-immagine');
const canvas = document.getElementById('drawingpage');
// Evento che richiama la funzione per importare l'immagine.
outputEsportaImmagine.addEventListener('click', function () {
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "image.png";
    link.click();
});
