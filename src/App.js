import React from "react";
import { createGlobalStyle } from "styled-components";
import Game from "./components/Game/Game";

const GlobalStyle = createGlobalStyle`
  /* 도화지 전체 배경 및 여백 제거 */
  html, body {
    background-color: black !important;
    margin: 0 !important;
    padding: 0 !important;
    height: 100%;
    width: 100%;
  }
  
  /* 기본 글꼴 및 정렬 설정 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif;
  }
  
  body {
    color: white !important;
    display: flex;
    justify-content: center; /* 가로 중앙 정렬 */
    /* 콘텐츠를 화면 상단에서부터 배치 (중앙 정렬 대신 flex-start) */
    align-items: flex-start; 
    overflow-x: hidden;
  }

  /* 제목 숨김 처리 */
  .title { display: none !important; }

  /* ⭐ 우승자 컨테이너 수직 정렬 및 위치 조정 ⭐ */
  .WinnerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* 전체 콘텐츠를 아래로 밀어내기 위해 컨테이너에 위쪽 여백 추가 */
    margin-top: 150px !important; /* 이미지 상단 둥근 모서리가 확실히 보이도록 충분히 늘림 */
  }

  /* 우승자 문구 (BUNNYDOT) */
  .winner-label {
    /* .WinnerContainer의 margin-top을 사용하므로 여기의 margin-top은 제거 */
    margin-top: 0 !important; 
    font-size: 24px !important;
    font-weight: 800 !important;
    color: gold !important;
    letter-spacing: 5px !important;
    margin-bottom: 25px !important;
    text-align: center;
  }

  /* 게임 진행 시 이미지 설정 (디자인 유지) */
  .food-img {
    aspect-ratio: 3 / 4 !important; 
    width: auto !important;
    max-height: 55vh !important;
    object-fit: cover !important; 
    border-radius: 12px !important; /* 이 둥근 모서리가 보이게 해야 함 */
    margin: 0 auto !important;
    display: block !important;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
  }

  /* 우승자 전용 강조 스타일 (디자인 유지) */
  .winner-img {
    border: 3px solid gold !important;
    box-shadow: 0 0 40px rgba(255, 215, 0, 0.6) !important;
    transform: scale(1.05); 
    transition: all 0.5s;
  }

  /* 텍스트 크기 (이름) (디자인 유지) */
  .name {
    font-size: 12px !important;
    color: white !important;
    text-align: center;
    margin-top: 10px;
  }

  /* ⭐ 다시하기 버튼 디자인 유지하면서 위치만 위로 올리기 ⭐ */
  .restart-btn {
    /* position: fixed 및 bottom 제거 (일반 레이아웃으로 변경) */
    margin-top: 50px !important; /* 원하는 만큼 위로 올리기 위해 위쪽 여백 추가 */
    margin-bottom: 30px; /* 하단 여백 추가 (화면 하단에 너무 붙지 않게) */
    
    /* 디자인 유지 */
    padding: 10px 25px;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 30px;
    cursor: pointer;
    font-size: 12px;
    transition: 0.3s;
  }
  .restart-btn:hover { background-color: white; color: black; }
`;
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Game />
    </>
  );
}

export default App;
