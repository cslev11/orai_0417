/**
 * @callback RenderCallback
 * @param {Color[]} list
 * @returns {void}
 */

class Manager {
    /**
     * @type {Color[]}
     */
    #list;

    /**
     * @type {RenderCallback}
     */
    #renderCallback;

    /**
     * 
     * @param {Color[]} data
     */
    constructor(data) {
        this.#list = data;
    }

    setRenderCallback(renderCallback) {
        this.#renderCallback = renderCallback;
    }

    /**
     * @returns {void}
     */
    getEmptyList() {
        if (this.#renderCallback) {
            this.#renderCallback([]);
        }
    }

    getAllElement() {
        if (this.#renderCallback) {
            this.#renderCallback(this.#list);
        }
    }
}

export {Manager}