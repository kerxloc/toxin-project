import{emailValidation} from '../login_block/login_block';

const emailInput = document.querySelector("#reg-email");
emailInput.addEventListener("input", emailValidation);