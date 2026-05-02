
// Listen for key presses on the entire page
    document.addEventListener('keydown', function(event) {
        // Check if the 'e' key was pressed (case-insensitive)
        if (event.key.toLowerCase() === 'e') {
            const startLink = document.getElementById('startLink');
            
            // Trigger the click action of the link
            if (startLink) {
                startLink.click();
            }
        }
    });
