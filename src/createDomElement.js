function createDomElement(type, innerText, classNames, imgURL){
    const DOMelement = document.createElement(type);
    if (innerText != undefined){
        DOMelement.innerText = innerText;
    }
    if (classNames != undefined){
        for (let i = 0; i < classNames.length; i++){
            DOMelement.classList.add(classNames[i]);
        }
    }
    if (imgURL != undefined){
        DOMelement.src = imgURL;
    }
    return DOMelement
}

export default createDomElement;