function clear(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
}
  
let parent = document.getElementById("content");
parent.addEventListener("click", function(){
    clear(parent);
});

export default clear;