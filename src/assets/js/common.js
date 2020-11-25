import './dynamic_adaptive';

let burger = document.querySelector(".header-burger");
let menu = document.querySelector(".header-menu");
let body = document.querySelector("body");

//guest dropdown variables
let countPlus = document.querySelector(".guest-inner__column-4");
let countMinus = document.querySelector(".guest-inner__column-2");
let minusButtons = document.querySelectorAll(".guest-inner__circle-minus");
let countText1 = document.querySelector("#text-1");
let countText2 = document.querySelector("#text-2");
let countText3 = document.querySelector("#text-3");
let guestApplyButton = document.querySelector(".guest-inner__button_apply");
let guestClearButton = document.querySelector(".guest-inner__button_clear");
let guestInput = document.querySelector(".form-inner__input_large");

 
countPlus.onclick = (e) => {
    let target = e.target.closest("div");
    if (target.getAttribute("id") == "Pbutton-1") {
        countText1.textContent++;
        minusButtons[0].style.borderColor = 'rgba(31, 32, 65, 0.5)';
        minusButtons[0].children[0].style.color = 'rgba(31, 32, 65, 0.5)';
    } else if (target.getAttribute("id") == "Pbutton-2") {
        countText2.textContent++;
        minusButtons[1].style.borderColor = 'rgba(31, 32, 65, 0.5)';
        minusButtons[1].children[0].style.color = 'rgba(31, 32, 65, 0.5)';
    } else if (target.getAttribute("id") == "Pbutton-3") {
        countText3.textContent++;
        minusButtons[2].style.borderColor = 'rgba(31, 32, 65, 0.5)';
        minusButtons[2].children[0].style.color = 'rgba(31, 32, 65, 0.5)';
    }
}
countMinus.onclick = (e) => {
    let target = e.target.closest("div");
    if (target.getAttribute("id") == "Mbutton-1") {
        if (countText1.textContent > 0) {
            countText1.textContent--;
        } else return;
    }
    if (target.getAttribute("id") == "Mbutton-2") {
        if (countText2.textContent > 0) {
            countText2.textContent--;
        } else return;
    }
    if (target.getAttribute("id") == "Mbutton-3") {
        if (countText3.textContent > 0) {
            countText3.textContent--;
        } else return;
    }
    if (countText1.textContent == 0) {
        minusButtons[0].style.borderColor = '';
        minusButtons[0].children[0].style.color = '';
    } 
    if (countText2.textContent == 0) {
        minusButtons[1].style.borderColor = '';
        minusButtons[1].children[0].style.color = '';
    } 
    if (countText3.textContent == 0) {
        minusButtons[2].style.borderColor = '';
        minusButtons[2].children[0].style.color = '';
    }
}

guestApplyButton.onclick = () => {
    let a = parseInt(countText1.textContent);
    let b = parseInt(countText2.textContent);
    let c = parseInt(countText3.textContent);
    let countResult = a + b + c;
    if (countResult == 1 || countResult == 21 || countResult == 31) {
        guestInput.setAttribute("value", countResult + " гость");
    } else if (countResult >= 2 && countResult <= 4 || countResult >= 22 && countResult <= 24) {
        guestInput.setAttribute("value", countResult + " гостя");
    } else {
        guestInput.setAttribute("value", countResult + " гостей");
    }
}
guestClearButton.onclick = () => {
    guestInput.removeAttribute("value");
}


burger.onclick = () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("lock");
};

function ibg () {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
         }
    }
} 
    ibg();