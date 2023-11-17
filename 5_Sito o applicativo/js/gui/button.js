import { GUIElement } from "./GUIElement.js";
/**
 * @author Lorenzo Di Stefano
 * @version 29.09.2023
 */
export class Button extends GUIElement {
    constructor(operation = () => { }, // Funzione da eseguire al click del pulsante.
    scrFirstImage = "", // Percorso dell'immagine di sfondo.
    scrSecondImage = "", // Percorso dell'immagine di sfondo.
    styleChanger, id) {
        super(id);
        this.operation = operation;
        this.scrFirstImage = scrFirstImage;
        this.scrSecondImage = scrSecondImage;
        this.styleChanger = styleChanger;
        // Assegnazione dei valori.
        this.status = false;
        this.element = document.getElementById(id);
        this.element.addEventListener("click", () => this.click());
        if (scrFirstImage != "") {
            this.element.style.backgroundImage = `url(${this.scrFirstImage})`;
            this.element.style.backgroundSize = "cover";
        }
    }
    // METODI PUBLIC.
    // GETTERS
    getStatus() {
        return this.status;
    }
    // METODO CLICK.
    /**
     * Al click del pulsante richiama i metodi
     * della classe.
     * (Richiamato dal Listener)
     */
    click() {
        this.changeStatus();
        this.changeBakgroundImage();
        this.executeOperation();
    }
    reset() {
        this.changeStatus();
        this.changeBakgroundImage();
    }
    // METODI PRIVATE.
    /**
     * Cambia lo stato del pulsante.
     * ON   -> OFF
     * OFF  -> ON
     */
    changeStatus() {
        if (!this.styleChanger) {
            return;
        }
        this.status = !this.status;
    }
    /**
     * Cambia l'immagine di sfondo del pulsante.
     * ON   -> Imposta come sfondo la seconda immagine.
     * OFF  -> Imposta come sfondo la prima immagine.
     */
    changeBakgroundImage() {
        if (!this.styleChanger) {
            return;
        }
        if (this.status) {
            if (this.scrSecondImage != "") {
                this.element.style.backgroundImage = `url(${this.scrSecondImage})`;
                this.element.style.backgroundColor = "gray";
                this.element.style.borderColor = "black";
            }
        }
        else {
            if (this.scrFirstImage != "") {
                this.element.style.backgroundImage = `url(${this.scrFirstImage})`;
                this.element.style.backgroundColor = "white";
                this.element.style.borderColor = "white";
            }
        }
    }
    /**
     * Permette di eseguire la seguente operazione quando
     * il pulsante viene premuto.
     * @param operation Operatione da svolgere.
     */
    executeOperation() {
        this.operation();
    }
}
