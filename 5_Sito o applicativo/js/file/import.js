"use strict";
// JavaScript per gestire il caricamento dell'immagine e l'etichetta
const inputCaricaImmagine = document.getElementById('carica-immagine');
const divConSfondo = document.getElementById('drawingpage');
inputCaricaImmagine.addEventListener('change', function () {
    var _a, _b;
    const file = (_b = (_a = inputCaricaImmagine.files) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
    if (file) {
        const url = URL.createObjectURL(file);
        divConSfondo.style.backgroundImage = `url(${url})`;
    }
    else {
        divConSfondo.style.backgroundImage = '';
    }
});
