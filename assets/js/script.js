'use strict';

const /** {NodeElement} */ $navbar= document.querySelector("[data-navbar]");
const /** {NodeElement} */ $navbarToggler= document.querySelector("[data-nav-toggler]");

$navbarToggler.addEventListener("click", () => $navbar.classList.toggle(" ") )