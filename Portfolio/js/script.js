"use strict";
console.log("connecting");

// LOADER REFRESH EFFECT DIV

// const loader = document.createElement("div");
// loader.classList.add("load");
// window.addEventListener("load", () => {
//   console.log(loader);
//   document.body.appendChild(loader);
//   setTimeout(() => {
//     loader.classList.add("loaded");
//   }, 100);
// });

// NAVBAR TOGGLER

const navbarX = document.querySelector(".nav__menubars");
const fullnavbar = document.querySelector("header .fullnav");
const title = document.querySelector(".nav__logotitle span");
navbarX.addEventListener("click", togglerHandler);
title.addEventListener("mouseenter", () => {
  title.classList.toggle("crt");
  title.textContent = "K.VISHWA";
});
title.addEventListener("mouseout", () => {
  title.classList.toggle("crt");
  title.textContent = "VISHWA.K";
});
// ACTIVE CLASS TOGGLER (PARENT ELEMENT)
function togglerHandler(e) {
  navbarX.classList.toggle("active");
  fullnavbar.classList.toggle("active");
  document.body.classList.toggle("lw");
  barhide();
}
function barhide() {}
