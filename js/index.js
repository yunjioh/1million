
// card lineup
// document.addEventListener('DOMContentLoaded', () => {
//   const wrap = document.querySelector('.card-wrap');
//   const cards = wrap.querySelector('.cards');
//   const card = cards.querySelector('.card');
//   const next = wrap.querySelector('.next');
//   const prev = wrap.querySelector('.prev');

//   if (!wrap || !cards || !card || !next || !prev) return;

//   let currentX = 0;

//   const cardStyle = getComputedStyle(card);
//   const gap = parseFloat(getComputedStyle(cards).columnGap || 0);
//   const step = card.offsetWidth + gap;

//   next.addEventListener('click', () => {
//     const maxMove = cards.scrollWidth - wrap.clientWidth;
//     currentX = Math.min(currentX + step, maxMove);
//     cards.style.transform = `translateX(-${currentX}px)`;
//   });

//   prev.addEventListener('click', () => {
//     currentX = Math.max(currentX - step, 0);
//     cards.style.transform = `translateX(-${currentX}px)`;
//   });

//     // REMOVE 커서 UI 추가
//   const cursor = document.querySelector('.cursor-ui');
//   if (!cursor) return;

//   wrap.addEventListener('mouseenter', () => {
//     cursor.classList.add('is-active');
//   });

//   wrap.addEventListener('mouseleave', () => {
//     cursor.classList.remove('is-active');
//   });

//   wrap.addEventListener('mousemove', (e) => {
//     cursor.style.left = `${e.clientX}px`;
//     cursor.style.top = `${e.clientY}px`;
//   });

// });

//1m hover
document.addEventListener('DOMContentLoaded', () => {
  const wrap = document.querySelector('.wrap-1m');
  if (!wrap) return;

  const clean = wrap.querySelector('.clean');
  if (!clean) return;

  const cursor = document.querySelector('.cursor-ui'); 
  const hasCursor = !!cursor;

  wrap.addEventListener('mousemove', (e) => {
    const rect = wrap.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const mask = `
      radial-gradient(
        circle 220px at ${x}px ${y}px,
        white 0%,
        white 55%,
        transparent 75%
      )
    `;

    clean.style.maskImage = mask;
    clean.style.webkitMaskImage = mask;

    if (hasCursor) {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    }
  });

  wrap.addEventListener('mouseenter', () => {
    if (hasCursor) cursor.classList.add('is-active');
  });

  wrap.addEventListener('mouseleave', () => {
    const reset = `
      radial-gradient(
        circle 0px at 0px 0px,
        transparent 0%,
        transparent 100%
      )
    `;
    clean.style.maskImage = reset;
    clean.style.webkitMaskImage = reset;

    if (hasCursor) cursor.classList.remove('is-active');
  });
});




// //1m 호버
// document.addEventListener('DOMContentLoaded', () => {
//   const wrap = document.querySelector('.wrap-1m');
//   const clean = wrap.querySelector('.clean');

//   if (!wrap || !clean) return;

//   wrap.addEventListener('mousemove', (e) => {
//     const rect = wrap.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const mask = `
//       radial-gradient(
//         circle 220px at ${x}px ${y}px,
//         white 0%,
//         white 55%,
//         transparent 75%
//       )
//     `;

//     clean.style.maskImage = mask;
//     clean.style.webkitMaskImage = mask;
//   });

//   wrap.addEventListener('mouseleave', () => {
//     const reset = `
//       radial-gradient(
//         circle 0px at 0px 0px,
//         transparent 0%,
//         transparent 100%
//       )
//     `;
//     clean.style.maskImage = reset;
//     clean.style.webkitMaskImage = reset;
//   });
// });


// bottom-bookclass
window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  const ball = document.querySelector(".bounce-in-top");
  const panel = document.querySelector(".bottom-bookclass");
  if (!ball || !panel) return;


  gsap.set(ball, { y: -300, opacity: 0 });

  const ballTl = gsap.timeline({ paused: true })
    .to(ball, { y: 0, opacity: 1, ease: "bounce.out", duration: 0.4 })
    .to(ball, { opacity: 0, duration: 0.2 }, "+=0.1");

  ScrollTrigger.create({
    trigger: ball,
    start: "top 70%",
    onEnter: () => ballTl.restart(true),
    onEnterBack: () => ballTl.restart(true),
  });

gsap.set(".bottom-bookclass", {
  clipPath: "circle(0% at 50% 0%)"
});

gsap.timeline({
  scrollTrigger: {
    trigger: ".bottom-bookclass",
    start: "top 60%",
    end: "top -40%",
    scrub: 2
  }
})
.to(".bottom-bookclass", {
  clipPath: "circle(180% at 50% 0%)",
  ease: "none",
})
.to(".bounce-in-top", {
  y: window.innerHeight,
  opacity: 0,
  ease: "power2.in"
});


  ScrollTrigger.refresh();
});



