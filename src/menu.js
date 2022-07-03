import createDomElement from "./createDomElement";

function menu(){
    const content = document.getElementById('content');
    
    const navbar = document.createElement('div');
    navbar.classList.add("navbar")
    
    const heading = createDomElement('h1', "Organic Espresso", ['heading']);
    navbar.append(heading);

    const home = createDomElement('h2', "Home", ['home']);
    navbar.append(home);

    const menu = createDomElement('h2', "Menu", ["selected-page", "menu"]);
    navbar.append(menu);

    const contact = createDomElement('h2', "Contact", ['contact']);
    navbar.append(contact);

    content.append(navbar);

    const menuSection = document.createElement('div');
    menuSection.classList.add("menu-section");

    const flatWhite = createDomElement('div', "", ["menu-item"]);
    menuSection.append(flatWhite);
    const flatWhiteTitle = createDomElement('h1', "Flat White", ["flat-white-title"]);
    flatWhite.append(flatWhiteTitle);
    const flatWhiteImg = createDomElement('img', "", ["flat-white-img", "menu-img"]);
    flatWhite.append(flatWhiteImg);
    flatWhiteImg.src = '/Users/tylerjackson/Desktop/Repos/Odin Project/restaurant-page/src/img/robbie-down-LI8inyHnm_A-unsplash.jpg';
    menuSection.append(flatWhite);

    const americano = createDomElement('div', "", ["menu-item"]);
    menuSection.append(americano);
    const americanoTitle = createDomElement('h1', "Americano", ["americano-title"]);
    americano.append(americanoTitle);
    const americanoImg = createDomElement('img', "", ["americano-img", "menu-img"]);
    americano.append(americanoImg);
    americanoImg.src = '/Users/tylerjackson/Desktop/Repos/Odin Project/restaurant-page/src/img/nathan-dumlao-nBJHO6wmRWw-unsplash.jpg';
    menuSection.append(americano);

    const icedLatte = createDomElement('div', "", ["menu-item"]);
    menuSection.append(icedLatte);
    const icedLatteTitle = createDomElement('h1', "Iced Latte", ["iced-latte-title"]);
    icedLatte.append(icedLatteTitle);
    const icedLatteImg = createDomElement('img', "", ["iced-latte-img", "menu-img"]);
    icedLatte.append(icedLatteImg);
    icedLatteImg.src = '/Users/tylerjackson/Desktop/Repos/Odin Project/restaurant-page/src/img/nathan-dumlao-llib1mkWXlE-unsplash.jpg';
    menuSection.append(icedLatte);


    content.append(menuSection);
};

export default menu;
