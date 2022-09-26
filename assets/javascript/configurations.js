/*
# -------------------------------------------------------------------------------------------------
#
# Name: configurations.js
# Version: 0.0.1
#
# Summary: alexcamargos.github.io
#          My Personal Portfolio.
#
# Author: Alexsander Lopes Camargos
# Author-email: alcamargos@vivaldi.net
#
# License: MIT
#
# -------------------------------------------------------------------------------------------------
*/

(function ($, window, document, undefined) {
    "use strict";
    var $winW = function () {
        return $(window).width();
    };
    var $winH = function () {
        return $(window).height();
    };
    var $screensize = function (element) {
        $(element).width($winW()).height($winH());
    };
    var screencheck = function (mediasize) {
        if (typeof window.matchMedia !== "undefined") {
            var screensize = window.matchMedia(
                "(max-width:" + mediasize + "px)"
            );
            if (screensize.matches) {
                return true;
            } else {
                return false;
            }
        } else {
            if ($winW() <= mediasize) {
                return true;
            } else {
                return false;
            }
        }
    };
    // LOADING ANIMATIONS
    $(document).ready(function () {
        $(window).on("load", function () {
            $(".preloader").fadeOut();
            $(".animated-row").each(function () {
                var $this = $(this);
                $this.find(".animate").each(function (i) {
                    var $item = $(this);
                    var animation = $item.data("animate");
                    $item.on("inview", function (event, isInView) {
                        if (isInView) {
                            setTimeout(function () {
                                $item
                                    .addClass("animated " + animation)
                                    .removeClass("animate");
                            }, i * 50);
                        } else if (!screencheck(767)) {
                            $item
                                .removeClass("animated " + animation)
                                .addClass("animate");
                        }
                    });
                });
            });
        });
        // FACTS-LIST OWL-CAROUSEL
        if ($(".facts-list").length) {
            $(".facts-list").owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 3,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0,
                    },
                    460: {
                        items: 1,
                        margin: 0,
                    },
                    576: {
                        items: 2,
                        margin: 20,
                    },
                    992: {
                        items: 3,
                        margin: 30,
                    },
                },
            });
        }
        // SERVICES-LIST OWL-CAROUSEL
        if ($(".services-list").length) {
            $(".services-list").owlCarousel({
                loop: true,
                nav: true,
                navText: [
                    '<div class="nav-btn prev-slide"><i class="fa-solid fa-angles-left"></i></div>',
                    '<div class="nav-btn prev-slide"><i class="fa-solid fa-angles-right"></i></div>',
                ],
                dots: true,
                items: 3,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0,
                    },
                    460: {
                        items: 1,
                        margin: 0,
                    },
                    576: {
                        items: 2,
                        margin: 20,
                    },
                    992: {
                        items: 3,
                        margin: 30,
                    },
                },
            });
        }
        // PORTFOLIO OWL-CAROUSEL
        if ($(".gallery-list").length) {
            $(".gallery-list").owlCarousel({
                loop: false,
                nav: true,
                navText: [
                    '<div class="nav-btn prev-slide"><i class="fa-solid fa-angles-left"></i></div>',
                    '<div class="nav-btn prev-slide"><i class="fa-solid fa-angles-right"></i></div>',
                ],
                dots: true,
                items: 3,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 40000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0,
                    },
                    576: {
                        items: 2,
                        margin: 20,
                    },
                    992: {
                        items: 3,
                        margin: 30,
                    },
                },
            });
        }

        // TypeIt
        if ($("#typing-effect").length) {
            new TypeIt("#typing-effect", {
                waitUntilVisible: true,
                speed: 150,
                deleteSpeed: 75,
                lifeLike: true,
                breakLines: false,
                loop: true,
            })
                .type("student.", {
                    delay: 300,
                })
                .pause(2000)
                .delete(8)
                .type("data analyst.", {
                    delay: 300,
                })
                .pause(2000)
                .delete(12)
                .type("eveloper.", {
                    delay: 300,
                })
                .pause(2000)
                .delete(10)
                .type("back-end developer.", {
                    delay: 300,
                })
                .pause(2000)
                .delete(19)
                .type("front-end developer.", {
                    delay: 300,
                })
                .pause(2000)
                .delete(20)
                .type("Junior full stack develope.", {
                    delay: 300,
                })
                .pause(8000)
                .delete(27)
                .go();
        }
        // fullPage.js
        if ($(".fullpage-default").length) {
            var myFullpage = new fullpage(".fullpage-default", {
                licenseKey: "C7F41B00-5E824594-9A5EFB99-B556A3D5",
                anchors: [
                    "welcome-box",
                    "about-me",
                    "portfolio",
                    "contact-me"
                ],
                slidesNavigation: true,
                navigation: true,
                navigationPosition: "left",
                navigationTooltips: [
                    "welcome-box",
                    "about-me",
                    "portfolio",
                    "contact-me"
                ],
                menu: "#nav",
                lazyLoad: true,
                scrollOverflow: true,
                responsiveWidth: 768,
                responsiveHeight: 600,
                responsiveSlides: true,
            });
        }
        $(document)
            .on("click", ".navbar-toggle", function () {
                $(".navbar-collapse").slideToggle(300);
                return false;
            })
            .on("click", ".navigation-menu > li > a", function () {
                $(".navbar-collapse").slideUp(300);
            })
            .on("click", ".next-section", function () {
                fullpage_api.moveSectionDown();
            });
        $(".facts-row").on("inview", function (event, isInView) {
            $(".count-number").each(function () {
                $(this)
                    .prop("Counter", 0)
                    .animate(
                        {
                            Counter: $(this).text(),
                        },
                        {
                            duration: 1000,
                            easing: "swing",
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            },
                        }
                    );
                setTimeout(function () {
                    $(".count-number")
                        .removeClass("count-number")
                        .addClass("counted");
                }, 1000);
            });
        });
        $(".skills-row").on("inview", function (event, isInView) {
            $(this).addClass("view");
        });
        $(document)
            .on("click", ".menu-trigger", function () {
                $("body").toggleClass("sidemenu-open");
            })
            .on("click", ".side-menu .navbar-nav li a", function () {
                $("body").removeClass("sidemenu-open");
            });
    });
})(jQuery, window, document);
