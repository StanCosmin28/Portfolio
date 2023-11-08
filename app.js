/* GSAP effect for the links */

gsap.fromTo(
  "#logosc",
  { y: -5 },

  { y: 5, duration: 1, yoyo: true, repeat: -1 }
);

gsap.fromTo(
  "#scale",
  { rotate: "-1deg" },
  {
    rotate: "1deg",
    duration: 0.2,
    yoyo: true,
    repeat: -1,
  }
);
gsap.fromTo("#logosc", { x: 10000 }, { x: 0, duration: 1.5 }, "<");

gsap.fromTo("h1", { x: -10000 }, { x: 0, duration: 1.5 }, "<");

gsap.fromTo("#paragraf", { y: 1000 }, { y: 0, duration: 1.5, delay: 1 });

gsap.fromTo(
  "#histan",
  { opacity: 0 },
  { opacity: 100, duration: 500, delay: 1.5 }
);
