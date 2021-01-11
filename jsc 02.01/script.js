let p = document.querySelector("p");
let btn = document.querySelectorAll("button");
btn[0].addEventListener("click", function () {
    p.style.color = "blue";
})
btn[1].addEventListener("click", function () {
    p.style.color = "green"; //antro butono click 
})
btn[2].addEventListener("click", function () {
    p.style.color = "red"; //trecio butono click 
})
