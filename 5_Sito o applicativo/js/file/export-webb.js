"use strict";
const outputEsportaImmagine_webb = document.getElementById('esporta-immagine-webb');
outputEsportaImmagine_webb.addEventListener('click', function () {
    // Seleziona l'elemento SVG da salvare
    var svg = document.getElementById("drawingpage");
    // Crea un oggetto XMLSerializer per convertire l'SVG in una stringa
    var serializer = new XMLSerializer();
    // Serializza l'SVG in una stringa XML
    var svgString = serializer.serializeToString(svg);
    // Crea un oggetto Blob con il tipo MIME corretto
    var blob = new Blob([svgString], { type: "image/svg+xml" });
    // Crea un oggetto URL per il blob
    var url = URL.createObjectURL(blob);
    // Crea un elemento immagine
    var img = new Image();
    // Imposta la sorgente dell'immagine con l'URL del blob
    img.src = url;
    // Aggiungi un evento di caricamento per l'immagine
    img.onload = function () {
        // Crea un elemento canvas
        var canvas = document.createElement("canvas");
        // Imposta la larghezza e l'altezza del canvas con quelle dell'immagine
        canvas.width = img.width;
        canvas.height = img.height;
        // Ottieni il contesto 2D del canvas
        var ctx = canvas.getContext("2d");
        // Disegna l'immagine sul canvas
        ctx.drawImage(img, 0, 0);
        // Crea un altro blob con il formato desiderato (png o jpg)
        canvas.toBlob(function (blob) {
            // Crea un altro URL per il nuovo blob
            var url = URL.createObjectURL(blob);
            // Crea un elemento link
            var link = document.createElement("a");
            // Imposta l'attributo href del link con l'URL del blob
            link.href = url;
            // Imposta l'attributo download del link con il nome del file da salvare
            link.download = "immagine.webb"; // o "immagine.jpg"
            // Simula un click sul link per scaricare il file
            link.click();
        }, "image/png"); // o "image/jpeg"
    };
});
