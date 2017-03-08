var imageSlideshow = document.getElementById("slideshow");
var images = ["images/HotTub1.jpg", "images/HotTub2.jpg"];
var imageIndex = 0;

function changeImage() {
    "use strict";
    imageSlideshow.setAttribute("src", images[imageIndex]);
    imageIndex += 1;
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
}

window.onload = function () {
    "use strict";
    setInterval(changeImage, 2500);
};