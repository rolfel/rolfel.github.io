// JavaScript Intersection Observer API
"use strict";

const section = document.querySelector(".section-2");
const imgContent = document.querySelector(".img");

const objOptions = {
  root: null,
  threshold: 0.3,
  rootMargin: "-100px",
};



// create a function to add/remove "hidden" class

const sectionObserver = new intersectionObserver(callBackFunction, objOptions);
sectionObserver.observe(section);

function callBackFunction(entries){
    const [entry] = entries;
    console.log(entry);
    if (entry.isIntersecting){
        imgContent.classlist.remove("hidden");
    } else{
        imgContent.classlist.add("hidden");
    }
}

