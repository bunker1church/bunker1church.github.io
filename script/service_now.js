// 현재 시간과 요일을 가져오는 함수
function getCurrentTimeAndDay() {
    const now = new Date();
    const day = now.getDay(); // 0: 일요일, 1: 월요일, ...
    const hour = now.getHours();
    const minute = now.getMinutes();
    return { day, hour, minute };
  }
  
  // "service" id의 div 엘리먼트를 가져오는 함수
  function getServiceElement() {
    return document.getElementById("service");
  }
  
  // 요일과 시간을 기준으로 엘리먼트를 보여주거나 숨기는 함수
  function showHideElement() {
    const { day, hour, minute } = getCurrentTimeAndDay();
    const serviceElement = getServiceElement();
  
    // 일요일 (day === 0)이고 시간이 10:45 ~ 23:55 사이라면 엘리먼트를 보여줌
    if (day === 0 && (hour === 10 && minute >= 45) || (hour > 10 && hour < 24)) {
      serviceElement.style.display = "block";
    } else {
      serviceElement.style.display = "none";
    }
  }
  
  // 1초마다 요일과 시간을 확인하여 엘리먼트를 보여주거나 숨기는 함수 실행
  setInterval(showHideElement, 1000);
  
  // 페이지 로딩 시 엘리먼트의 상태를 업데이트
  showHideElement();