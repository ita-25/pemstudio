// --- thankyou.js (Enhanced Mobile Menu Toggle Logic) ---

document.addEventListener('DOMContentLoaded', () => {
    // We are selecting the button using its class
    const menuToggle = document.querySelector('.menu-toggle'); 
    
    // We are selecting the mobile navigation container using its class
    const mobileNav = document.querySelector('.mobile-nav');

    // IMPORTANT: Check if BOTH elements were found in the DOM.
    if (menuToggle && mobileNav) {
        // If they exist, attach the event listener
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('is-open');
            // Optional: Toggle the icon from bars to X and back
            const icon = menuToggle.querySelector('i');
            if (mobileNav.classList.contains('is-open')) {
                icon.className = 'fas fa-times'; // Change to 'X' icon
            } else {
                icon.className = 'fas fa-bars'; // Change back to 'bars' icon
            }
        });
    } else {
        // If you still have trouble, you can uncomment this console log 
        // to see if the elements are being found on the thank you page
        // console.log("Mobile Nav elements not found on this page.");
    }
});
