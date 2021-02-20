// Email validation
export function emailValidation() {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    const indicator = document.querySelector(".email-box__indicator");
        if (emailInput.value.match(pattern)) {
            indicator.classList.add("email-box__indicator_valid")
            indicator.classList.remove("email-box__indicator_invalid")
        } else {
            indicator.classList.add("email-box__indicator_invalid")
            indicator.classList.remove("email-box__indicator_valid")
        }
        if (emailInput.value == "") {
            indicator.classList.remove("email-box__indicator_invalid")
            indicator.classList.remove("email-box__indicator_valid")
        }
}

const emailInput = document.querySelector(".email-box__email");
emailInput.addEventListener("input", emailValidation);