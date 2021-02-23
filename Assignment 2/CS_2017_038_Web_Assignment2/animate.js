/*
Project Name:Sneakers Store
Author:Sarujan P,CS/2017/038
Email.saru.contacts@gmail.com
*/
var images = [],
    x = -1;

function displayNextImage() {
    x = (x == images.length - 1) ? 0 : x + 1;
    document.getElementById("img1").src = images[x];
    document.getElementById("img1").style.width = "90%";
}

function startTimer() {
    setInterval(displayNextImage, 3000);
}

images[0] = "images/bestseller2.jpg";
images[1] = "images/bestseller3.jpg";
images[2] = "images/bestseller1.jpg";

var images = [],
    x = -1;

function displayNextImage() {
    x = (x == images.length - 1) ? 0 : x + 1;
    document.getElementById("img1").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 3000);
}

images[0] = "images/bestseller2.jpg";
images[1] = "images/bestseller3.jpg";
images[2] = "images/bestseller1.jpg";

