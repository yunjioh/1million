document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.step-box li');

  steps.forEach(step => {
    step.addEventListener('click', () => {
      steps.forEach(s => s.classList.remove('is-active'));
      step.classList.add('is-active');
    });
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.dancer-card');
  if (!cards.length) return;

  const sizes = [
    { w: 302, h: 452 }, 
    { w: 360, h: 582 },
    { w: 422, h: 632 },
    { w: 608, h: 876 }  
  ];

  const maxZ = cards.length * 10; 

  cards.forEach((card, hoverIndex) => {
    card.addEventListener('mouseenter', () => {
      cards.forEach((target, i) => {
        const distance = Math.abs(i - hoverIndex);

        let sizeIndex;
        if (distance === 0) sizeIndex = 3;
        else if (distance === 1) sizeIndex = 2;
        else if (distance === 2) sizeIndex = 1;
        else sizeIndex = 0;

        target.style.width  = `${sizes[sizeIndex].w}px`;
        target.style.height = `${sizes[sizeIndex].h}px`;

        target.style.zIndex = maxZ - distance;
      });
    });
  });
});









document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  const angles = [-75, -45, -15, 15, 45, 75];
  const radius = 420;

  function render() {
    cards.forEach((card, i) => {
      card.style.transform = `
        translateX(-50%)
        rotate(${angles[i]}deg)
        translateY(-${radius}px)
      `;
      card.style.zIndex = 100 - Math.abs(angles[i]);
    });
  }

  render();

  document.getElementById('fan').addEventListener('click', () => {
    angles.unshift(angles.pop());
    render();
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const text = document.querySelector('.circle-text');
  if (!text) return;

  const content = text.innerText.trim();
  text.innerHTML = '';

  [...content].forEach((char, i) => {
    const span = document.createElement('span');
    span.innerText = char;

    const angle = (360 / content.length) * i;
    span.style.setProperty('--angle', `${angle}deg`);

    text.appendChild(span);
  });
});

















