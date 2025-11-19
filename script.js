// ==========================
// AOS INITIALIZATION
// ==========================
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,       
        mirror: true,      
        offset: 100
    });
    
    // Refresh AOS on window resize to ensure proper calculations
    window.addEventListener('resize', function() {
        AOS.refresh();
    });
});

// ==========================
// MOBILE NAVIGATION TOGGLE
// ==========================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
    
    if (!isClickInsideNav && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// ==========================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================
// NAVBAR BACKGROUND ON SCROLL
// ==========================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});


// BACK TO TOP BUTTON
const backBtn = document.getElementById("backToTop");

// Show/Hide
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backBtn.classList.add("show");
  } else {
    backBtn.classList.remove("show");
  }
});

// Scroll to top
backBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
