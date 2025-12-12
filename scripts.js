document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    // Create the initial hamburger icon content
    menuToggle.innerHTML = '&#9776;'; // Hamburger unicode icon

    menuToggle.addEventListener('click', () => {
        // Toggle the visibility class
        mobileNav.classList.toggle('is-open');

        // Toggle the ARIA attribute for accessibility
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);

        // Toggle the icon (Hamburger <=> X)
        if (mobileNav.classList.contains('is-open')) {
            menuToggle.innerHTML = '&times;'; // Times unicode icon (X)
        } else {
            menuToggle.innerHTML = '&#9776;'; // Hamburger icon
        }
    });
});