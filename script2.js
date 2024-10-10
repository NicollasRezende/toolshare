const mobileMenu = document.querySelector(".mobile-menu");
const navList = document.querySelector(".nav-list");
const body = document.querySelector("body");

mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
    body.classList.toggle("menu-active");
});
