// let resizeTimer;

// window.addEventListener("resize", () => {
//   clearTimeout(resizeTimer);

//   resizeTimer = setTimeout(() => {
//     location.reload();
//   }, 400);
// });

// let currentScroll = 0;
// let targetScroll = 0;
// const ease = 0.08;

// window.addEventListener("wheel", (e) => {
//   e.preventDefault();
//   targetScroll += e.deltaY;
//   targetScroll = Math.max(0, Math.min(
//     targetScroll,
//     document.body.scrollHeight - window.innerHeight
//   ));
// }, { passive: false });

// function smoothScroll() {
//   currentScroll += (targetScroll - currentScroll) * ease;
//   window.scrollTo(0, currentScroll);
//   requestAnimationFrame(smoothScroll);
// }

// smoothScroll();

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu');
  const fullscreenMenu = document.getElementById('fullscreenMenu');
  const header = document.querySelector("header");

  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menuBtn.classList.toggle('active');
    fullscreenMenu.classList.toggle('active');
    header.classList.toggle("menu-open");
    document.body.classList.toggle("no-scroll");
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menuBtn.classList.remove('active');
      fullscreenMenu.classList.remove('active');
    }
  });
});

$(function () {
  $('.animate').scrolla({
    mobile: true,
    once: false
  });
});

