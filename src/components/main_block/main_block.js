import {dropdownForm, sum, guestApplyButton, guestClearButton} from '../guest_dropdown/guest_dropdown'

const guestInput = document.querySelector(".form-inner__input_large");
const expandInputIcons = document.querySelectorAll(".icon__expand-input");

function comparison(e) {
    let landingSum = sum();
        if (landingSum == 0) {
            guestInput.setAttribute("value", "Введите хотя бы одного гостя");
        } else if (landingSum == 1 || landingSum == 21 || landingSum == 31) {
            guestInput.setAttribute("value", landingSum + " гость");
            dropdownForm.classList.toggle("guest-dropdown_active");
            expandInputIcons[2].classList.toggle("icon__expand-input_active")
        } else if (landingSum >= 2 && landingSum <= 4 || landingSum >= 22 && landingSum <= 24 || landingSum >= 32 && landingSum <= 34) {
            guestInput.setAttribute("value", landingSum + " гостя");
            dropdownForm.classList.toggle("guest-dropdown_active");
            expandInputIcons[2].classList.toggle("icon__expand-input_active")
        } else {
            guestInput.setAttribute("value", landingSum + " гостей");
            dropdownForm.classList.toggle("guest-dropdown_active");
            expandInputIcons[2].classList.toggle("icon__expand-input_active")
        }
        e.preventDefault();
}

guestInput.addEventListener("click", () => {
    dropdownForm.classList.toggle("guest-dropdown_active");
    expandInputIcons[2].classList.toggle("icon__expand-input_active");
});

expandInputIcons[2].addEventListener("click", () => {
    dropdownForm.classList.toggle("guest-dropdown_active");
    expandInputIcons[2].classList.toggle("icon__expand-input_active");
});

guestApplyButton.addEventListener("click", comparison);

guestClearButton.addEventListener("click", (e) => {
    guestInput.removeAttribute("value");
    e.preventDefault();
});