import { NavigationBar } from "./NavigationBar.js";
import { ViewElement } from "./viewelement.js";

const navbar = new NavigationBar();

const a = new ViewElement("classA");
a.div.textContent = "ClassADiv";
a.div.classList = "hidden";
document.body.appendChild(a.div);

const b = new ViewElement("classB");
b.div.textContent = "ClassBDiv";
b.div.classList = "hidden";
document.body.appendChild(b.div);

navbar.addViewElement("ClassA oldala", a);
navbar.addViewElement("ClassB oldala", b);