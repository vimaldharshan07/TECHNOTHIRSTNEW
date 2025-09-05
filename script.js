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
