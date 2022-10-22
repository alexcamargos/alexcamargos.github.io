// -------------------------------------------------------------------------------------------------
// Name: header.js
// Version: 0.0.1
//
// Summary: alexcamargos.github.io
//          My Personal Portfolio.
//
// Author: Alexsander Lopes Camargos
// Author-email: alcamargos@vivaldi.net
//
// License: MIT
// -------------------------------------------------------------------------------------------------

// Change the section's indicator.
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

// Change the header background color when the user scrolls the page.
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");

    if (window.scrollY >= header.offsetHeight) {
        header.classList.add("bg-navy-dark");
    } else {
        header.classList.remove("bg-navy-dark");
    }
});
