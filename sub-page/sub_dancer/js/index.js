// card lineup
document.addEventListener('DOMContentLoaded', () => {
  const wrap = document.querySelector('.card-wrap');
  const cards = wrap.querySelector('.cards');
  const card = cards.querySelector('.card');
  const next = wrap.querySelector('.next');
  const prev = wrap.querySelector('.prev');

  if (!wrap || !cards || !card || !next || !prev) return;

  let currentX = 0;

  const cardStyle = getComputedStyle(card);
  const gap = parseFloat(getComputedStyle(cards).columnGap || 0);
  const step = card.offsetWidth + gap;

  next.addEventListener('click', () => {
    const maxMove = cards.scrollWidth - wrap.clientWidth;
    currentX = Math.min(currentX + step, maxMove);
    cards.style.transform = `translateX(-${currentX}px)`;
  });

  prev.addEventListener('click', () => {
    currentX = Math.max(currentX - step, 0);
    cards.style.transform = `translateX(-${currentX}px)`;
  });
});




//1m 호버
document.addEventListener('DOMContentLoaded', () => {
  const wrap = document.querySelector('.wrap-1m');
  const clean = wrap.querySelector('.clean');

  if (!wrap || !clean) return;

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
  });
});

