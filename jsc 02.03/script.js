let img = document.querySelectorAll("img");
let btn = document.querySelectorAll("button");
btn[0].addEventListener("click", function () {
    img[0].style.filter = "none";
})
btn[1].addEventListener("click", function () {
    img[0].style.filter = "grayscale(100%)";
})
