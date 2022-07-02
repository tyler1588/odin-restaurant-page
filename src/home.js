function home(){
    document.body.style.backgroundImage = "url('/Users/tylerjackson/Desktop/Repos/Odin Project/restaurant-page/src/jazmin-quaynor-bm9zWKi_c9Y-unsplash.jpg')";
    const content = document.getElementById('content');
    
    const navbar = document.createElement('div');
    navbar.classList.add("navbar")
    
    const heading = document.createElement('h1');
    heading.innerText = "Jackson's Kitchen";
    heading.classList.add("heading");
    navbar.append(heading);

    const home = document.createElement('h2');
    home.innerText = "Home";
    home.classList.add("selected-page", "home");
    navbar.append(home);

    const menu = document.createElement('h2');
    menu.innerText = "Menu";
    menu.classList.add("menu");
    navbar.append(menu);

    const contact = document.createElement('h2');
    contact.innerText = "Contact";
    contact.classList.add("contact");
    navbar.append(contact);

    content.append(navbar);

    const homeSection = document.createElement('div');
    homeSection.classList.add("home-section");

    const intro = document.createElement('div');
    intro.classList.add("home-element", "intro");
    const introHeading = document.createElement('h2');
    introHeading.innerText = "Why Jackson's Kitchen?";
    introHeading.classList.add("intro-heading");
    intro.append(introHeading);

    const introBody = document.createElement('p');
    introBody.innerText = "Jackson's has the best food! The atmosphere and customer service are luxurious! This is exactly the kind of place that I like to return to again and again.";
    introBody.classList.add("intro-body");
    intro.append(introBody);

    homeSection.append(intro);

    const hours = document.createElement('div');
    hours.classList.add("home-element", "hours");

    const hoursHeading = document.createElement('h2');
    hoursHeading.innerText = "Hours";
    hoursHeading.classList.add("hours-heading");
    hours.append(hoursHeading);

    var text = ["Monday: 10am - 10pm", "Tuesday: 10am - 10pm", "Wednesday 10am - 10pm", "Thursday 10am - 10pm", "Friday 10am - 2am", "Saturday 10am - 2am", "Sunday 12pm - 9pm"];
    for(var i = 0; i < text.length; i += 1) {
        var p = document.createElement("p");
        p.className = "daily-hours";
        p.innerHTML = text[i];
        hours.append(p);
    }

    homeSection.append(hours);

    content.append(homeSection);


};

export default home;


