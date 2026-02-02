// -------------------------------------------------------------------------------------------------
// Name: configurations.js
// Version: 0.0.2
//
// Summary: alexcamargos.github.io
//          My Personal Portfolio.
//
// Author: Alexsander Lopes Camargos
// Author-email: alcamargos@vivaldi.net
//
// License: MIT
// -------------------------------------------------------------------------------------------------


new TypeIt("#typing-effect",
    {
        waitUntilVisible: true,
        speed: 150,
        deleteSpeed: 75,
        lifeLike: true,
        breakLines: false,
        loop: true,
    })

    .type("student.", { delay: 300, })
    .pause(2000)
    .delete(8)
    .type("business intelligence analyst.", { delay: 300, })
    .pause(2000)
    .delete(30)
    .type("data analysis student.", { delay: 300, })
    .pause(4000)
    .delete(22)
    .type("data science student.", { delay: 300, })
    .pause(2000)
    .delete(21)
    .go();
