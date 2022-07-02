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

    const about = document.createElement('div');
    about.classList.add("home-element", "about");

    const hours = document.createElement('div');
    hours.classList.add("home-element", "hours");
    
    homeSection.append(intro);
    homeSection.append(about);
    homeSection.append(hours);

    content.append(homeSection);


};

export default home;


