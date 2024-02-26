"use strict";
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
const title = document.querySelector(".nav__logotitle");
navbarX.addEventListener("click", togglerHandler);
title.addEventListener("mouseenter", () => {
  title.classList.add("crt");
  // title.textContent = "K.VISHWA";
});
title.addEventListener("mouseout", () => {
  setTimeout(() => {
    title.classList.toggle("crt");
  }, 2000);
  // title.textContent = "VISHWA.K";
});

// ACTIVE CLASS TOGGLER (PARENT ELEMENT)
function togglerHandler(e) {
  navbarX.classList.toggle("active");
  fullnavbar.classList.toggle("active");
  document.body.classList.toggle("lw");
  barhide();
}

// SLIDER CLONE CHILD SCRIPT
const abms1 = document.querySelector(".abmslider");
const abms2 = document.querySelector(".abmslider-2");
const clone1 = abms1.querySelector(".slider-1").cloneNode(true);
const clone2 = abms2.querySelector(".slider-2").cloneNode(true);
abms1.appendChild(clone1);
abms2.appendChild(clone2);
