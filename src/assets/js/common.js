import './dynamic_adaptive';

let burger = document.querySelector(".header-burger");
let menu = document.querySelector(".header-menu");
let body = document.querySelector("body");

burger.onclick = function () {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("lock");
};
