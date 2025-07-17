// Initialize Lenis
const lenis = new Lenis({
  wrapper: document.querySelector("main"),
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function backgrounVid() {
  let vid = document.createElement("video");
  vid.autoplay = "true";
  vid.muted = "true";
  vid.loop = "true";
  let src = document.createElement("source");
  src.src = "9665239-sd_960_506_25fps.mp4";
  src.type = "video/mp4";
  vid.style.minHeight = "100%";
  vid.style.minWidth = "100vw";
  vid.style.position = "fixed";
  vid.style.top = "0px";
  vid.style.left = "0px ";
  vid.style.zIndex = "-2";
  vid.appendChild(src);
  document.body.appendChild(vid);
}
backgrounVid();

gsap.from("body", {
  opacity: 0,
  duration: 1,
  delay: 1,
});

gsap.from(".nav-left", {
  duration: 2,
  opacity: 0,
  delay: 2.5,
  ease: "elastic.out(1,0.5)",
  scale: 0.7,
});
gsap.from(".nav-right>ul>li", {
  y: -20,
  duration: 2.5,
  opacity: 0,
  stagger: -0.2,
  ease: "elastic.out(1,0.3)",
  delay: 2,
});
gsap.from(".hero-left", {
  opacity: 0,
  duration: 2.5,
  // x: -100,
  delay: 2,
  scale: 0.95,
});
gsap.from(".hero-right", {
  opacity: 0,
  duration: 2.5,
  ease: "elastic.out(1,0.5)",
  delay: 2,
  rotation: 200,
  x: 500,
});

function cursorAnimate() {
  const cursor = document.createElement("div");
  cursor.id = "cursor";
  document.querySelector("main").prepend(cursor);
  document.querySelector("main").addEventListener("mousemove", function (val) {
    gsap.to("#cursor", {
      x: val.x - 15,
      y: val.y - 15,
      opacity: 1,
      duration: 0.6,
    });
  });
}
cursorAnimate();

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        425: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
});
