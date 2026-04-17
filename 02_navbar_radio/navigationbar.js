import {ViewElement} from "./viewelement.js"

class NavigationBar {
    /**
     * @type {ViewElement[]}
     */
    #viewElementList = [];

    constructor() {
        const navbar = document.createElement("div");
        this.navbar = navbar
        this.navbar.id = "navbar";
        document.body.appendChild(this.navbar);
    }

    /**
     * 
     * @param {string} label 
     * @param {ViewElement} viewElement 
     */
    addViewElement(label, viewElement) {
        this.#viewElementList.push(viewElement);

        const id = viewElement.id;
        const radioId = id;

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "nav";
        input.id = radioId;
 
        const label1 = document.createElement("label");
        label1.htmlFor = radioId;
        label1.innerText = label

        input.addEventListener("change", () => {
            this.activate(id);
        });

        this.navbar.appendChild(input);
        this.navbar.appendChild(label1);
    }

    /**
     * 
     * @param {string} id 
     */
    activate(id) {
        for (const viewElement of this.#viewElementList) {
            viewElement.activate(id);
        }
    }
}

export {NavigationBar}