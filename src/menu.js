import createDomElement from "./createDomElement";
import navbar from "./navbar";

function menu(){
    navbar("menu");
    const content = document.getElementById('content');

    const menuSection = document.createElement('div');
    menuSection.classList.add("menu-section");

    const flatWhite = createDomElement('div', undefined, ["menu-item"]);
    const flatWhiteTitle = createDomElement('h1', "Flat White");
    const flatWhiteImg = createDomElement('img', undefined, ["menu-img"], '/Users/tylerjackson/Desktop/Repos/Odin Project/restaurant-page/src/img/robbie-down-LI8inyHnm_A-unsplash.jpg');
    flatWhite.append(flatWhiteTitle);
    flatWhite.append(flatWhiteImg);
    menuSection.append(flatWhite);

    const americano = createDomElement('div', undefined, ["menu-item"]);
    const americanoTitle = createDomElement('h1', "Americano");
    const americanoImg = createDomElement('img', undefined, ["menu-img"], '/Users/tylerjackson/Desktop/Repos/Odin Project/restaurant-page/src/img/nathan-dumlao-nBJHO6wmRWw-unsplash.jpg');
    americano.append(americanoTitle);
    americano.append(americanoImg);
    menuSection.append(americano);

    const icedLatte = createDomElement('div', undefined, ["menu-item"]);
    const icedLatteTitle = createDomElement('h1', "Iced Latte");
    const icedLatteImg = createDomElement('img', undefined, ["menu-img"], '/Users/tylerjackson/Desktop/Repos/Odin Project/restaurant-page/src/img/nathan-dumlao-llib1mkWXlE-unsplash.jpg');
    icedLatte.append(icedLatteTitle);
    icedLatte.append(icedLatteImg);
    menuSection.append(icedLatte);

    content.append(menuSection);
};

export default menu;
