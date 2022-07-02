function clear() {
    const content = document.getElementById("content");

    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild);
    }
}

export default clear;