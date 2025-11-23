// ==========================
// AOS INITIALIZATION
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: false,
    mirror: true,
    offset: 100,
  });

  window.addEventListener("load", () => AOS.refresh());
});

// ==========================
// MOBILE NAV TOGGLE
// ==========================
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("open");
  });
}

// Close on link click or outside click
document.addEventListener("click", (e) => {
  const clickedLink = e.target.closest(".nav-menu a");
  const clickedToggle = navToggle.contains(e.target);

  if (clickedToggle) return; // allow toggle button to work

  const shouldClose =
    (!navMenu.contains(e.target) && navMenu.classList.contains("active")) ||
    (clickedLink && window.innerWidth <= 768);

  if (shouldClose) {
    navMenu.classList.remove("active");
    navToggle.classList.remove("open");
  }
});

// ==========================
// SMOOTH SCROLL
// ==========================
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    e.preventDefault();

    const offsetTop =
      target.getBoundingClientRect().top +
      window.scrollY -
      70; // adjust for navbar height

    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  });
});

// ==========================
// ALL SCROLL EFFECTS (ONE LISTENER)
// ==========================
const navbar = document.querySelector(".navbar");
const backBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  // navbar shadow
  if (navbar) {
    navbar.style.boxShadow =
      scrolled > 50
        ? "0 2px 15px rgba(0, 0, 0, 0.1)"
        : "0 2px 10px rgba(0, 0, 0, 0.05)";
  }

  // back-to-top
  if (backBtn) {
    backBtn.classList.toggle("show", scrolled > 500);
  }
});

// Back to top click
if (backBtn) {
  backBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
}

// ==========================
// PROJECT SLIDER (AUTO)
// ==========================
document.querySelectorAll(".project-slider").forEach((slider) => {
  const images = [...slider.querySelectorAll("img")];
  let index = 0;

  setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }, 3000);
});

// ==========================
// PROJECT CARD HOVER EFFECT
// ==========================
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    document.querySelectorAll(".project-card").forEach((c) =>
      c.classList.remove("active")
    );
    card.classList.add("active");
  });

  card.addEventListener("mouseleave", () => card.classList.remove("active"));
});