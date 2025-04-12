// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle dark mode when the button is clicked
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Validate the contact form before submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields before submitting.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

// Animate text typing effect in the hero section
const heroText = document.getElementById('hero-text');
const textToType = "Welcome to Our Website!";
let index = 0;

function typeText() {
    if (index < textToType.length) {
        heroText.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

// Add a dark mode toggle button dynamically
document.addEventListener('DOMContentLoaded', () => {
    // Create the dark mode toggle button
    const darkModeButton = document.createElement('button');
    darkModeButton.id = 'dark-mode-toggle';
    darkModeButton.textContent = 'Toggle Dark Mode';
    document.body.appendChild(darkModeButton);

    // Initialize the typing effect
    typeText();
});
// Add basic form validation to ensure fields aren’t empty
contactForm.addEventListener('input', () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (name.value.trim() === '') {
        name.classList.add('error');
    } else {
        name.classList.remove('error');
    }

    if (email.value.trim() === '') {
        email.classList.add('error');
    } else {
        email.classList.remove('error');
    }

    if (message.value.trim() === '') {
        message.classList.add('error');
    } else {
        message.classList.remove('error');
    }
});