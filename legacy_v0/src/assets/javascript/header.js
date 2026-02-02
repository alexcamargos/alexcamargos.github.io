// -------------------------------------------------------------------------------------------------
// Name: header.js
// Version: 0.0.4
//
// Summary: alexcamargos.github.io
//          My Personal Portfolio.
//
// Author: Alexsander Lopes Camargos
// Author-email: alcamargos@vivaldi.net
//
// License: MIT
// -------------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll("header ul li a");
    const sections = document.querySelectorAll("main section[id]");

    // Function to handle header background on scroll
    const handleHeaderScroll = () => {
        if (window.scrollY >= header.offsetHeight) {
            header.classList.add("bg-navy-dark", "scroll");
        } else {
            header.classList.remove("bg-navy-dark", "scroll");
        }
    };

    // Add scroll listener for header background (passive for performance)
    window.addEventListener("scroll", handleHeaderScroll, { passive: true });

    // Check if the current page is about.html
    if (window.location.pathname.includes("about.html")) {
        // Remove 'active_indicator' from other links.
        navLinks.forEach((link) => {
            link.classList.remove("active_indicator", "text-green");
        });

        // Add 'text-green' to the About menu item by default.
        const aboutLink = document.querySelector(
            "header ul li a[href*='index.html#about']"
        );
        if (aboutLink) {
            aboutLink.classList.add("text-green");
        }

        // Add hover effects to change text colors on mouseover.
        navLinks.forEach((item) => {
            item.addEventListener("mouseover", function () {
                item.classList.add("text-green");
            });

            item.addEventListener("mouseout", function () {
                // Ensure the "About" link stays green.
                if (!item.href.includes("about.html")) {
                    item.classList.remove("text-green");
                }
            });
        });
    } else {
        // Intersection Observer for Scroll Spy (Active Indicator)
        // Triggers when the element crosses the middle of the viewport
        const observerOptions = {
            root: null,
            rootMargin: "-50% 0px -50% 0px",
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");

                    // Remove active class from all links
                    navLinks.forEach((link) => {
                        link.classList.remove("active_indicator");
                        const icon = link.querySelector("i");
                        if (icon) icon.classList.remove("active_indicator");
                    });

                    // Add active class to the corresponding link
                    // Using href*="#id" to match anchor links
                    const activeLink = document.querySelector(
                        `header ul li a[href*="#${id}"]`
                    );

                    if (activeLink) {
                        activeLink.classList.add("active_indicator");
                        const icon = activeLink.querySelector("i");
                        if (icon) icon.classList.add("active_indicator");
                    }
                }
            });
        }, observerOptions);

        sections.forEach((section) => {
            observer.observe(section);
        });
    }
});
