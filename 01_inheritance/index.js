import {ClassA, ClassB} from "./parent.js";

const classA = new ClassA("ClassA")
const classB = new ClassB("ClassB")

classA.appendTo(document.body);
classB.appendTo(document.body);