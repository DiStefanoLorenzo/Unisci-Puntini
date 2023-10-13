import { GUIElement } from "./GUIElement.js";

/**
 * @author Lorenzo Di Stefano
 * @version 29.09.2023
 */

export class Button extends GUIElement{
    public status: boolean;        // Controlla se il bottone sia stato premuto (ON/OFF).

    constructor(
        protected operation: () => void = () => {}, // Funzione da eseguire al click del pulsante.
        protected scrFirstImage: string = "",       // Percorso dell'immagine di sfondo.
        protected scrSecondImage: string = "",      // Percorso dell'immagine di sfondo.
        protected styleChanger: boolean,
        id: string,                                 // ID dell'elemnto HTML.
        
    ){
        super(id);
        // Assegnazione dei valori.
        this.status = false;
        this.element = document.getElementById(id) as HTMLElement;
        this.element.addEventListener("click",() => this.click());
        if(scrFirstImage!=""){
            this.element.style.backgroundImage = `url(${this.scrFirstImage})`;
            this.element.style.backgroundSize = "cover";
        }
    }

    // METODI PUBLIC.

    // GETTERS

    public getStatus(): boolean {
        return this.status;
    }

    // METODO CLICK.

    /**
     * Al click del pulsante richiama i metodi
     * della classe.
     * (Richiamato dal Listener)
     */
    public click(): void {
        this.changeStatus();
        this.changeBakgroundImage();
        this.executeOperation();
    }

    public reset(): void {
        this.changeStatus();
        this.changeBakgroundImage();
    }

    // METODI PRIVATE.

    /**
     * Cambia lo stato del pulsante.
     * ON   -> OFF
     * OFF  -> ON
     */
    private changeStatus(): void {
        if(!this.styleChanger){
            return;
        }
        this.status = !this.status;
    }

    /**
     * Cambia l'immagine di sfondo del pulsante.
     * ON   -> Imposta come sfondo la seconda immagine.
     * OFF  -> Imposta come sfondo la prima immagine.
     */
    private changeBakgroundImage(): void {
        if(!this.styleChanger){
            return;
        }
        if(this.status) {
            if(this.scrSecondImage!="") {
                this.element.style.backgroundImage = `url(${this.scrSecondImage})`;
                this.element.style.backgroundColor = "gray";
                this.element.style.border = "solid";
            }
        }else{
            if(this.scrFirstImage!="") {
                this.element.style.backgroundImage = `url(${this.scrFirstImage})`;
                this.element.style.backgroundColor = "white";
                this.element.style.border = "none";
            }
        }
    }

    /**
     * Permette di eseguire la seguente operazione quando
     * il pulsante viene premuto.
     * @param operation Operatione da svolgere.
     */
    private executeOperation(): void {
        this.operation();
    }
}