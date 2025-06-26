/**
 * MrMac Website JavaScript
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const initMobileMenu = () => {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', function() {
                // Toggle active class on button for rotation animation
                this.classList.toggle('active');
                
                // Toggle open class on menu for display and animations
                mobileMenu.classList.toggle('open');
            });
        }
    };
    
    // Initialize all components
    initMobileMenu();
});

document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the fade-on-scroll class
const fadeEls = document.querySelectorAll('.fade-on-scroll');

const observer = new IntersectionObserver(
  (entries) => {
    entries
      .filter((entry) => entry.isIntersecting)
      .forEach((entry, index) => {
        // Add staggered delay
        setTimeout(() => {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-4');
          observer.unobserve(entry.target); // Animate once
        }, index * 200); // 200ms stagger delay between items
      });
  },
  {
    threshold: 0.1,
  }
);

fadeEls.forEach((el) => observer.observe(el));

});