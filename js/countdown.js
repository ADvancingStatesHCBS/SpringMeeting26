/* =============================================
   Countdown Timer
   ============================================= */

function initCountdown() {
    const targetDate = new Date("April 27, 2026 09:00:00").getTime();

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        const elDays = document.getElementById("d-days");
        const elHours = document.getElementById("d-hours");
        const elMins = document.getElementById("d-mins");

        if (elDays) elDays.innerText = days < 10 ? "0" + days : days;
        if (elHours) elHours.innerText = hours < 10 ? "0" + hours : hours;
        if (elMins) elMins.innerText = mins < 10 ? "0" + mins : mins;

        if (distance < 0) {
            clearInterval(timer);
            if (elDays) elDays.innerText = "00";
            if (elHours) elHours.innerText = "00";
            if (elMins) elMins.innerText = "00";
        }
    }, 1000);
}
