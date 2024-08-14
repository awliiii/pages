/* NAVBAR */
var navbar = document.getElementById("top-nav");
var sticky = navbar.offsetTop;

function updateNavbar() {
  if (window.scrollY >= sticky) { // praktycznie zawsze będzie true
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
window.onscroll = function() { updateNavbar() };

/* HAMBURGER MENU */
function toggleHamburger() {
    var categories = document.getElementById("menu");
    var overlay = document.getElementById("page-mask");
    if (categories.style.display === "flex") {
        categories.style.display = "none";
        overlay.classList.add("transparent");
    } else {
        categories.style.display = "flex";
        overlay.classList.remove("transparent");
    }
} 