/*
# -------------------------------------------------------------------------------------------------
#
# Name: navbar.js
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


let navigationBar = document.getElementById('navbar');
let mainContent = document.getElementById('main-content');
let navigationBarCtrl = document.getElementById('navbar-ctrl');


function openNavbar() {
    navigationBar.style.width = '250px';
    mainContent.style.marginLeft = '250px';

    mainContent.style.backgroundColor = '#33333AA';
}


function closeNavbar() {
    navigationBar.style.width = '0';
    mainContent.style.marginLeft = '0';
    navigationBarCtrl.style.display = "block";
}


function changeVisibility() {
    navigationBarCtrl.style.display = "none";
}