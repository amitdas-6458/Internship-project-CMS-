
// Function to add "in-view" class when elements come into view
 function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('in-view');
        }
    });
}

// Trigger animations on scroll
window.addEventListener('scroll', handleScrollAnimation);

// Trigger animations on page load
window.addEventListener('load', handleScrollAnimation);