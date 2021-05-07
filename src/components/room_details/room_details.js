import Chart from  '../../assets/vendors/chart.min.js';
import {dropdownForm, sum, guestApplyButton, guestClearButton} from '../guest_dropdown/guest_dropdown';

// Guest Dropdown
const bookingGuests = document.querySelector(".booking-guests__input");

function comparison(e) {
    let guestSum = sum();
        if (guestSum == 0) {
            bookingGuests.setAttribute("value", "Введите хотя бы одного гостя");
        } else if (guestSum == 1 || guestSum == 21 || guestSum == 31) {
            bookingGuests.setAttribute("value", guestSum + " гость");
            dropdownForm.classList.toggle("guest-dropdown_active");
        } else if (guestSum >= 2 && guestSum <= 4 || guestSum >= 22 && guestSum <= 24 || guestSum >= 32 && guestSum <= 34) {
            bookingGuests.setAttribute("value", guestSum + " гостя");
            dropdownForm.classList.toggle("guest-dropdown_active");
        } else {
            bookingGuests.setAttribute("value", guestSum + " гостей");
            dropdownForm.classList.toggle("guest-dropdown_active");
        }
        e.preventDefault();
}

guestApplyButton.addEventListener("click", comparison);

bookingGuests.addEventListener("click", () => {
    dropdownForm.classList.toggle("guest-dropdown_active");
});

guestClearButton.addEventListener("click", (e) => {
    bookingGuests.removeAttribute("value");
    e.preventDefault();
});

// Diagram
let ctx = document.querySelector("#round-diagram").getContext("2d");
let gradientOrange = ctx.createLinearGradient(0, 0, 0, 170);
let gradientPurple = ctx.createLinearGradient(0, 0, 0, 170);
let gradientGreen = ctx.createLinearGradient(0, 0, 0, 170);

gradientOrange.addColorStop(0, '#ffe39c');
gradientOrange.addColorStop(1,'#ffba9c');
gradientPurple.addColorStop(0, '#bc9cff');
gradientPurple.addColorStop(1, '#8ba4f9');
gradientGreen.addColorStop(0, '#6fcf97');
gradientGreen.addColorStop(1, '#66d2ea');

let myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
        datasets: [{
            data: [50, 25, 25, 0],
            backgroundColor: [gradientOrange, gradientPurple, gradientGreen]
        }]
    },
    options: {
        cutoutPercentage: 90,
        rotation: 2 * Math.PI / 4,
        legend: {
            display: false
        },
        events: []
    }
});

// Like
const likeButton = document.querySelector(".like");
const likeHeart = document.querySelector(".like__heart");
const likeNumber = document.querySelector(".like__number");

likeButton.addEventListener("click", (e) => {
    let target = e.target.closest("span");
    likeButton.classList.add("like_active");
    likeHeart.innerHTML = "favorite";
    likeHeart.style.color = "#bc9cff";
    likeNumber.style.color = "#bc9cff";
    if (likeNumber.textContent < 1) {
        likeNumber.textContent++;
    }
});