/**
 * @author Lorenzo Di Stefano
 * @version 29.09.2023
 */

export class GUIElement{
    protected element: HTMLElement;

    constructor(
        protected id: string,
    ){
        this.element = document.getElementById(id) as HTMLElement;
    }

    // GETTERS.

    public getElement(): HTMLElement{
        return this.element;
    }

    public getId(): string{
        return this.id;
    }
}