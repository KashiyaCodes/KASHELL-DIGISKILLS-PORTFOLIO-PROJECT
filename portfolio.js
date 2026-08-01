// Mobile Navigation Menu

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

// Open and close menu
navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a navigation link
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});