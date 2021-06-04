/*
# -------------------------------------------------------------------------------------------------
#
# Name: typing.js
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


// TypeIt - The most versatile animated typing utility on the planet.
// Author: Alex MacArthur <alex@macarthur.me> (https://macarthur.me)
// URL: https://typeitjs.com


new TypeIt('#typing', {
        waitUntilVisible: true,
        speed: 150,
        deleteSpeed: 75,
        lifeLike: true,
        breakLines: false,
        loop: true,
    })
    .type('student.', {
        delay: 300
    })
    .pause(1000)
    .delete(8)
    .type('developer.', {
        delay: 300
    })
    .pause(1000)
    .delete(10)
    .type('back-end developer.', {
        delay: 300
    })
    .pause(1000)
    .delete(19)
    .type('front-end developer.', {
        delay: 300
    })
    .pause(1000)
    .delete(20)
    .type('Junior full stack develope.', {
        delay: 300
    })
    .pause(5000)
    .delete(27)
    .go();