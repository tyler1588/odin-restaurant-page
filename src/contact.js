import createDomElement from "./createDomElement";

function contact(){
    const content = document.getElementById('content');
    
    const navbar = document.createElement('div');
    navbar.classList.add("navbar")
    
    const heading = createDomElement('h1', "Jackson's Kitchen", ['heading']);
    navbar.append(heading);

    const home = createDomElement('h2', "Home", ['home']);
    navbar.append(home);

    const menu = createDomElement('h2', "Menu", ['menu']);
    navbar.append(menu);

    const contact = createDomElement('h2', "Contact", ["selected-page", "contact"]);
    navbar.append(contact);

    content.append(navbar);
};

export default contact;