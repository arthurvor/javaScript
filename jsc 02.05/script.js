let btn = document.querySelectorAll("button");

var br = document.createElement("br");
var down = document.getElementById("insert");
btn[0].onclick = function () {
    forma();
}

function forma() {

    var newForm = document.createElement("form");
    newForm.setAttribute("method", "post");
    newForm.setAttribute("action", "");

    var FullName = document.createElement("input");
    FullName.setAttribute("type", "text");
    FullName.setAttribute("name", "FullName");
    FullName.setAttribute("placeholder", "Full Name");
    FullName.setAttribute("class", "my-1");

    var Email = document.createElement("input");
    Email.setAttribute("type", "text");
    Email.setAttribute("name", "dob");
    Email.setAttribute("placeholder", "Email");
    Email.setAttribute("class", "my-1");

    var comment = document.createElement("input");
    comment.setAttribute("type", "text");
    comment.setAttribute("placeholder", "Please enter a comment or dont i dont care");
    comment.setAttribute("size", "75");
    comment.setAttribute("class", "my-1");

    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("class", "my-1");
    s.prevenDefault;

    newForm.appendChild(FullName);
    newForm.appendChild(br.cloneNode());
    newForm.appendChild(Email);
    newForm.appendChild(br.cloneNode());
    newForm.appendChild(comment);
    newForm.appendChild(br.cloneNode());
    newForm.appendChild(s);
    down.appendChild(newForm);
}
