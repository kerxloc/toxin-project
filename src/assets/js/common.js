import './dynamic_adaptive';

let burger = document.querySelector(".header-burger");
let menu = document.querySelector(".header-menu");
let body = document.querySelector("body");

burger.onclick = function () {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("lock");
};

function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
         }
    }
} 
    ibg();