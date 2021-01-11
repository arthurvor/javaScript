let btn = document.querySelectorAll("button");
let insert = document.createElement("h3");
insert.textContent = "Mr Title";

let head = document.getElementById("insert");

btn[0].addEventListener("click", function () {
    head.appendChild(insert);
})
