import createDomElement from "./createDomElement";

function navbar(selectedPage){
    const content = document.getElementById('content');
    
    const navbar = document.createElement('div');
    navbar.classList.add("navbar")
    
    const heading = createDomElement('h1', "Organic Espresso", ['heading']);
    navbar.append(heading);

    if (selectedPage === "home"){
        const home = createDomElement('h2', "Home", ["selected-page", "home"]);
        navbar.append(home);
    } else {
        const home = createDomElement('h2', "Home", ["home"]);
        navbar.append(home);
    }

    if (selectedPage === "menu"){
        const menu = createDomElement('h2', "Menu", ["selected-page", "menu"]);
        navbar.append(menu);
    } else {
        const menu = createDomElement('h2', "Menu", ["menu"]);
        navbar.append(menu);
    }

    if (selectedPage === "hours"){
        const hours = createDomElement('h2', "Hours", ["selected-page", "hours"]);
        navbar.append(hours);
    } else {
        const hours = createDomElement('h2', "Hours", ["hours"]);
        navbar.append(hours);
    }

    content.append(navbar);
}

export default navbar

