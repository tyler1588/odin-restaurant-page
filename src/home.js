import createDomElement from "./createDomElement";

function home(){
    document.body.style.backgroundImage = "url('/Users/tylerjackson/Desktop/Repos/Odin Project/restaurant-page/src/jazmin-quaynor-bm9zWKi_c9Y-unsplash.jpg')";
    const content = document.getElementById('content');
    
    const navbar = document.createElement('div');
    navbar.classList.add("navbar")
    
    const heading = createDomElement('h1', "Jackson's Kitchen", ['heading']);
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

    const introHeading = createDomElement('h2', "Why Jackson's Kitchen?", ["intro-heading"]);
    intro.append(introHeading);

    const introBody = createDomElement('p', "Jackson's has the best food! The atmosphere and customer service are luxurious! This is exactly the kind of place that I like to return to again and again.", ["intro-body"]);
    intro.append(introBody);

    homeSection.append(intro);

    const hours = document.createElement('div');
    hours.classList.add("home-element", "hours");

    const hoursHeading = createDomElement('h2', "Hours", ["hours-heading"]);
    hours.append(hoursHeading);

    let text = ["Monday: 10am - 10pm", "Tuesday: 10am - 10pm", "Wednesday 10am - 10pm", "Thursday 10am - 10pm", "Friday 10am - 2am", "Saturday 10am - 2am", "Sunday 12pm - 9pm"];
    
    for(let i = 0; i < text.length; i += 1) {
        const p = createDomElement('p', text[i], ["daily-hours"]);
        hours.append(p);
    }
    homeSection.append(hours);
    content.append(homeSection);
};

export default home;


