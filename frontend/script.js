// Timer functionality
function initTimer() {
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (!hoursEl || !minutesEl || !secondsEl) {
    return;
  }

  // Initial values
  let timeLeft = {
    hours: 18,
    minutes: 57,
    seconds: 14
  };

  // Update display
  function updateDisplay() {
    hoursEl.textContent = String(timeLeft.hours).padStart(2, '0');
    minutesEl.textContent = String(timeLeft.minutes).padStart(2, '0');
    secondsEl.textContent = String(timeLeft.seconds).padStart(2, '0');
  }

  // Initialize display
  updateDisplay();

  // Start countdown
  const timer = setInterval(() => {
    timeLeft.seconds--;

    if (timeLeft.seconds < 0) {
      timeLeft.seconds = 59;
      timeLeft.minutes--;
    }

    if (timeLeft.minutes < 0) {
      timeLeft.minutes = 59;
      timeLeft.hours--;
    }

    if (timeLeft.hours < 0) {
      timeLeft.hours = 23;
    }

    updateDisplay();
  }, 1000);
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip empty hash
      if (href === '#') {
        return;
      }

      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Mobile menu toggle (optional - if you want to add mobile menu functionality)
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (!mobileMenuBtn || !mobileMenu) {
    return;
  }

  // Toggle menu on button click
  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    
    // Optional: Toggle body scroll
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initTimer();
  initSmoothScroll();
  initMobileMenu();
});
