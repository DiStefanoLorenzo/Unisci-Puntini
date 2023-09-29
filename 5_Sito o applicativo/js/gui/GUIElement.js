/**
 * @author Lorenzo Di Stefano
 * @version 29.09.2023
 */
export class GUIElement {
    constructor(id) {
        this.id = id;
        this.element = document.getElementById(id);
    }
    // GETTERS.
    getElement() {
        return this.element;
    }
    getId() {
        return this.id;
    }
}
