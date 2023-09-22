// JavaScript per gestire il caricamento dell'immagine e l'etichetta
const inputCaricaImmagine = document.getElementById('carica-immagine') as HTMLInputElement;
const divConSfondo = document.getElementById('drawingpage') as HTMLElement;

inputCaricaImmagine.addEventListener('change', function() {
    const file = inputCaricaImmagine.files?.[0] ?? null;
    if (file) {
        const url = URL.createObjectURL(file);
        divConSfondo.style.backgroundImage = `url(${url})`;
    } else {
        divConSfondo.style.backgroundImage = '';
    }
});