let menubar = document.querySelector(".mini-menu");
let closetab = document.querySelector(".bi-x-lg");
let menu = document.querySelector(".menu");

menubar.onclick = () => {
  menubar.classList.toggle("hide");
  closetab.classList.toggle("hide");
  menu.classList.toggle("show-menu");
};

closetab.onclick = () => {
  menubar.classList.toggle("hide");
  closetab.classList.toggle("hide");
  menu.classList.toggle("show-menu");
};

let xBtn = document.querySelector(".x-btn");
let privacyPopup = document.querySelector(".privacy-container");
let privacyList = document.querySelector(".privacy-popup");
let goodbyeBtn = document.querySelector(".goodbye-btn");

privacyList.onclick = () => {
  privacyPopup.classList.toggle("hide");
};

xBtn.onclick = () => {
  privacyPopup.classList.toggle("hide");
};

goodbyeBtn.onclick = () => {
  privacyPopup.classList.toggle("hide");
};

window.onclick = (e) => {
  if (e.target == privacyPopup) {
    privacyPopup.classList.toggle("hide");
  }
};

gsap.registerPlugin(ScrollTrigger);
let gstl = gsap.timeline();
gstl
  .from(".i1", {
    scrollTrigger: {
      trigger: ".i1",
      start: "top bottom",
      end: "center center",
      scrub: 1,
    },
    opacity: 0,
    x: -180,
    delay: 1,
  })
  .from(".i2", {
    scrollTrigger: {
      trigger: ".i2",
      start: "top bottom",
      end: "center center",
      scrub: 1,
    },
    opacity: 0,
    y: -60,
    delay: 1,
  })
  .from(".i3", {
    scrollTrigger: {
      trigger: ".i3",
      start: "top bottom",
      end: "center center",
      scrub: 1,
    },
    opacity: 0,
    x: 40,
    delay: 1,
  })
  .to(".view-btn", {
    scrollTrigger: {
      trigger: ".view-btn",
      start: "top center",
      end: "+=50px",
      scrub: 1,
    },
    opacity: 0,
    x: -20,
    ease: "expo.inOut",
    delay: 1,
  })
  .from(".join-us", {
    scrollTrigger: {
      trigger: ".join-us",
      scrub: 1,
    },
    opacity: 0,
    scale: 4,
    delay: 1,
  })
  .from(".join-us-info", {
    scrollTrigger: {
      trigger: ".join-us-info",
      start: "top center",
      end: "+=50px",
      scrub: 1,
    },
    opacity: 0,
  });

var tl = anime.timeline({
  easing: "spring(1, 80, 10, 0)",
});

tl.add({
  targets: ".top ",
  opacity: [0, 1],
  duration: 2000,
})
  .add(
    {
      targets: ".list-1-container",
      translateX: [-80, 0],
    },
    400
  )
  .add(
    {
      targets: ".list-2-container",
      translateX: [700, 0],
    },
    800
  )
  .add(
    {
      targets: ".logo-container",
      translateY: [-1000, 0],
    },
    1500
  )
  .add(
    {
      targets: ".logo",
      opacity: [0, 1],
      translateY: [-30, 0],
    },
    2500
  );
