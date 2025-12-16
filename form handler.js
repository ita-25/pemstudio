// --- form-handler.js ---

document.addEventListener('DOMContentLoaded', function() {
    // Select ALL forms that use Formspree (or loop through them if they share a class)
    const forms = document.querySelectorAll('.design-form'); 

    forms.forEach(form => {
        form.addEventListener('submit', async function(event) {
            event.preventDefault(); // Stop the default form submission

            const formId = form.id;
            const statusMessage = document.getElementById(formId + '-status');
            
            // Collect form data
            const data = new FormData(event.target);
            
            try {
                // Submit data to Formspree endpoint (you need to ensure the 'action' attribute is set!)
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Success! Redirect the user to your custom thank you page
                    window.location.href = '/thankyou.html'; 
                    
                } else {
                    // Submission failed (e.g., server error)
                    const result = await response.json();
                    if (result.errors) {
                        statusMessage.innerHTML = 'Error: ' + result.errors.map(e => e.field).join(', ');
                    } else {
                        statusMessage.innerHTML = "Oops! There was an issue submitting your form.";
                    }
                }
            } catch (error) {
                statusMessage.innerHTML = "Network Error. Please try again later.";
            }
        });
        
        // Add a placeholder element below each form to show status messages
        const statusDiv = document.createElement('div');
        statusDiv.id = form.id + '-status';
        form.parentNode.insertBefore(statusDiv, form.nextSibling);
    });
});
