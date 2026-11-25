/* =====================================================
   RAMINDI LOSAKYA — PORTFOLIO SCRIPTS
   1. Theme toggle (light/dark + localStorage)
   2. Typing effect for hero roles
   3. Scroll reveal animations
   4. Back-to-top button + navbar behaviour
   5. Image fallbacks for optional project photos
   ===================================================== */
(function () {
  "use strict";

  /* ---------- 1. THEME TOGGLE ---------- */
  var root = document.documentElement;
  var toggleBtn = document.getElementById("themeToggle");
  var themeIcon = document.getElementById("themeIcon");

  // Load saved theme (default: dark ocean theme)
  var savedTheme = null;
  try { savedTheme = localStorage.getItem("ramindi-theme"); } catch (e) { /* private mode */ }
  if (savedTheme === "light" || savedTheme === "dark") {
    root.setAttribute("data-theme", savedTheme);
  }

  function syncThemeUI() {
    var isLight = root.getAttribute("data-theme") === "light";
    themeIcon.className = isLight ? "bi bi-moon-stars-fill" : "bi bi-sun-fill";
    toggleBtn.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("ramindi-theme", next); } catch (e) { /* ignore */ }
      syncThemeUI();
    });
    syncThemeUI();
  }

  /* ---------- 2. TYPING EFFECT ---------- */
  var roles = [
    "IT Undergraduate",
    "Aspiring Software Developer",
    "Database Enthusiast",
    "Japanese Language Learner"
  ];
  var typedEl = document.getElementById("typedText");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (typedEl) {
    if (reduceMotion) {
      // Accessibility: no animation, show all roles statically
      typedEl.textContent = roles.join(" · ");
    } else {
      var roleIndex = 0, charIndex = 0, deleting = false;
      (function typeLoop() {
        var word = roles[roleIndex];
        typedEl.textContent = word.slice(0, charIndex);
        var delay = deleting ? 45 : 90;
        if (!deleting && charIndex === word.length) {
          delay = 1600; deleting = true;               // pause at full word
        } else if (deleting && charIndex === 0) {
          deleting = false; roleIndex = (roleIndex + 1) % roles.length;
          delay = 350;
        }
        charIndex += deleting ? -1 : 1;
        setTimeout(typeLoop, delay);
      })();
    }
  }

  /* ---------- 3. SCROLL REVEAL ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- 4. BACK-TO-TOP + NAVBAR STATE ---------- */
  var backToTop = document.getElementById("backToTop");
  var navbar = document.querySelector(".custom-navbar");

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (backToTop) backToTop.classList.toggle("show", y > 400);
    if (navbar) navbar.classList.toggle("scrolled", y > 30);

    // Highlight active nav link while scrolling
    var sections = ["home", "about", "education", "skills", "projects", "certificates", "contact"];
    var current = "home";
    sections.forEach(function (id) {
      var s = document.getElementById(id);
      if (s && s.getBoundingClientRect().top <= 120) current = id;
    });
    document.querySelectorAll(".nav-links .nav-link").forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  // Auto-close mobile menu after clicking a link
  var navMenu = document.getElementById("navMenu");
  document.querySelectorAll('#navMenu a').forEach(function (link) {
    link.addEventListener("click", function () {
      if (navMenu && navMenu.classList.contains("show") && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
      }
    });
  });

  // Enable Bootstrap tooltips on footer icons
  if (window.bootstrap) {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (el) {
      new window.bootstrap.Tooltip(el);
    });
  }

  /* ---------- 5. IMAGE FALLBACKS ---------- */
  // If an optional project photo is missing, swap to the bundled placeholder
  // so the layout never breaks.
  document.querySelectorAll("img[data-fallback]").forEach(function (img) {
    img.addEventListener("error", function handler() {
      img.removeEventListener("error", handler);
      img.src = img.getAttribute("data-fallback");
    });
    // Trigger check for broken relative paths when opened via file://
    if (img.complete && img.naturalWidth === 0) {
      img.src = img.getAttribute("data-fallback");
    }
  });

  console.log("Welcome to Ramindi Losakya's portfolio!");
})();
