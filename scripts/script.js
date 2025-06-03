// ==================== Preloader ====================
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("fade-out");
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500); // matches your CSS transition time
});

// ==================== Mobile Navigation ====================
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

// ==================== Scroll Fade-In Animations ====================
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});

// ==================== Gallery Filter ====================
const filterButtons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".gallery-item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    items.forEach(item => {
      item.style.display =
        filter === "all" || item.dataset.category === filter
          ? "block"
          : "none";
    });
  });
});

// ==================== FAQ Toggle ====================
document.querySelectorAll(".faq-question").forEach(q => {
  q.addEventListener("click", () => {
    q.parentElement.classList.toggle("active");
  });
});

// ==================== Hide Navbar on Scroll ====================
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navbar.classList.add("hide");
  } else {
    // Scrolling up
    navbar.classList.remove("hide");
  }

  lastScrollTop = Math.max(currentScroll, 0);
});
