"use strict";
// LOADER REFRESH EFFECT DIV

const loader = document.createElement("div");
loader.classList.add("load");
window.addEventListener("load", () => {
  console.log(loader);
  document.body.appendChild(loader);
  setTimeout(() => {
    loader.classList.add("loaded");
  }, 10);
});

// DARK MODE AND LIGHT MODE TOGGLER
const darksvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>`;
const lightsvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>`;
const togglerContainer = document.querySelector(".toggler");
const html = document.querySelector("html");

function lightDark() {
  if (html.classList.contains("dark")) {
    togglerContainer.innerHTML = darksvg;
    localStorage.setItem("land", "dark");
  } else {
    togglerContainer.innerHTML = lightsvg;
    localStorage.setItem("land", "light");
  }
  console.log(localStorage.getItem("land"));
}
// REMEMBER THE LIGHT AND DARK MODE IN LOCAL STORAGE
const landvalue = localStorage.getItem("land");
if (landvalue === "dark") {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
  // TERNARY OPERATOR AND CLASSNAME NOT A WISE CHOICE AND THE TOOGLER CHANGED VICE VERSA
}
lightDark();

togglerContainer.addEventListener("click", () => {
  html.classList.toggle("dark");
  lightDark();
});

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
}

// RECENT PROJECTS
// const pro_holder = document.querySelector(".recent-projects__holder");
// pro_holder.addEventListener("wheel", (e) => {
//    console.log(e.deltaX, e.deltaY);
//    e.preventDefault();
//    pro_holder.scrollLeft += 600;
//    if (e.deltaY >= 0) {
//      pro_holder.scrollLeft += 800;
//      e.preventDefault();
//    } else {
//      pro_holder.scrollLeft -= 800;
//      e.preventDefault();
//    }
// });

// NAVBAR LINKS CONTROLS HIDDER
const navlink1 = document.querySelectorAll(".fullnav__top__R1 a");
const navlink2 = document.querySelectorAll(".fullnav__top__R2 a");
const alllinks = [...navlink1, ...navlink2];
alllinks.forEach((a, index) => {
  a.addEventListener("click", togglerHandler);
});

// SLIDER CLONE CHILD SCRIPT
const abms1 = document.querySelector(".abmslider");
const abms2 = document.querySelector(".abmslider-2");
const clone1 = abms1.querySelector(".slider-1").cloneNode(true);
const clone2 = abms2.querySelector(".slider-2").cloneNode(true);
abms1.appendChild(clone1);
abms2.appendChild(clone2);
