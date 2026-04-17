import { Manager } from "./manager.js";
import { ViewElement } from "./viewelement.js";

class ButtonElement extends ViewElement {
    /**
     * @type {HTMLButtonElement}
     */
    #button;

    /**
     * 
     * @param {Manager} manager 
     */
    constructor(manager) {
        super(manager);

        this.#button = document.createElement('button');
        this.#button.innerText = "Lista lekeres";

        this.#button.addEventListener('click', () => {
            this.manager.getAllElement();
        });

        this.div.appendChild(this.#button);
    }

    /**
     * 
     * @param {HTMLElement} parentElement 
     */
    appendTo(parentElement) {
        parentElement.appendChild(this.div);
    }
}

export {ButtonElement}