document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    initAnimations();

    // Add event listeners for navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Function to handle smooth scrolling
    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Function to initialize animations
    function initAnimations() {
        const animatedElements = document.querySelectorAll('.animate');
        animatedElements.forEach(element => {
            element.classList.add('fade-in');
        });
    }

    // Parallax effect initialization
    window.addEventListener('scroll', () => {
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed');
            const yOffset = window.pageYOffset * speed;
            element.style.transform = `translateY(${yOffset}px)`;
        });
    });
});