/*
Project Name:Sneakers Store
Author:Sarujan P,CS/2017/038
Email.saru.contacts@gmail.com
*/
window.onscroll = function() {
    myFunction()
};

var navbar = document.getElementById("nav");

var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset > 60) {
        navbar.style.background = "#365C9A";
    } else {
        navbar.style.background = "transparent";
    }
}