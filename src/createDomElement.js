function createDomElement(type, innerText, classNames){
    const DOMelement = document.createElement(type);
    DOMelement.innerText = innerText;
    for (let i = 0; i < classNames.length; i++){
        DOMelement.classList.add(classNames[i]);
    }
    return DOMelement
}

export default createDomElement;