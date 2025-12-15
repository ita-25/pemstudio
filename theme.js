/* --- js/theme.js --- */
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    
    // 1. Check for stored preference or system preference
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply saved or system theme on load
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
        body.classList.add('dark-mode');
        // Update icon to reflect the opposite action (now showing sun)
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    }

    // 2. Toggle logic when button is clicked
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Save preference to localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light');
            toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
});
