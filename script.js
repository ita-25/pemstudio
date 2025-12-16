// --- script.js (Basic Mobile Menu Toggle Logic) ---

document.addEventListener('DOMContentLoaded', () => {
    // Select the necessary elements
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    // Add click listener to the toggle button
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            // Toggle the 'is-open' class on the mobile navigation element
            mobileNav.classList.toggle('is-open');
        });
    }
});
