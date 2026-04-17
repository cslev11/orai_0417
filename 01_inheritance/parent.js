class ParentViewElementClass{
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
    constructor(id){
        this.#id = id;
        this.#div = document.createElement('div');
        this.#div.classList.add("card");
    }

    /**
     * @returns {HTMLElement}
     */
    get div(){
        return this.#div;
    }

    /**
     * 
     * @param {HTMLElement} parent 
     */
    appendTo(parent){
        parent.appendChild(this.#div);
    }
}

class ClassA extends ParentViewElementClass{
    constructor(id){
        super(id)
        const p1 = document.createElement("p");
        p1.innerText = `id: ${id}`
        p1.classList.add("head");
        const p2 = document.createElement("p");
        p2.innerText = id

        this.div.appendChild(p1)
        this.div.appendChild(p2)
    }

}

class ClassB extends ParentViewElementClass{
    constructor(id){
        super(id)
        const p1 = document.createElement("p");
        p1.innerText = `id: ${id}`
        p1.classList.add("head");
        const p2 = document.createElement("p");
        p2.innerText = id

        this.div.appendChild(p1)
        this.div.appendChild(p2)
    }
}

export {ClassA, ClassB}