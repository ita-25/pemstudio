document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('design-select');
    const forms = document.querySelectorAll('.design-form');

    selector.addEventListener('change', (event) => {
        const selectedFormId = event.target.value;

        // Hide all forms first
        forms.forEach(form => {
            form.classList.add('hidden');
        });

        // Show the selected form
        if (selectedFormId) {
            const formToShow = document.getElementById(`${selectedFormId}-form`);
            if (formToShow) {
                formToShow.classList.remove('hidden');
                formToShow.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        
        // Handle the Web Development Inquiry specifically
        if (selectedFormId === 'web') {
             alert("Thank you for your interest in Web Development! Please note: For detailed development needs, kindly contact Paul Ejime Mormah directly via WhatsApp or Phone at 08161202291 for a dedicated consultation.");
             selector.value = ""; // Reset dropdown after alert
        }
    });
});