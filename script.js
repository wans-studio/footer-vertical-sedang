document.addEventListener('DOMContentLoaded', function() {
    console.log('Footer script loaded');

    // Intersection Observer for Footer Animation
    const footer = document.getElementById('main-footer');
    
    const observerOptions = {
        root: null, // viewport
        threshold: 0.1, // trigger when 10% of the footer is visible
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Footer visible');
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    if (footer) {
        observer.observe(footer);
    }
});