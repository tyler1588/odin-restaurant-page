import createDomElement from "./createDomElement";
import navbar from "./navbar";

function home(){
    document.body.style.backgroundImage = "url('/Users/tylerjackson/Desktop/Repos/Odin Project/restaurant-page/src/img/daan-evers-tKN1WXrzQ3s-unsplash.jpg')";
    navbar("home");

    const content = document.getElementById('content');

    const homeSection = createDomElement('div',undefined, ["home-section"]);

    const introHeading = createDomElement('h1', "The Best Espresso, Period.", ["intro-heading"]);
    homeSection.append(introHeading);

    const introBody = createDomElement('p', "Made with passion since 2010.", ["intro-body"]);
    homeSection.append(introBody);
    
    content.append(homeSection);
};

export default home;


