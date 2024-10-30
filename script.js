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
    let countdownSeconds = parseInt(document.getElementById("countdownInput").value);

    function updateCountdown() {
        if (countdownSeconds > 0) {
            countdownSeconds--;
            document.getElementById("countdownDisplay").textContent = countdownSeconds + "s";
        } else {
            clearInterval(countdownInterval);
            document.getElementById("countdownDisplay").textContent = "Time's up!";
        }
    }

    countdownInterval = setInterval(updateCountdown, 1000);
}
