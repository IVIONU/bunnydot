import React from "react";
import { createGlobalStyle } from "styled-components";
import Game from "./components/Game/Game";

const GlobalStyle = createGlobalStyle`
  /* 도화지 전체 배경 설정 */
  html, body {
    background-color: black !important;
    margin: 0 !important;
    padding: 0 !important;
    height: 100%;
    width: 100%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif;
  }
  
  body {
    color: white !important;
    display: flex;
    justify-content: center;
    align-items: flex-start; /* 상단에서부터 배치 시작 */
    overflow-x: hidden;
  }

  /* 제목 숨김 처리 */
  .title { display: none !important; }

  /* ⭐ 우승자 컨테이너: 전체를 과감하게 아래로 내림 ⭐ */
  .WinnerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* 화면 맨 위에서부터 150px 정도 여유 있게 시작 */
    padding-top: 150px !important; 
    background: transparent !important; /* 컨테이너 배경 투명화 */
  }

  /* ⭐ BUNNYDOT 글씨: 배경 투명화 + 사진과 거리 두기 ⭐ */
  .winner-label {
    background: transparent !important; /* 혜리가 말한 배경 가림 해결 */
    font-size: 24px !important;
    font-weight: 800 !important;
    color: gold !important;
    letter-spacing: 5px !important;
    /* 글씨가 내려오면서 사진을 가리지 않게 아래 여백 확보 */
    margin-bottom: 60px !important; 
    text-align: center;
  }

  /* 사진 비율 및 디자인 유지 */
  .food-img {
    aspect-ratio: 3 / 4 !important; 
    width: auto !important;
    max-height: 55vh !important;
    object-fit: cover !important; 
    border-radius: 12px !important; /* 둥근 모서리 강조 */
    margin: 0 auto !important;
    display: block !important;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
  }

  .winner-img {
    border: 3px solid gold !important;
    box-shadow: 0 0 40px rgba(255, 215, 0, 0.6) !important;
    transform: scale(1.05); 
    transition: all 0.5s;
  }

  /* 혜리가 만족한 12px 이름 크기 */
  .name {
    font-size: 12px !important;
    color: white !important;
    text-align: center;
    margin-top: 15px;
  }

  /* ⭐ RESTART 버튼: 혜리가 만족한 10px 간격 유지 ⭐ */
  .restart-btn {
    margin-top: 10px !important; 
    margin-bottom: 80px;
    
    padding: 10px 25px;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 30px;
    cursor: pointer;
    font-size: 12px;
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
