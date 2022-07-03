import createDomElement from "./createDomElement";

function home(){
    document.body.style.backgroundImage = "url('/Users/tylerjackson/Desktop/Repos/Odin Project/restaurant-page/src/img/daan-evers-tKN1WXrzQ3s-unsplash.jpg')";
    const content = document.getElementById('content');
    
    const navbar = document.createElement('div');
    navbar.classList.add("navbar")
    
    const heading = createDomElement('h1', "Organic Espresso", ['heading']);
    navbar.append(heading);

    const home = createDomElement('h2', "Home", ["selected-page", "home"]);
    navbar.append(home);

    const menu = createDomElement('h2', "Menu", ["menu"]);
    navbar.append(menu);

    const contact = createDomElement('h2', "Contact", ["contact"]);
    navbar.append(contact);

    content.append(navbar);

    const homeSection = document.createElement('div');
    homeSection.classList.add("home-section");

    const intro = document.createElement('div');
    intro.classList.add("home-element", "intro");

    const introHeading = createDomElement('h1', "The Best Espresso, Period.", ["intro-heading"]);
    intro.append(introHeading);

    const introBody = createDomElement('p', "Made with passion since 2010.", ["intro-body"]);
    intro.append(introBody);

    homeSection.append(intro);
    content.append(homeSection);
};

export default home;


