const countPlus = document.querySelector(".guest-inner__column-4");
const countMinus = document.querySelector(".guest-inner__column-2");
const minusButtons = document.querySelectorAll(".guest-inner__circle-minus");
const countText1 = document.querySelector("#text-1");
const countText2 = document.querySelector("#text-2");
const countText3 = document.querySelector("#text-3");
const guestApplyButton = document.querySelector(".guest-inner__button_apply");
const guestClearButton = document.querySelector(".guest-inner__button_clear");
const guestInput = document.querySelector(".form-inner__input_large");
const guestForm = document.querySelector(".guest-dropdown");
const expandInputIcons = document.querySelectorAll(".icon__expand-input");

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
    let countInt1 = parseInt(countText1.textContent);
    let countInt2 = parseInt(countText2.textContent);
    let countInt3 = parseInt(countText3.textContent);
    let countResult = countInt1 + countInt2 + countInt3;
        if (countResult == 0) {
            guestInput.setAttribute("value", "Введите хотя бы одного гостя");
        } else if (countResult == 1 || countResult == 21 || countResult == 31) {
            guestInput.setAttribute("value", countResult + " гость");
            guestForm.classList.toggle("guest-dropdown_active");
            expandInputIcons[2].classList.toggle("icon__expand-input_active")
        } else if (countResult >= 2 && countResult <= 4 || countResult >= 22 && countResult <= 24) {
            guestInput.setAttribute("value", countResult + " гостя");
            guestForm.classList.toggle("guest-dropdown_active");
            expandInputIcons[2].classList.toggle("icon__expand-input_active")
        } else {
            guestInput.setAttribute("value", countResult + " гостей");
            guestForm.classList.toggle("guest-dropdown_active");
            expandInputIcons[2].classList.toggle("icon__expand-input_active")
        }
}
guestClearButton.onclick = () => {
    guestInput.removeAttribute("value");
}

guestInput.addEventListener("click", () => {
    guestForm.classList.toggle("guest-dropdown_active")
    expandInputIcons[2].classList.toggle("icon__expand-input_active")
    }
);
expandInputIcons[2].addEventListener("click", () => {
    guestForm.classList.toggle("guest-dropdown_active")
    expandInputIcons[2].classList.toggle("icon__expand-input_active")
    }
);