// -------------------------------------------------------------------------------------------------
// Name: fullPage.js
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

new fullpage(
    "#fullpage",
    {
        licenseKey: "2K99I-6QW27-243I9-9OBK9-KNQMQ",
        anchors:
            [
                "welcome",
                "about",
                "portfolio",
                "contact"
            ],
        navigationTooltips:
            [
                "welcome",
                "about",
                "portfolio",
                "contact"
            ],
        slidesNavigation: true,
        navigation: false,
        navigationPosition: "left",
        menu: "#nav",
        lazyLoad: true,
        scrollOverflow: true,
        responsiveWidth: 768,
        responsiveHeight: 600,
        responsiveSlides: true,
    });
