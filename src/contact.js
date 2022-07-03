import createDomElement from "./createDomElement";
import navbar from "./navbar";

function contact(){
    const content = document.getElementById('content');
    
    navbar("contact");

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