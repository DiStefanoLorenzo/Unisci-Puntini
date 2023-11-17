// Creazione delle variabili contenenti gli elementi HTML.
const outputEsportaImmagine = document.getElementById('esporta-immagine') as HTMLInputElement;
const svgElement = document.getElementById('drawingpage') as HTMLElement; // Assicurati di avere un elemento SVG con un id appropriato.

// Evento che richiama la funzione per esportare l'immagine SVG.
outputEsportaImmagine.addEventListener('click', function() {
    const svgXML = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgXML], { type: "image/svg+xml" });
    const svgURL = URL.createObjectURL(svgBlob);
    
    const link = document.createElement("a");
    link.href = svgURL;
    link.download = "image.svg"; // Modifica l'estensione del file se necessario
    link.click();
    
    // Rilascia l'URL creato dopo l'esportazione.
    URL.revokeObjectURL(svgURL);
});
