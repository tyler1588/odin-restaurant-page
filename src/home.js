function home(){
    const content = document.getElementById('content');
    
    const navbar = document.createElement('div');
    navbar.classList.add("navbar")
    
    const heading = document.createElement('h1');
    heading.innerText = "Jackson's Kitchen";
    heading.classList.add("heading")
    navbar.append(heading);

    
    const home = document.createElement('h2');
    home.innerText = "Home";
    navbar.append(home);

    const menu = document.createElement('h2');
    menu.innerText = "Menu";
    navbar.append(menu);

    const contact = document.createElement('h2');
    contact.innerText = "Contact";
    navbar.append(contact);

    content.append(navbar);
    document.body.style.backgroundImage = "url('/Users/tylerjackson/Desktop/Repos/Odin Project/restaurant-page/src/jason-leung-poI7DelFiVA-unsplash.jpg')";
};

export default home;


