/**
 * Scroll Reveal Animation
 * Uses Intersection Observer to trigger fade-up animations when elements enter the viewport.
 */

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null, // use the viewport
    rootMargin: "0px",
    threshold: 0.15, // trigger when 15% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target); // only animate once
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((el) => observer.observe(el));
});
