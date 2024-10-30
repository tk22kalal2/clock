// Display Digital Clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById("digitalClock").textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Countdown Timer
let countdownInterval;
function startCountdown() {
    clearInterval(countdownInterval);

    // Get hours, minutes, and seconds from input fields
    let hours = parseInt(document.getElementById("hoursInput").value) || 0;
    let minutes = parseInt(document.getElementById("minutesInput").value) || 0;
    let seconds = parseInt(document.getElementById("secondsInput").value) || 0;

    // Convert total time to seconds
    let countdownSeconds = hours * 3600 + minutes * 60 + seconds;

    function updateCountdown() {
        if (countdownSeconds > 0) {
            countdownSeconds--;

            // Convert seconds back to hours, minutes, and seconds
            let hrs = String(Math.floor(countdownSeconds / 3600)).padStart(2, '0');
            let mins = String(Math.floor((countdownSeconds % 3600) / 60)).padStart(2, '0');
            let secs = String(countdownSeconds % 60).padStart(2, '0');

            document.getElementById("countdownDisplay").textContent = `${hrs}:${mins}:${secs}`;
        } else {
            clearInterval(countdownInterval);
            document.getElementById("countdownDisplay").textContent = "Time's up!";
        }
    }

    countdownInterval = setInterval(updateCountdown, 1000);
}
