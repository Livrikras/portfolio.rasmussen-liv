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

// ----------------------Om mig-----------------------

const buttons = document.querySelectorAll(".layer-btn");

const image = document.querySelector("#about-image");
const number = document.querySelector("#layer-number");
const title = document.querySelector("#layer-title");
const text = document.querySelector("#layer-text");
const backButton = document.querySelector("#back-button");

const layers = {
  person: {
    image: "img/ab-me2.png",
    number: "01",
    title: "Mig som person",
    text: "Jeg er en omsorgsfuld og ansvarsbevidst person, der møder andre med respekt og en positiv tilgang. Jeg trives godt i samarbejde med andre og sætter pris på åben kommunikation, hvor man kan dele idéer, give feedback og løfte i flok. Jeg lægger vægt på at være til at stole på og gøre mig umage med de opgaver, jeg tager på mig.",
    
  },

  designer: {
    image: "img/ab-me3.png",
    number: "02",
    title: "Mig som designer",
    text: "Jeg er kreativ og idérig og motiveres af at udvikle visuelle løsninger, der både fungerer og har et gennemført udtryk. Jeg har sans for detaljer og går op i, hvordan farver, former, typografi og billeder spiller sammen. Jeg kan godt lide at eksperimentere og omsætte idéer til konkrete digitale løsninger, hvor kreativitet og funktionalitet går hånd i hånd.",
  },

  udvikling: {
    image: "img/ab-me4.png",
    number: "03",
    title: "Mig i udvikling",
    text: "Jeg er nysgerrig og har lyst til hele tiden at lære nyt og udvikle mine kompetencer. Jeg udfordrer gerne mig selv med nye opgaver og værktøjer og ser fejl og feedback som en naturlig del af processen. Som multimediedesigner vil jeg blive ved med at udvikle mig og finde balancen mellem kreativitet, teknologi og brugerens behov.",
  },
};

/* =========================
   KLIK PÅ ET LAG
========================= */

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLayer = button.dataset.layer;
    const layer = layers[selectedLayer];

    // Hvis der ikke findes et lag, stop
    if (!layer) return;

    /* Fjern active fra alle knapper */

    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    /* Gør den valgte knap aktiv */

    button.classList.add("active");

    /* Fade billedet ud */

    image.classList.add("change");

    /* Skift indhold efter animation */

    setTimeout(() => {
      image.src = layer.image;

      number.textContent = layer.number;

      title.textContent = layer.title;

      text.textContent = layer.text;

      /* Fade billedet ind igen */

      image.classList.remove("change");
    }, 250);

    /* Vis tilbage-knappen */

    backButton.style.display = "block";
  });
});

/* =========================
   TILBAGE TIL START
========================= */

backButton.addEventListener("click", () => {
  /* Fjern active fra alle lag */

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  /* Fade billedet ud */

  image.classList.add("change");

  setTimeout(() => {
    /* Tilbage til startbilledet */

    image.src = "img/ab-me1.png";

    /* Tilbage til startteksten */

    number.textContent = "";

    title.textContent = "Lær mig at kende";

    text.textContent =
      "Som person og multimediedesigner har jeg mange lag som du kan dykke ned i.";

    /* Fade ind */

    image.classList.remove("change");
  }, 250);

  /* Skjul tilbage-knappen */

  backButton.style.display = "none";
});