// // bottom bookclass circle
// window.addEventListener("load", function () {
//   gsap.registerPlugin(ScrollTrigger);

//   gsap.set(".bottom-bookclass", {clipPath: "circle(50% at 50% 100%)"});

//   gsap.timeline({
//     scrollTrigger: {
//       trigger: ".bottom-bookclass",
//       start: "top 60%",
//       end: "top 10%",
//       scrub: 1,
//       // markers: true,
//       invalidateOnRefresh: true
//     }
//   })
//   .to(".bottom-bookclass", {clipPath: "circle(150% at 50% 50%)", ease: "none", duration:10})

//   ScrollTrigger.refresh();
// });


// //in card
// window.addEventListener("load", () => {
//   gsap.registerPlugin(ScrollTrigger);

//   gsap.set(".lineup .cards .card", {
//     autoAlpha: 0,
//     x: 120
//   });

//   gsap.to(".lineup .cards .card", {
//     autoAlpha: 1,
//     x: 0,
//     duration: 0.8,
//     ease: "power3.out",
//     stagger: 0.12,
//     scrollTrigger: {
//       trigger: ".lineup",
//       start: "top 75%",
//       end: "bottom 60%",
//       toggleActions: "play none none none",
//       scrub: 1,
//     }
//   });

//   ScrollTrigger.refresh();
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const wrap = document.querySelector('.card-wrap');
//   if (!wrap) return;

//   const cards = wrap.querySelector('.cards');
//   const card = cards?.querySelector('.card');
//   const next = wrap.querySelector('.next');
//   const prev = wrap.querySelector('.prev');

//   if (!cards || !card || !next || !prev) return;

//   let currentX = 0;

//   // flex gap 제대로 읽기
//   const styles = getComputedStyle(cards);
//   const gap = parseFloat(styles.gap || styles.columnGap || 0);
//   const step = card.getBoundingClientRect().width + gap;

//   const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

//   next.addEventListener('click', () => {
//     const maxMove = cards.scrollWidth - wrap.clientWidth;
//     currentX = clamp(currentX + step, 0, maxMove);
//     cards.style.transform = `translateX(-${currentX}px)`;
//   });

//   prev.addEventListener('click', () => {
//     currentX = clamp(currentX - step, 0, cards.scrollWidth - wrap.clientWidth);
//     cards.style.transform = `translateX(-${currentX}px)`;
//   });
// });

// $(function () {
//   $('.animate').scrolla({
//     mobile: true,
//     once: false
//   });
// });


document.addEventListener('DOMContentLoaded', () => {
  const wrap = document.querySelector('.card-wrap');
  if (!wrap) return;

  const cards = wrap.querySelector('.cards');
  const card = cards?.querySelector('.card');
  const next = wrap.querySelector('.next');
  const prev = wrap.querySelector('.prev');

  if (!cards || !card || !next || !prev) return;

  let currentX = 0;

  const styles = getComputedStyle(cards);
  const gap = parseFloat(styles.gap || styles.columnGap || 0);
  const step = card.getBoundingClientRect().width + gap;

  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

  next.addEventListener('click', () => {
    const maxMove = cards.scrollWidth - wrap.clientWidth;
    currentX = clamp(currentX + step, 0, maxMove);
    cards.style.transform = `translateX(-${currentX}px)`;
  });

  prev.addEventListener('click', () => {
    const maxMove = cards.scrollWidth - wrap.clientWidth;
    currentX = clamp(currentX - step, 0, maxMove);
    cards.style.transform = `translateX(-${currentX}px)`;
  });
});











$(function () {
  $('.animate').scrolla({
    mobile: true,
    once: false
  });
});



// scroll-in-ani
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".textAni-fast, .from-left, .from-right, .shake-top, .split, .puff-in-center");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          const duration = entry.target.dataset.duration;
          if (duration) {
            entry.target.style.animationDuration = `${duration}s`;
          }

          entry.target.classList.remove("is-active");
          void entry.target.offsetWidth; // reflow
          entry.target.classList.add("is-active");
        }
      });
    },
    { threshold: 0.1 }
  );

  targets.forEach(el => observer.observe(el));
});


document.addEventListener("DOMContentLoaded", () => {
  Splitting({ target: ".split", by: "chars" });
});

const mm = gsap.matchMedia();

mm.add("(min-width: 1399px)", () => {
  gsap.from(".textAni-fast", {
    y: 40,
    opacity: 0,
    duration: 1,
    immediateRender: false,
    scrollTrigger: {
      trigger: ".textAni-fast",
      start: "top 80%",
    }
  });
});

mm.add("(max-width: 768px)", () => {
  gsap.set(".textAni-fast", {
    opacity: 1,
    transform: "none",
    clearProps: "all",
  });
});
