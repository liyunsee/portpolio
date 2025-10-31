// 마우스 별 효과
document.addEventListener("DOMContentLoaded", function () {
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  // 커스텀 마우스 커서 생성
  const customCursor = document.createElement("div");
  customCursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(89, 166, 255, 0.4) 50%, transparent 100%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 15px rgba(89, 166, 255, 0.6), 0 0 30px rgba(89, 166, 255, 0.4);
  `;
  document.body.appendChild(customCursor);

  // 기본 커서 숨기기
  document.body.style.cursor = "none";

  // 마우스 위치 추적
  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // 현재 마우스가 있는 요소 확인
    const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
    const isInSection2 =
      elementUnderMouse && elementUnderMouse.closest(".section2");
    const isInYunseulPicture =
      elementUnderMouse && elementUnderMouse.closest(".yunseul-picture");

    // 커스텀 커서 색상 변경
    if (isInSection2 || isInYunseulPicture) {
      // section2나 yunseul-picture에서는 기본 밝은 파란색
      customCursor.style.background =
        "radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(89, 166, 255, 0.4) 50%, transparent 100%)";
      customCursor.style.boxShadow =
        "0 0 15px rgba(89, 166, 255, 0.6), 0 0 30px rgba(89, 166, 255, 0.4)";
    } else {
      // 다른 영역에서는 진한 파란색
      customCursor.style.background =
        "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(83, 169, 255, 0.9) 50%, transparent 100%)";
      customCursor.style.boxShadow =
        "0 0 15px rgba(117, 181, 245, 0.9), 0 0 30px rgba(0, 116, 233, 0.9)";
    }

    // 커스텀 커서 위치 업데이트
    customCursor.style.left = mouseX + "px";
    customCursor.style.top = mouseY + "px";

    // 랜덤하게 별 생성 (50% 확률로 증가)
    if (Math.random() < 0.5) {
      createStar(mouseX, mouseY);
    }
  });

  // 마우스가 가만히 있을 때도 마우스 위치에서 별 생성
  function autoSparkleAtMouse() {
    // 35% 확률로 마우스 위치에서 별 생성
    if (Math.random() < 0.35) {
      createStar(mouseX, mouseY);
    }
  }

  // 600ms마다 마우스 위치에서 자동 빛나기 실행 (더 자주)
  setInterval(autoSparkleAtMouse, 600);

  function createStar(x, y) {
    const sparkle = document.createElement("div");
    sparkle.className = "star";

    // 빛 위치를 마우스 주변에 랜덤하게 배치 (더 넓은 범위)
    const offsetX = (Math.random() - 0.5) * 80;
    const offsetY = (Math.random() - 0.5) * 80;

    sparkle.style.left = x + offsetX + "px";
    sparkle.style.top = y + offsetY + "px";

    // 다양한 크기 (더 큰 범위)
    const size = Math.random() * 8 + 3;
    sparkle.style.width = size + "px";
    sparkle.style.height = size + "px";

    // 화려한 색상 배열
    const colors = [
      "#e7f8ff", // 연한 파란색
      "#59a6ff", // 밝은 파란색
      "#ffffff", // 흰색
      "#c7e9ff", // 아주 연한 파란색
      "#3d8bfe", // 중간 파란색
      "#b8e0ff", // 연한 하늘색
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // 그라데이션과 그림자로 더 화려하게
    sparkle.style.background = `radial-gradient(circle, ${randomColor} 0%, transparent 70%)`;
    sparkle.style.boxShadow = `
      0 0 ${size * 2}px ${randomColor}88,
      0 0 ${size * 4}px ${randomColor}44,
      0 0 ${size * 6}px ${randomColor}22
    `;
    sparkle.style.opacity = Math.random() * 0.9 + 0.3;

    // 회전 애니메이션 추가
    const rotation = Math.random() * 360;
    sparkle.style.transform = `rotate(${rotation}deg)`;

    document.body.appendChild(sparkle);

    // 페이드 아웃 애니메이션
    setTimeout(() => {
      if (sparkle.parentNode) {
        sparkle.style.transition =
          "opacity 0.5s ease-out, transform 0.5s ease-out";
        sparkle.style.opacity = "0";
        sparkle.style.transform += " scale(1.5)";

        setTimeout(() => {
          if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
          }
        }, 500);
      }
    }, 800);
  }
});
