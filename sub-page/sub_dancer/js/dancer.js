
document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.step-box li');

  steps.forEach(step => {
    step.addEventListener('click', () => {
      steps.forEach(s => s.classList.remove('is-active'));
      step.classList.add('is-active');
    });
  });
});




$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
        }); 





// document.addEventListener('DOMContentLoaded', () => {
//   const cards = document.querySelectorAll('.dancer-card');
//   if (!cards.length) return;

//   const sizes = [
//     { w: 375, h: 562.5 },  // 이전 크기보다 살짝 작은 크기
//     { w: 435, h: 652.5 },
//     { w: 485, h: 727.5 },
//     { w: 535, h: 802.5 }   // 가장 큰 크기
//   ];

//   const maxZ = cards.length * 10; 

//   cards.forEach((card, hoverIndex) => {
//     // Mouse enter
//     card.addEventListener('mouseenter', () => {
//       cards.forEach((target, i) => {
//         // Hover된 카드만 크기 조정
//         if (i === hoverIndex) {
//           target.style.width = `${sizes[3].w}px`;  // 가장 큰 크기로
//           target.style.height = `${sizes[3].h}px`; // 가장 큰 크기로
//           target.style.zIndex = maxZ; // 가장 높은 zIndex
//         } else {
//           target.style.width = `${sizes[0].w}px`;  // 나머지 카드는 원래 크기
//           target.style.height = `${sizes[0].h}px`; // 나머지 카드는 원래 크기
//           target.style.zIndex = 0; // zIndex 기본 상태
//         }
//       });
//     });

//     // Mouse leave (모든 카드가 원래 크기로 돌아가기)
//     card.addEventListener('mouseleave', () => {
//       cards.forEach((target) => {
//         target.style.width = `${sizes[0].w}px`;  // 원래 크기 (작게 설정된 값)
//         target.style.height = `${sizes[0].h}px`; // 원래 크기 (작게 설정된 값)
//         target.style.zIndex = 0; // zIndex 원래대로
//       });
//     });
//   });
// });










document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const fanButton = document.getElementById('fan');

  const angles = [-75, -45, -15, 15, 45, 75];
  const radius = 420;







  // 두 번째 코드: 원형 텍스트 회전 처리
  const text = document.querySelector('.circle-text');
  if (text) {
    const content = text.innerText.trim();
    text.innerHTML = '';

    [...content].forEach((char, i) => {
      const span = document.createElement('span');
      span.innerText = char;

      const angle = (360 / content.length) * i;
      span.style.setProperty('--angle', `${angle}deg`);

      text.appendChild(span);
    });
  }
});



document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const fanButton = document.getElementById('fan');

  const angles = [-75, -45, -15, 15, 45, 75];
  const radius = 420;

  // =========================
  // 원형 텍스트 회전 처리
  // =========================
  const text = document.querySelector('.circle-text');
  if (text) {
    const content = text.innerText.trim();
    text.innerHTML = '';

    [...content].forEach((char, i) => {
      const span = document.createElement('span');
      span.innerText = char;

      const angle = (360 / content.length) * i;
      span.style.setProperty('--angle', `${angle}deg`);

      text.appendChild(span);
    });
  }
});



document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const fan = document.getElementById('fan');

  const angles = [-75, -45, -15, 15, 45, 75];
  const radius = 420;
  const hoverPush = 60;

  let isSpread = false;

  /* =========================
     원형 텍스트 처리
     ========================= */
  const text = document.querySelector('.circle-text');
  if (text) {
    const content = text.innerText.trim();
    text.innerHTML = '';

    [...content].forEach((char, i) => {
      const span = document.createElement('span');
      span.innerText = char;

      const angle = (360 / content.length) * i;
      span.style.setProperty('--angle', `${angle}deg`);

      text.appendChild(span);
    });
  }

  /* =========================
     카드 상태 제어
     ========================= */

  // 📱 모바일(768↓): 항상 fan 상태 고정
  function setStaticFan() {
    cards.forEach((card, i) => {
      card.style.transform = `
        translateX(-50%)
        rotate(${angles[i]}deg)
        translateY(-${radius}px)
        scale(1)
      `;
      card.style.opacity = 1;
      card.style.zIndex = 10;
    });
    isSpread = false;
  }

  // 중앙으로 모이기 (PC용)
  function resetCards() {
    if (window.innerWidth < 768) {
      setStaticFan();
      return;
    }

    cards.forEach(card => {
      card.style.transform = `
        translateX(-50%)
        translateY(0)
        rotate(0deg)
        scale(1)
      `;
      card.style.opacity = 0;
      card.style.zIndex = 1;
    });
    isSpread = false;
  }

  // 퍼지기
  function spreadCards() {
    if (window.innerWidth < 768) return;

    cards.forEach((card, i) => {
      card.style.transform = `
        translateX(-50%)
        rotate(${angles[i]}deg)
        translateY(-${radius}px)
        scale(1)
      `;
      card.style.opacity = 1;
      card.style.zIndex = 10;
    });
    isSpread = true;
  }

  /* =========================
     hover 효과
     ========================= */
  function handleHover(targetCard) {
    if (!isSpread) return;
    if (window.innerWidth < 1400) return;

    cards.forEach((card, i) => {
      if (card === targetCard) {
        card.style.transform = `
          translateX(-50%)
          rotate(${angles[i]}deg)
          translateY(-${radius + hoverPush}px)
          scale(1.03)
        `;
        card.style.zIndex = 50;
      } else {
        card.style.transform = `
          translateX(-50%)
          rotate(${angles[i]}deg)
          translateY(-${radius}px)
          scale(1)
        `;
        card.style.zIndex = 10;
      }
    });
  }

  function resetHover() {
    if (!isSpread) return;
    if (window.innerWidth < 1400) return;
    spreadCards();
  }

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => handleHover(card));
    card.addEventListener('mouseleave', resetHover);
  });

  /* =========================
     클릭 회전
     ========================= */
  function rotateCards() {
    if (window.innerWidth < 1400) return;

    angles.unshift(angles.pop());
    spreadCards();
  }

  fan.addEventListener('click', rotateCards);

  /* =========================
     화면 진입 감지
     ========================= */
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (window.innerWidth < 768) return;

      if (entry.isIntersecting) {
        spreadCards();
      } else {
        resetCards();
      }
    },
    { threshold: 0.4 }
  );

  observer.observe(fan);

  /* =========================
     반응형 제어
     ========================= */
  function handleResize() {
    if (window.innerWidth < 768) {
      fan.style.pointerEvents = 'none';
      setStaticFan();
    } else if (window.innerWidth < 1400) {
      fan.style.pointerEvents = 'none';
    } else {
      fan.style.pointerEvents = 'auto';
    }
  }

  handleResize();
  window.addEventListener('resize', handleResize);

  resetCards();
});




























