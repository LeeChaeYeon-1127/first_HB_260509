function open_letter() {
  document.getElementsByClassName('letter-close')[0].style.display = 'none';
  document.getElementsByClassName('letter-open')[0].style.display = 'block';

  //오디오 요소 가져오기
  const audio = document.getElementsByClassName('bgm')[0];

  //재생 시작
  audio.play().catch((e) => {
    console.log('자동재생이 차단되었습니다. 사용자 설정 확인이 필요합니다.', e);
  });
}

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = 'auto';
}

function reveal() {
  // 1. 오버레이된 엘레먼트 숨기기
  const overlayElem = document.querySelector('.overlay');
  if (overlayElem) overlayElem.style.display = 'none';
  // 2. 스크롤 안되게 하던거 되게 하기
  enableScroll();
}

// 연 월 일 시 분 초
// 월이 0부터 시작하는 개어이없는 시스템
const targetDate = new Date(2026, 4, 5, 18, 56, 1);
// 이게 컴퓨터 현재 시간 기준으로 계산하라고 알려주는 코드임
const now = new Date();

const timeDiff = targetDate.getTime() - now.getTime();

disableScroll();

console.log(timeDiff);

if (timeDiff <= 0) {
  reveal();
} else {
  setTimeout(reveal, timeDiff);
}
