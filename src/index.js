import home from "./home";
import clear from "./clear";
import styles from "./styles.css";
import menu from "./menu";
import contact from "./contact";


window.onload = function() {
    home();
};

document.body.addEventListener('click', (event) => {
    let buttonPressed = event.target.className;
    if (buttonPressed === 'home' || buttonPressed === 'menu' || buttonPressed === 'contact'){
        clear();
        if (buttonPressed === 'home'){
            home();
        } else if (buttonPressed === 'menu') {
            menu();
        } else {
            contact();
        }
    }

});



