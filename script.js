document.addEventListener('DOMContentLoaded', () => {
    // Initialize Feather icons
    feather.replace();

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Close mobile menu when a link is clicked
    navMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navMenu.classList.remove('show');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });

    // Add scroll reveal animation
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 200,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });

    sr.reveal('.hero-content', { delay: 0 });
    sr.reveal('.about-content', { delay: 200 });
    sr.reveal('.skill-card', { interval: 100 });
    sr.reveal('.project-card', { interval: 200 });
    sr.reveal('.research-list li', { interval: 100 });
    sr.reveal('#contact form', { delay: 200 });
    sr.reveal('.social-links', { delay: 400 });
});
    document.getElementById("mail-me").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        const email = "umer556601@gmail.coma";
        const emailDisplay = document.getElementById("email-display");
        emailDisplay.textContent = `My Email: ${email}`;
        emailDisplay.style.display = "block"; // Make the email visible
    });
