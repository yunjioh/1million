window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);

function handleScroll() {
  var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  fixDancer(scrollPos);
}

function fixDancer(scrollPos) {
  var dancer = document.querySelector('.dancer');
  var left = document.querySelector('.dancer .fix .left');

  if (!dancer || !left) return;

  var dancerTop = dancer.offsetTop;
  var dancerHeight = dancer.offsetHeight;
  var dancerBottom = dancerTop + dancerHeight;
  var leftHeight = left.offsetHeight;

  var endOffset = 1000;

  if (scrollPos >= dancerTop && scrollPos < dancerBottom - leftHeight - endOffset) {
    left.classList.add('on');
    left.classList.remove('end');

  } else if (scrollPos >= dancerBottom - leftHeight - endOffset) {
    left.classList.remove('on');
    left.classList.add('end');

  } else {
    left.classList.remove('on');
    left.classList.remove('end');
  }
}

function getStartPos() {
  const w = window.innerWidth;

  if (w >= 1920) {
    return 'top+=200 top';
  } else if (w >= 1024) {
    return 'top+=200 top';
  } else if (w >= 768) {
    return 'top+=200 top';
  } else {
    return 'top+=100 top';
  }
}

$(function () {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.matchMedia({
    'all': function () {
      const project = document.querySelector('.project');
      const container = document.querySelector('.project .inner');
      const items = gsap.utils.toArray('.project .inner > *');

      let totalWidth = 0;
      items.forEach(el => {
        const style = getComputedStyle(el);
        totalWidth += el.offsetWidth + parseFloat(style.marginRight || 0);
      });

      const moveX = totalWidth - window.innerWidth;
      const extraScroll = window.innerWidth >= 1024 ? 450 : 200;

      const finalMoveX = moveX + extraScroll;

      if (window.innerWidth <= 390) {
        project.style.minHeight = finalMoveX + window.innerHeight + 'px';
      } else {
        project.style.minHeight = '';
      }

      gsap.to(container, {
        x: -finalMoveX,
        ease: 'none',
        scrollTrigger: {
          trigger: project,
          pin: true,
          scrub: 1,
          start: () => getStartPos(),
          end: () => "+=" + finalMoveX,
          pinSpacing: true,
          invalidateOnRefresh: true
        }
      });

    }
  });

});
$(function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({

    'all': function () {

      const container = document.querySelector('.highlights ul');
      const items = gsap.utils.toArray('.highlights ul li');

      let totalWidth = 0;
      items.forEach(el => {
        totalWidth += el.offsetWidth + parseFloat(getComputedStyle(el).marginRight || 0);
      });

      const scrollLength = totalWidth - window.innerWidth + 500;

      gsap.to(container, {
        x: () => -scrollLength,
        ease: 'none',
        scrollTrigger: {
          trigger: '.highlights',
          pin: true,
          scrub: 1,
          start: () => getStartPos(),
          end: () => "+=" + scrollLength,
          invalidateOnRefresh: true
        }
      });
    }

  });
});

window.addEventListener('scroll', fixCardBg);
window.addEventListener('resize', fixCardBg);

function fixCardBg() {
  const section = document.querySelector('.fixcard');
  const bg = document.querySelector('.fixcard .card-bg');
  const ul = document.querySelector('.fixcard ul');

  if (!section || !bg || !ul) return;

  const scrollY = window.scrollY;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const ulBottom = sectionTop + ul.offsetTop + ul.offsetHeight;
  const bgHeight = bg.offsetHeight;

  if (scrollY >= sectionTop && scrollY < ulBottom - bgHeight) {
    bg.classList.add('fixed');
    bg.classList.remove('end');

    bg.style.top = '0';
    bg.style.bottom = '';
  }

  else if (scrollY >= ulBottom - bgHeight) {
    bg.classList.remove('fixed');
    bg.classList.add('end');

    const top =
      ulBottom - bgHeight - sectionTop;

    bg.style.top = top + 'px';
    bg.style.bottom = '';
  }

  else {
    bg.classList.remove('fixed');
    bg.classList.remove('end');

    bg.style.top = '0';
    bg.style.bottom = '';
  }
}
