import * as noUiSlider from '../../assets/js/nouislider.min';
import * as wNumb from '../../assets/js/wnumb.min';

//Slider
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

let priceValue = document.querySelector(".price-header__prices");
    priceSlider.noUiSlider.on('update', () => {
        priceValue.textContent = priceSlider.noUiSlider.get();
    });
