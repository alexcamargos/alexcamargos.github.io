// -------------------------------------------------------------------------------------------------
// Name: configurations.js
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
    .type("data analyst.", { delay: 300, })
    .pause(2000)
    .delete(12)
    .type("developer.", { delay: 300, })
    .pause(2000)
    .delete(10)
    .type("back-end developer.", { delay: 300, })
    .pause(2000)
    .delete(19)
    .type("front-end developer.", { delay: 300, })
    .pause(2000)
    .delete(20)
    .type("junior full stack developer.", { delay: 300, })
    .pause(8000)
    .delete(27)
    .go();
