import { Manager } from "./manager.js";
import { ViewElement } from "./viewelement.js";

class EmptyButtonElement extends ViewElement {
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
        this.#button.innerText = "Ures lista lekeres";

        this.#button.addEventListener('click', () => {
            this.manager.getEmptyList();
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

export {EmptyButtonElement}