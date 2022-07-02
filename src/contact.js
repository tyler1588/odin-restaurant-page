function contact(){
    const content = document.getElementById('content');
    
    const navbar = document.createElement('div');
    navbar.classList.add("navbar")
    
    const heading = document.createElement('h1');
    heading.innerText = "Jackson's Kitchen";
    heading.classList.add("heading");
    navbar.append(heading);

    const home = document.createElement('h2');
    home.innerText = "Home";
    home.classList.add("home");
    navbar.append(home);

    const menu = document.createElement('h2');
    menu.innerText = "Menu";
    menu.classList.add("menu");
    navbar.append(menu);

    const contact = document.createElement('h2');
    contact.innerText = "Contact";
    contact.classList.add("selected-page", "contact");
    navbar.append(contact);

    content.append(navbar);
};

export default contact;