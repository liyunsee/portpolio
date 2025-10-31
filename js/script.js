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

  // 웹사이트 작업 슬라이더
  const swiper = new Swiper(".website-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".website-slider-wrap .swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".website-slider-wrap .swiper-button-next",
      prevEl: ".website-slider-wrap .swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
