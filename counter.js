
function initializeCountdown() {
  const countdownDate = new Date("October 9, 2025 09:00:00").getTime();

  const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
      clearInterval(x);
      document.querySelector(".countdown-timer").innerHTML = "<h2>The Event Has Begun! 🎉</h2>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
  }, 1000);
}

// Call the function when the page loads
window.onload = function() {
  // Check if the timer elements exist on the page before initializing
  if (document.getElementById("days")) {
    initializeCountdown();
  }
  
  // Existing pop-up and other script functionalities
  const popup = document.getElementById('popup');
  if (popup) {
    setTimeout(() => {
      popup.style.display = 'flex';
      createSparkles(100);
    }, 1500);
  }
};