// -------------------------------------------------------------------------------------------------
// Name: header.js
// Version: 0.0.3
//
// Summary: alexcamargos.github.io
//          My Personal Portfolio.
//
// Author: Alexsander Lopes Camargos
// Author-email: alcamargos@vivaldi.net
//
// License: MIT
// -------------------------------------------------------------------------------------------------

// Check if the current page is about.html.
if (window.location.pathname.includes("about.html")) {
    // Remove 'active_indicator' from other links.
    document.querySelectorAll("header ul li a").forEach((link) => {
        link.classList.remove("active_indicator", "text-green");
    });

    // Add 'text-green' to the About menu item by default.
    let aboutLink = document.querySelector(
        "header ul li a[href*='index.html#about']"
    );
    if (aboutLink) {
        aboutLink.classList.add("text-green");
    }

    // Add hover effects to change text colors on mouseover.
    let menuItems = document.querySelectorAll("header ul li a");

    menuItems.forEach((item) => {
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
    // Original behavior for other pages.

    // Change the section's indicator based on scroll position.
    window.addEventListener("scroll", function () {
        let sections = document.querySelectorAll("main section[id]");
        let checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

        for (let section of sections) {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.offsetHeight;
            let sectionId = section.getAttribute("id");

            let checkpointStart = checkpoint >= sectionTop;
            let checkpointEnd = checkpoint <= sectionTop + sectionHeight;

            if (checkpointStart && checkpointEnd) {
                document
                    .querySelector(`header ul li a[href*=${sectionId}]`)
                    .classList.add("active_indicator");
                document
                    .querySelector(`header ul li a[href*=${sectionId}] i`)
                    .classList.add("active_indicator");
            } else {
                document
                    .querySelector(`header ul li a[href*=${sectionId}]`)
                    .classList.remove("active_indicator");
                document
                    .querySelector(`header ul li a[href*=${sectionId}] i`)
                    .classList.remove("active_indicator");
            }
        }
    });
}

// Change the header background color when the user scrolls the page.
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");

    if (window.scrollY >= header.offsetHeight) {
        header.classList.add("bg-navy-dark");
    } else {
        header.classList.remove("bg-navy-dark");
    }
});
