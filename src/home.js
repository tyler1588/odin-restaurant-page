function home(){
    const content = document.getElementById('content');
    const heading = document.createElement('h1');
    heading.innerText = "Jackson's Kitchen";
    content.append(heading);
    document.body.style.backgroundImage = "url('/Users/tylerjackson/Desktop/Repos/Odin Project/restaurant-page/src/jason-leung-poI7DelFiVA-unsplash.jpg')";
};

export default home;


