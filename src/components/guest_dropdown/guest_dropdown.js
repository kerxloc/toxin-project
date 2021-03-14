const countPlus = document.querySelector(".guest-inner__column-4");
const countMinus = document.querySelector(".guest-inner__column-2");
const minusButtons = document.querySelectorAll(".guest-inner__circle-minus");
const countText1 = document.querySelector("#text-1");
const countText2 = document.querySelector("#text-2");
const countText3 = document.querySelector("#text-3");
export const guestApplyButton = document.querySelector(".guest-inner__button_apply");
export const guestClearButton = document.querySelector(".guest-inner__button_clear");
export const dropdownForm = document.querySelector(".guest-dropdown");

countPlus.addEventListener("click", (e) => {
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
    });

countMinus.addEventListener("click", (e) => {
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
    });

export function sum(countResult) {
    let countInt1 = parseInt(countText1.textContent);
    let countInt2 = parseInt(countText2.textContent);
    let countInt3 = parseInt(countText3.textContent);
    return countResult = countInt1 + countInt2 + countInt3;
}