import createDomElement from "./createDomElement";

function contact(){
    const content = document.getElementById('content');
    
    const navbar = document.createElement('div');
    navbar.classList.add("navbar")
    
    const heading = createDomElement('h1', "Organic Espresso", ['heading']);
    navbar.append(heading);

    const home = createDomElement('h2', "Home", ['home']);
    navbar.append(home);

    const menu = createDomElement('h2', "Menu", ['menu']);
    navbar.append(menu);

    const contact = createDomElement('h2', "Contact", ["selected-page", "contact"]);
    navbar.append(contact);

    content.append(navbar);

    // const hours = document.createElement('div');
    // hours.classList.add("home-element", "hours");

    // const hoursHeading = createDomElement('h2', "Hours", ["hours-heading"]);
    // hours.append(hoursHeading);

    // let text = ["Monday: 10am - 10pm", "Tuesday: 10am - 10pm", "Wednesday 10am - 10pm", "Thursday 10am - 10pm", "Friday 10am - 2am", "Saturday 10am - 2am", "Sunday 12pm - 9pm"];
    
    // for(let i = 0; i < text.length; i += 1) {
    //     const p = createDomElement('p', text[i], ["daily-hours"]);
    //     hours.append(p);
    // }
    // homeSection.append(hours);
};

export default contact;