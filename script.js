document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully.');

    // You can add more JavaScript functionality here if needed.
    // For a simple static site, this file might not be necessary,
    // but it's good practice to have it ready.

    // Example: Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});