const prevArrow = document.querySelector("#arrow-prev");
const nextArrow = document.querySelector("#arrow-next");
const calendarForm = document.querySelector(".calendar-outter");
const expandInputIcons = document.querySelectorAll(".icon__expand-input");
const arrivalInput = document.querySelector("#arrival-input");
const departureInput = document.querySelector("#departure-input");
const calendarClearButton = document.querySelector(".calendar-footer__button_clear");
const calendarApplyButton = document.querySelector(".calendar-footer__button_apply");
const monthDays = document.querySelector(".calendar-inner__days");
const date = new Date();

const renderCalendar = () => {
    const currentMonthAndYear = document.querySelector(".calendar-inner__month");
    date.setDate(1);
   
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); //current month 
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate(); //previous month
   
    const firstDayIndex = date.getDay() - 1;
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex;
    
    const months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ];
    
    currentMonthAndYear.innerHTML = months[date.getMonth()] + " " + date.getFullYear();
    
    let days = "";
    
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }
    
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
            days += `<div class="today">${i}</div>`;
        } else {
        days += `<div>${i}</div>`;
        }
    }
    
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }

    monthDays.addEventListener("click", arrivalDate);

    function arrivalDate(e) {
        let arrivalDay = parseInt(e.target.closest("div").textContent);
        let selectedDay = e.target.closest("div");
        selectedDay.classList.add("selected-day_1");
        let fullDateArrival = arrivalDay + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
        arrivalInput.setAttribute("value", fullDateArrival);
        calendarClearButton.addEventListener("click", () => {
            if (selectedDay.classList.contains("selected-day_1")) {
                selectedDay.classList.remove("selected-day_1");
            }
        });
        monthDays.removeEventListener("click", arrivalDate);
        monthDays.addEventListener("click", departureDate);
    }

    function departureDate(e) {
        let departureDay = parseInt(e.target.closest("div").textContent);
        let selectedDay = e.target.closest("div");
        selectedDay.classList.add("selected-day_2");
        let fullDateDeparture = departureDay + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
        departureInput.setAttribute("value", fullDateDeparture);
        calendarClearButton.addEventListener("click", () => {
            if (selectedDay.classList.contains("selected-day_2")) {
                selectedDay.classList.remove("selected-day_2");
            }
        });
    }
    function removeInputValue(e) {
        arrivalInput.removeAttribute("value");
        departureInput.removeAttribute("value");
        monthDays.addEventListener("click", arrivalDate);
        monthDays.removeEventListener("click", departureDate);
        e.preventDefault();
    }

    calendarClearButton.addEventListener("click", removeInputValue);

    calendarApplyButton.addEventListener("click", (e) => {
        //e.preventDefault();
    })
}

 monthDays.addEventListener("click", (e) => {
    let prevDays = e.target.closest(".prev-date");
    let nextDays = e.target.closest(".next-date");
    if (prevDays != null) {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
    } else if (nextDays != null) {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
    }
})

prevArrow.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

nextArrow.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

arrivalInput.addEventListener("click", () => calendarForm.classList.toggle("calendar-outter_active"));
departureInput.addEventListener("click", () => calendarForm.classList.toggle("calendar-outter_active"));

renderCalendar();