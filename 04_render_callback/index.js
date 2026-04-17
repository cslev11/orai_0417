import { Color } from './color.js';
import { Manager } from './manager.js';
import { TableElement } from './tableelement.js';
import { ButtonElement } from './buttonelement.js';
import { EmptyButtonElement } from './emptybuttonelement.js';
import data from './data.json' with { type: 'json' };

const colors = [];
for (const color of data.arr) {
    colors.push(new Color(color.szin));
}

const manager = new Manager(colors);

const buttonElement = new ButtonElement(manager);
buttonElement.appendTo(document.body);

const emptyButtonElement = new EmptyButtonElement(manager);
emptyButtonElement.appendTo(document.body);

const tableElement = new TableElement(manager);
tableElement.appendTo(document.body);