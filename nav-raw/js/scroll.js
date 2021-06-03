// JavaScript Intersection Observer API
"use strict";

const section = document.querySelector(".section-2");
const imgContent = document.querySelector(".img");

const objOptions = {
  root: null,
  threshold: 0.3,
  rootMargin: "-100px",
};

const sectionObserver = new IntersectionObserver(callBackFunction, objOptions);
sectionObserver.observe(section);

// create a function to add/remove "hidden" class
