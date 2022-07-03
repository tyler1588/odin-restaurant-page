import home from "./home";
import clear from "./clear";
import styles from "./styles.css";
import menu from "./menu";
import hours from "./hours";

window.onload = function() {
    home();
};

document.body.addEventListener('click', (event) => {
    let buttonPressed = event.target.className;
    if (buttonPressed === 'home' || buttonPressed === 'menu' || buttonPressed === 'hours'){
        clear();
        if (buttonPressed === 'home'){
            home();
        } else if (buttonPressed === 'menu') {
            menu();
        } else {
            hours();
        }
    }

});



