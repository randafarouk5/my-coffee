const menuItem = document.getElementById("menu-item");
const navLinks = document.getElementById("navlinks");

menuItem.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
