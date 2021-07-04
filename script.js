//Select all needed elements 
const hamburger = document.getElementsByClassName("hamburger")[0];
const navBar = document.getElementsByClassName("navigation")[0];
const listItems = document.getElementsByTagName("li");

//Create Functions to toggle ClassList for hamburger and navBar.
const hamburgerX = function () {
    hamburger.classList.toggle("active");
}

const showNavigation = function () {
    navBar.classList.toggle("active");
}

//adEventListenr to remove hamburger to show navigation and transform hamburger to "X"
hamburger.addEventListener("click", () => {
    hamburgerX();
    showNavigation();
})

//Add Event Listenr to the list items to make hamburger change display and hide navigation
for(let item of listItems) {
    item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navBar.classList.remove("active");
    })
}