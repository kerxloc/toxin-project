import * as noUiSlider from '../../assets/js/nouislider.min';
import * as wNumb from '../../assets/js/wnumb.min';

// Create Slider
const priceSlider = document.querySelector(".price-filter");
    noUiSlider.create(priceSlider, {
        start: [0, 100000],
        step: 100,
        connect: true,
        format: wNumb({
            decimals: 0,
            thousand: ' ',
            suffix: '₽',
        }),
        range: {
            'min': 0,
            'max': 10000
        }
    });
// Get values from slider
let priceValue = document.querySelector(".price-header__prices");
    priceSlider.noUiSlider.on('update', (values) => {
        let arrToString = values.join(' - ');
        priceValue.textContent = arrToString;
    });

let expandListButton = document.querySelector(".icon__expand-facilities");
    expandListButton.addEventListener("click", () => {
        let expandListItems = document.querySelector(".facilities-items");
            expandListItems.classList.toggle("facilities-items__active");
            expandListButton.classList.toggle("icon__expand-facilities_active");
    });

//Swiper
let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector(".image");
const track = document.querySelector(".slider-track");
const items = document.querySelectorAll(".slider-item");
const itemsCount = (items.length - 8);
const btnPrev = document.querySelector(".image__expand_1");
const btnNext = document.querySelector(".image__expand_2");
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    btnPrev.disabled = position === 0;
};
checkBtns();