$(function () {
  gsap.registerPlugin(ScrollTrigger);

  function getTotalWidth(selector) {
    const els = gsap.utils.toArray(selector);
    let total = 0;
    els.forEach(el => {
      total += el.offsetWidth + parseFloat(getComputedStyle(el).marginRight || 0);
    });
    return total - window.innerWidth;
  }
  function runProjectScroll(startPos, extra) {
    const project = document.querySelector(".project");
    const container = document.querySelector(".project .inner2");
    const scrollWidth = getTotalWidth(".project .inner2 > *");
    const finalScroll = scrollWidth + extra;

    gsap.fromTo(project,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: project,
          start: "700% 80%",
          end: "700% 60%",
          scrub: 1,
        }
      }
    );

    const scrollTween = gsap.to(container, {
      x: -finalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: project,
        pin: true,
        scrub: 1,
        start: startPos,
        end: "+=" + finalScroll,
        pinSpacing: true,
        invalidateOnRefresh: true
      }
    });

    ScrollTrigger.matchMedia({
      "(min-width: 1025px)": function () {
        gsap.utils.toArray(".project ul li").forEach((card, i) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: i % 2 === 0 ? -50 : 50
            },
            {
              opacity: 1,
              y: 0,
              ease: 'none',
              duration: 5,
              scrollTrigger: {
                trigger: card,
                containerAnimation: scrollTween,
                start: i === 0 ? "left 70%" : "left 90%",
                end: i === 0 ? "left 50%" : "left 70%",
                scrub: 1,
              }
            }
          );
        });
      }
    });

  }

  function runDancerPin() {
    const dancer = document.querySelector(".dancer");
    if (!dancer) return;

    ScrollTrigger.create({
      trigger: dancer,
      pin: ".dancer .fix .left",
      start: "7% top",
      end: "72% top",
      scrub: 1,
      pinSpacing: false,
    });

    gsap.fromTo(dancer,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: dancer,
          start: "100% 80%",
          end: "100% 60%",
          scrub: 1,
        }
      }
    );
  }

  function runHighlightScroll(startPos, extra) {
    const container = document.querySelector('.highlights ul');
    if (!container) return;

    const scrollWidth = getTotalWidth('.highlights ul li');
    const finalScroll = scrollWidth + extra;

    gsap.to(container, {
      x: -finalScroll,
      ease: 'none',
      scrollTrigger: {
        trigger: '.highlights',
        pin: true,
        scrub: 1,
        start: startPos,
        end: "+=" + finalScroll,
        pinSpacing: true,
        invalidateOnRefresh: true
      }
    });

    gsap.fromTo(".highlights",
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ".highlights",
          start: "60% 60%",
          end: "60% 40%",
          scrub: 1,
        }
      }
    );
  }

  function changeBg() {
    const dancer = document.querySelector(".dancer");
    const project = document.querySelector(".project");
    const lineup = document.querySelector(".lineup");
    const bookclass = document.querySelector(".bottom-bookclass");

    gsap.set(document.body, {
      background: "#000",
      color: "#f5f6fb"
    });

    gsap.fromTo(document.body,
      { background: '#f5f6fb', color: '#000' },
      {
        background: '#131313', color: '#f5f6fb',
        scrollTrigger: {
          trigger: dancer,
          start: "0% 80%",
          end: '20% 100%',
          scrub: 1,
        }
      })
    gsap.timeline({
      scrollTrigger: {
        trigger: project,
        start: "0% 80%",
        end: '80% 100%',
        scrub: 1,
      }
    })
      .fromTo(document.body,
        { background: '#000', color: '#f5f6fb' },
        { background: '#f5f6fb', color: '#000', ease: 'none', duration: 5 },
        0
      )
      .fromTo('.project .deco',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, ease: 'none', duration: 20 },
        0
      );
    gsap.fromTo(document.body,
      { background: '#000', color: '#f5f6fb' },
      {
        background: '#f5f6fb', color: '#000',
        scrollTrigger: {
          trigger: lineup,
          start: "0% 80%",
          end: '50% 100%',
          scrub: 1,
        }
      })
    gsap.fromTo(document.body,
      { background: '#f5f6fb', color: '#000' },
      {
        background: '#000', color: '#f5f6fb',
        scrollTrigger: {
          trigger: bookclass,
          start: "40% 80%",
          end: '100% 100%',
          scrub: 1,
        }
      })
    gsap.fromTo(document.body,
      { background: '#000', color: '#f5f6fb' },
      {
        background: '#f5f6fb', color: '#000',
        scrollTrigger: {
          trigger: "footer",
          start: "0% 80%",
          end: '100% 100%',
          scrub: 1,
        }
      })
  }

  function runFixcardAnimation() {
    const fixcard = document.querySelector(".fixcard");
    if (!fixcard) return;

    const bg = fixcard.querySelector(".bg");
    const items = gsap.utils.toArray(".fixcard .bg p");
    const glass = fixcard.querySelector(".glass");

    gsap.fromTo(glass,
      { opacity: 0 },
      {
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: fixcard,
          start: "top -10%",
          end: "10% -10%",
        }
      }
    );

    items.forEach((item, index) => {
      gsap.fromTo(item,
        {
          x: index % 2 === 0 ? '-400%' : '400%',
          opacity: 0
        },
        {
          opacity: 1,
          x: '0%',
          duration: 5,
          ease: "none",
          scrollTrigger: {
            trigger: fixcard,
            start: "top 100%",
            end: "top 30%",
            scrub: 1,
          }
        }
      );
    });

    items.forEach((item, index) => {
      gsap.fromTo(item,
        {
          opacity: 1,
          x: '0%',
        },
        {
          opacity: 0,
          x: index % 2 === 0 ? '-400%' : '400%',
          duration: 5,
          ease: "none",
          scrollTrigger: {
            trigger: fixcard,
            start: "80% 50%",
            end: "80% 30%",
            scrub: 1,
          }
        }
      );
    });

    gsap.fromTo(glass,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: fixcard,
          start: "80% 80%",
          end: "80% 60%",
          scrub: 1,
        }
      }
    );

    const pinStart = window.innerWidth <= 1024 ? "top 30%" : "top 12%";

    ScrollTrigger.create({
      trigger: fixcard,
      start: pinStart,
      end: "100% 100%",
      pin: ".fixcard .bg",
      pinSpacing: false,
      scrub: 1,
    });
  }

  ScrollTrigger.matchMedia({
    "(min-width: 1779px)": function () {
      window.addEventListener("resize", ScrollTrigger.update); runProjectScroll("top+=100 top", 900); runHighlightScroll("top+=200 top", 300); runDancerPin(); runFixcardAnimation(); changeBg();
    },
    "(min-width: 1025px) and (max-width: 1778px)": function () {
      window.addEventListener("resize", ScrollTrigger.update); runProjectScroll("top+=150 top", 900); runHighlightScroll("top+=200 top", 300); runFixcardAnimation(); changeBg();
    },
    "(min-width: 769px) and (max-width: 1024px)": function () {
      window.addEventListener("resize", ScrollTrigger.update); runProjectScroll("top+=300 top", -600); runHighlightScroll("top+=300 top", 350); runFixcardAnimation(); changeBg();
    },
    "(min-width: 390px) and (max-width: 768px)": function () {
      window.addEventListener("resize", ScrollTrigger.update); runFixcardAnimation(); changeBg();
    }
  });
});
