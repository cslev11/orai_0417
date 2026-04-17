class ViewElement {
    /**
     * @type {string}
     */
    #id;

    /**
     * @type {HTMLDivElement}
     */
    #div;

    /**
     * 
     * @param {string} id 
     */
    constructor(id) {
        this.#id = id;
        this.#div = document.createElement('div');
    }

    /**
     * @returns {string}
     */
    get id() {
        return this.#id;
    }

    /**
     * @returns {HTMLDivElement}
     */
    get div() {
        return this.#div;
    }

    /**
     * 
     * @param {HTMLElement} parent 
     */
    appendTo(parent) {
        parent.appendChild(this.#div);
    }
}

export {ViewElement}