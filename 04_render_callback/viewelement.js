import { Manager } from "./manager.js";

class ViewElement {
    /**
     * @type {HTMLDivElement}
     */
    #div;

    /**
     * @type {Manager}
     */
    #manager;

    /**
     * 
     * @param {Manager} manager 
     */
    constructor(manager) {
        this.#manager = manager;

        this.#div = document.createElement('div');
    }

    /**
     * 
     * @param {HTMLElement} parentElement 
     * @returns {void}
     */
    appendTo(parentElement) {
        parentElement.appendChild(this.#div);
    }

    /**
     * @returns {Manager}
     */
    get manager() {
        return this.#manager;
    }

    /**
     * @returns {HTMLDivElement}
     */
    get div() {
        return this.#div;
    }
}

export {ViewElement}