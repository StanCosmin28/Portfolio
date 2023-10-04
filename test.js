gsap.fromTo(
  "#poza",
  { y: -40 },
  { y: 0, duration: 0.6, yoyo: true, repeat: -1 }
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
