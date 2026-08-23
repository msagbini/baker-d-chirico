// ========== Mobile Navigation Toggle ==========
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav--active');
    navToggle.classList.toggle('nav__toggle--active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav__link, .nav__cta').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('nav--active');
        navToggle.classList.remove('nav__toggle--active');
    });
});

// ========== Header Background on Scroll ==========
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
});

// ========== Smooth Scroll for anchor links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ========== Contact Form Submission (Demo) ==========
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('form-success');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate form submission
    contactForm.reset();
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
});

// ========== Dynamic Year in Footer ==========
document.getElementById('year').textContent = new Date().getFullYear();

// ========== Simple Fade-in on Scroll (Intersection Observer) ==========
const fadeElements = document.querySelectorAll('.menu__card, .feature, .space__gallery-item, .story__image, .story__text, .coffee__image, .coffee__text, .location__card, .location__map, .press__logo');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
