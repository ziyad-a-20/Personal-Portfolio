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
    window.addEventListener("load", () => AOS.refresh());
});

// ==========================
// MOBILE NAVIGATION TOGGLE
// ==========================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('open');
        });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('open');
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedToggle = navToggle.contains(event.target);

    if (
      !clickedInsideMenu &&
      !clickedToggle &&
      navMenu.classList.contains("active")
    ) {
      navMenu.classList.remove("active");
      navToggle.classList.remove("open"); // NEW
    }
});

// ==========================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ==========================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    e.preventDefault();

    const top = target.getBoundingClientRect().top + window.pageYOffset - 70; // Navbar height

    window.scrollTo({ top, behavior: "smooth" });
  });
});

// ==========================
// NAVBAR BACKGROUND ON SCROLL
// ==========================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.boxShadow =
      window.scrollY > 50
        ? "0 2px 15px rgba(0, 0, 0, 0.1)"
        : "0 2px 10px rgba(0, 0, 0, 0.05)";
});


// BACK TO TOP BUTTON
const backBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backBtn.classList.toggle("show", window.scrollY > 500);
});

backBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ==========================
// PROJECT IMAGE AUTO SLIDER
// ==========================
const sliders = document.querySelectorAll(".project-slider");

sliders.forEach((slider) => {
  const images = slider.querySelectorAll("img");
  let index = 0;

  setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }, 3000); // 3 seconds
});
