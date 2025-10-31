document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  gsap.set(".image-motion", {
    transform: "rotatex(90deg)",
  });

  gsap.to(".image-motion", {
    transform: "rotatex(0deg)",
    scrollTrigger: {
      trigger: ".section2",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: true,
    },
  });
});
