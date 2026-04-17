import { Manager } from "./manager.js";
import { ViewElement } from "./viewelement.js";
import { Color } from "./color.js";

class TableElement extends ViewElement{
    /**
     * @type {HTMLTableElement}
     */
    #table;

    /**
     * @type {HTMLTableRowElement}
     */
    #headerRow;
    
    /**
     * 
     * @param {Manager} manager 
     */
    constructor(manager) {
        super(manager);

        this.#table = document.createElement('table');
        this.#headerRow = document.createElement('tr');
        const th = document.createElement('th');
        th.innerText = "Elemek";
        this.#headerRow.appendChild(th);
        this.#table.appendChild(this.#headerRow);

        const tdRow = document.createElement('tr');
        const td = document.createElement('td');
        td.innerText = "Meg nem tortent callback hivas!";
        tdRow.appendChild(td);
        this.#table.appendChild(tdRow);

        this.div.appendChild(this.#table);

        manager.setRenderCallback((colorList) => this.render(colorList));
    }

    /**
     * 
     * @param {Color[]} colorList 
     */
    render(colorList) {
        this.#table.innerHTML = "";
        this.#table.appendChild(this.#headerRow);

        if (colorList.length == 0) {
            const tdRow = document.createElement('tr');
            const td = document.createElement('td');
            td.innerText = "Ures lista";
            tdRow.appendChild(td);
            this.#table.appendChild(tdRow);
        } else {
            for (const color of colorList) {
                const tdRow = document.createElement('tr');
                const td = document.createElement('td');
                td.innerText = color.szin;
                tdRow.appendChild(td);
                this.#table.appendChild(tdRow);
            }
        }
    }

    /**
     * 
     * @param {HTMLElement} parentElement 
     */
    appendTo(parentElement) {
        parentElement.appendChild(this.div);
    }
}

export {TableElement}