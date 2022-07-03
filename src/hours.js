import createDomElement from "./createDomElement";
import navbar from "./navbar";

function hours(){

    navbar("hours");
    const content = document.getElementById('content');

    const main = document.createElement('div');
    main.classList.add("main-hours-section");

    const hours = document.createElement('div');
    hours.classList.add("hours-section");

    const hoursHeading = createDomElement('h1', "Hours", ["hours-heading"]);
    hours.append(hoursHeading);

    let text = ["Monday: 10am - 10pm", "Tuesday: 10am - 10pm", "Wednesday: 10am - 10pm", "Thursday: 10am - 10pm", "Friday: 10am - 2am", "Saturday: 10am - 2am", "Sunday: 12pm - 9pm"];
    
    for(let i = 0; i < text.length; i += 1) {
        const p = createDomElement('p', text[i], ["daily-hours"]);
        hours.append(p);
    }

    main.append(hours);
    content.append(main);
};

export default hours;