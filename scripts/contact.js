// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let clicked_button = document.getElementById("submit-button");
let page = document.getElementById("contact-page");
function change_line(){
    page.innerHTML = "Thank you for your message";
}
clicked_button.addEventListener("click", change_line);