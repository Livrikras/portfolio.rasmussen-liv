"use strict";

// ------------------ Projekt 3 ------------------

const touch = document.querySelector(".touch");
const touchVideo = document.querySelector(".screen-video-2");

if (touch && touchVideo) {
  touch.addEventListener("mouseenter", () => {
    touchVideo.play();
  });

  touch.addEventListener("mouseleave", () => {
    touchVideo.pause();
    touchVideo.currentTime = 0;
  });
}

// ------------------ Projekt 2 ------------------

const laptop = document.querySelector(".laptop");
const video = document.querySelector(".screen-video");

if (laptop && video) {
  laptop.addEventListener("mouseenter", () => {
    video.play();
  });

  laptop.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
}

// ------------------ Projekt 1 ------------------

const ipad = document.querySelector(".ipad");
const ipadVideo = document.querySelector(".screen-video-3");

if (ipad && ipadVideo) {
  ipad.addEventListener("mouseenter", () => {
    ipadVideo.play();
  });

  ipad.addEventListener("mouseleave", () => {
    ipadVideo.pause();
    ipadVideo.currentTime = 0;
  });
}