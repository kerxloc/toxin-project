let burger = document.querySelector(".header-burger");
let menu = document.querySelector(".header-menu");
let body = document.querySelector("body");

burger.onclick = () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("lock");
};