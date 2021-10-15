//Get the button
let myButton2 = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let y = window.scrollY;
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 || y > 100) {
        myButton2.style.display = "block";
    } else {
        myButton2.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}