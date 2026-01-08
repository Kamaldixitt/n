// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

document.documentElement.setAttribute('data-theme', currentTheme);
if (currentTheme === 'dark') themeToggle.checked = true;

themeToggle.addEventListener('change', function () {
    const newTheme = this.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Header Scroll and Navbar Scroll
let nav = document.querySelector(".navbar");
let scrollBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
    // Navbar scroll effect
    nav.classList.toggle("header-scrolled", document.documentElement.scrollTop > 20);

    // Scroll to top button visibility
    scrollBtn.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? "block" : "none";
};

// Scroll to top functionality
scrollBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Navbar hide after clicking a nav link
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
});

// Form validation
document.querySelector("form")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.querySelector("input[type='text']").value;
    const email = document.querySelector("input[type='email']").value;
    const message = document.querySelector("#message").value;

    if (name && email && message) {
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Smooth scroll for anchor links
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});
