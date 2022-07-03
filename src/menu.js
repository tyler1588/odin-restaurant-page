import createDomElement from "./createDomElement";
import navbar from "./navbar";

function menu(){
    navbar("menu");
    const content = document.getElementById('content');

    const menuSection = document.createElement('div');
    menuSection.classList.add("menu-section");

    const flatWhite = createDomElement('div', "", ["menu-item"]);
    menuSection.append(flatWhite);
    const flatWhiteTitle = createDomElement('h1', "Flat White");
    flatWhite.append(flatWhiteTitle);
    const flatWhiteImg = createDomElement('img', "", ["menu-img"], '/Users/tylerjackson/Desktop/Repos/Odin Project/restaurant-page/src/img/robbie-down-LI8inyHnm_A-unsplash.jpg');
    flatWhite.append(flatWhiteImg);
    menuSection.append(flatWhite);

    const americano = createDomElement('div', "", ["menu-item"]);
    menuSection.append(americano);
    const americanoTitle = createDomElement('h1', "Americano");
    americano.append(americanoTitle);
    const americanoImg = createDomElement('img', "", ["menu-img"], '/Users/tylerjackson/Desktop/Repos/Odin Project/restaurant-page/src/img/nathan-dumlao-nBJHO6wmRWw-unsplash.jpg');
    americano.append(americanoImg);
    menuSection.append(americano);

    const icedLatte = createDomElement('div', "", ["menu-item"]);
    menuSection.append(icedLatte);
    const icedLatteTitle = createDomElement('h1', "Iced Latte");
    icedLatte.append(icedLatteTitle);
    const icedLatteImg = createDomElement('img', "", ["menu-img"], '/Users/tylerjackson/Desktop/Repos/Odin Project/restaurant-page/src/img/nathan-dumlao-llib1mkWXlE-unsplash.jpg');
    icedLatte.append(icedLatteImg);
    menuSection.append(icedLatte);

    content.append(menuSection);
};

export default menu;
