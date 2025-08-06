const typewriterElement = document.getElementById('typewriter');
const roleElement = document.getElementById('role');
const nameText = "Varsha";
const roles = ["Frontend Developer", "Content Creator", "JavaScript Enthusiast"];
let i = 0, j = 0, currentRole = 0;

function typeWriter() {
    if (i < nameText.length) {
        typewriterElement.textContent += nameText.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
    } else {
        setTimeout(typeRole, 500);
    }
}

function typeRole() {
    if (j < roles[currentRole].length) {
        roleElement.textContent += roles[currentRole].charAt(j);
        j++;
        setTimeout(typeRole, 100);
    } else {
        setTimeout(() => {
            roleElement.textContent = "";
            j = 0;
            currentRole = (currentRole + 1) % roles.length;
            typeRole();
        }, 2000);
    }
}

typeWriter();

// Particles.js background
particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/demo/particles.json');

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let status = document.getElementById("form-status");

    if (name && email && message) {
        status.textContent = "Message sent successfully!";
        status.style.color = "lightgreen";
        this.reset();
    } else {
        status.textContent = "Please fill all fields.";
        status.style.color = "red";
    }
});

// Hamburger menu toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});
