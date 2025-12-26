
        $(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
        }); 






const overlay = document.querySelector('.classinformCard');
const openBtns = document.querySelectorAll('.classCard .btnInner');
const closeBtn = document.querySelector('.classinformCard .topBox .btnInner');

// 카드 클릭 → 오버레이 열기
openBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

// 닫기 버튼 클릭
closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
});

// 배경 클릭 시 닫기
overlay.addEventListener('click', e => {
  if (e.target === overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
});


