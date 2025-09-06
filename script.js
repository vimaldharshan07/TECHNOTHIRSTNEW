
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



document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Possibly fall back to event handlers here
    }
});
// Dark mode toggle
// const darkModeToggle = document.getElementById('darkModeToggle');
// const body = document.body;

// // Check for saved dark mode preference
// if (localStorage.getItem('darkMode') === 'enabled') {
//     body.setAttribute('data-theme', 'dark');
//     darkModeToggle.checked = true;
// }

// darkModeToggle.addEventListener('change', () => {
//     if (darkModeToggle.checked) {
//         body.setAttribute('data-theme', 'dark');
//         localStorage.setItem('darkMode', 'enabled');
//     } else {
//         body.removeAttribute('data-theme');
//         localStorage.setItem('darkMode', null);
//     }
// });

// Popup handling
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    if (popup) {
        if (!sessionStorage.getItem('popupShown')) {
            popup.style.display = 'flex';
            sessionStorage.setItem('popupShown', 'true');
        } else {
            popup.style.display = 'none';
        }
    }
});

function closePopup() {
    const popup = document.getElementById('popup');
    if (popup) {
        popup.style.animation = 'fadeOut 0.5s';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500);
    }
}

// Get the modal
// Get modal elements
const modal = document.getElementById('imageModal');
const bannerImage = document.getElementById('bannerImage');
const modalImg = document.getElementById('modalImage');
// const modalCaption = document.getElementById('modalCaption');
const downloadLink = document.getElementById('downloadLink');

// Open modal on banner image click
bannerImage.addEventListener('click', () => {
  modal.style.display = "flex"; // using flex to center content
  modalImg.src = bannerImage.src;
//   modalCaption.innerHTML = bannerImage.alt; // optional caption
  // Set the download link to the current image source
  downloadLink.href = bannerImage.src;
});

// Close button functionality
const closeBtn = document.getElementsByClassName('modal-close')[0];
closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

// Optionally, close modal if clicking outside the image area
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

function openModal(imageUrl) {
  const modal = document.getElementById('fullscreen-modal');
  const modalImg = document.getElementById('full-image');
  
  modal.style.display = 'block';
  modalImg.src = imageUrl;
  
  // Pause the running carousel animation when modal is open
  const carousel = document.querySelector('.image-carousel');
  carousel.style.animationPlayState = 'paused';
}

function closeModal(event) {
  // Prevent the click event from propagating to the parent modal container
  if (event) {
    event.stopPropagation();
  }

  const modal = document.getElementById('fullscreen-modal');
  modal.style.display = 'none';

  // Resume the running carousel animation when modal is closed
  const carousel = document.querySelector('.image-carousel');
  carousel.style.animationPlayState = 'running';
}
