import React from "react";
import { createGlobalStyle } from "styled-components";
import Game from "./components/Game/Game";

const GlobalStyle = createGlobalStyle`
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
    align-items: flex-start; /* 콘텐츠를 상단부터 배치 */
    overflow-x: hidden;
  }

  .title { display: none !important; }

  /* ⭐ 우승자 컨테이너: 사진을 과감하게 아래로 밀어냄 ⭐ */
  .WinnerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* 상단 잘림 방지 + 사진 위치 하향 조절을 위해 여백 대폭 추가 */
    margin-top: 280px !important; 
  }

  .winner-label {
    margin-top: 0 !important; 
    font-size: 24px !important;
    font-weight: 800 !important;
    color: gold !important;
    letter-spacing: 5px !important;
    margin-bottom: 25px !important;
    text-align: center;
  }

  .food-img {
    aspect-ratio: 3 / 4 !important; 
    width: auto !important;
    max-height: 55vh !important;
    object-fit: cover !important; 
    border-radius: 12px !important;
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

  .name {
    font-size: 12px !important;
    color: white !important;
    text-align: center;
    margin-top: 10px;
  }

  /* ⭐ 다시하기 버튼: 사진 쪽으로 과감하게 올림 ⭐ */
  .restart-btn {
    /* 사진(이름)과의 간격을 좁혀서 더 위로 보이게 조절 */
    margin-top: 20px !important; 
    margin-bottom: 50px;
    
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
