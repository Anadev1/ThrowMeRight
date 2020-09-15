"use strict";

//Open more section in nav - Wojo
let moreBtn = document.querySelector(".moreBtn");
let navMore = document.querySelector(".nav-more");
let navBtn = document.querySelector(".fas");
let nav = document.querySelector("nav");

function toggleMore() {
    navMore = style.bottom;
    if (navMore > 15) {
        return closeMore();
    }
    return openMore();
}


function openMore() {
    console.log("clicked");
    navMore.style.bottom = "15%";
    false.style.color = "#23B677";
    nav.style.backgroundColor = "#fff";
}

function closeMore() {
    console.log("clicked");
    navMore.style.bottom = "-1000px";
    false.style.color = "#fff";
    nav.style.backgroundColor = "#23B677";
}