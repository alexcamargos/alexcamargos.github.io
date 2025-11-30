// -------------------------------------------------------------------------------------------------
// Name: mobile_menu.js
// Version: 0.0.1
//
// Summary: Handles the mobile menu toggle functionality.
//
// Author: Alexsander Lopes Camargos
// Author-email: alcamargos@vivaldi.net
//
// License: MIT
// -------------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenuCloseBtn = document.getElementById("mobile-menu-close-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
    const mobileLinks = document.querySelectorAll(".mobile-link");
    const body = document.body;

    // Function to open the menu
    const openMenu = () => {
        if (!mobileMenu || !mobileMenuOverlay) return;

        mobileMenu.classList.remove("hidden");
        // Small delay to allow display:block to apply before transitions
        setTimeout(() => {
            mobileMenu.classList.remove("translate-x-full");
            mobileMenu.classList.add("translate-x-0");

            mobileMenuOverlay.classList.remove("hidden");
            mobileMenuOverlay.classList.remove("opacity-0");
            mobileMenuOverlay.classList.add("opacity-100");
        }, 10);

        mobileMenuBtn.setAttribute("aria-expanded", "true");
        body.classList.add("overflow-hidden"); // Prevent background scrolling
    };

    // Function to close the menu
    const closeMenu = () => {
        if (!mobileMenu || !mobileMenuOverlay) return;

        mobileMenu.classList.remove("translate-x-0");
        mobileMenu.classList.add("translate-x-full");

        mobileMenuOverlay.classList.remove("opacity-100");
        mobileMenuOverlay.classList.add("opacity-0");

        // Wait for transition to finish before hiding
        setTimeout(() => {
            mobileMenu.classList.add("hidden");
            mobileMenuOverlay.classList.add("hidden");
        }, 300);

        mobileMenuBtn.setAttribute("aria-expanded", "false");
        body.classList.remove("overflow-hidden");
    };

    // Event Listeners
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", openMenu);
    }

    if (mobileMenuCloseBtn) {
        mobileMenuCloseBtn.addEventListener("click", closeMenu);
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener("click", closeMenu);
    }

    // Close menu when clicking a link
    if (mobileLinks) {
        mobileLinks.forEach(link => {
            link.addEventListener("click", closeMenu);
        });
    }

    // Close menu on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && mobileMenu && !mobileMenu.classList.contains("translate-x-full")) {
            closeMenu();
        }
    });
});
