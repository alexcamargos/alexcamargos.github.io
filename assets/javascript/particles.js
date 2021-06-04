/*
# -------------------------------------------------------------------------------------------------
#
# Name: particles.js
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


// particles.js - A lightweight JavaScript library for creating particles.
// Author : Vincent Garreau - vincentgarreau.com
// GitHub : github.com/VincentGarreau/particles.js


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js',
    'assets/javascript/particlesjs-config.json',
    function () {
        console.log('callback - particles.js config loaded');
    });