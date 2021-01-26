import './assets/js/dynamic_adaptive';
import './components/header/header';
//import './components/guest_dropdown/guest_dropdown';
//import './components/calendar/calendar';
import './components/search_room/search_room';

function ibg () {
    let ibg = document.querySelectorAll(".ibg");
        for (var i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
            }
        }
} 
    ibg();