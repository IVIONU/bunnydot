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
    align-items: flex-start; /* 상단부터 차곡차곡 쌓기 */
    overflow-x: hidden;
  }

  .title { display: none !important; }

  /* ⭐ 우승자 컨테이너: 여백 대폭격 (600px!) ⭐ */
  .WinnerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* 윗부분이 절대 안 잘리게 아예 화면 중간까지 밀어버림 */
    padding-top: 600px !important; 
  }

  /* BUNNYDOT 글씨: 사진이랑 절대 안 겹치게 여백 추가 */
  .winner-label {
    font-size: 24px !important;
    font-weight: 800 !important;
    color: gold !important;
    letter-spacing: 5px !important;
    /* 사진 윗부분이랑 거리를 더 둬서 잘림 방지 */
    margin-bottom: 80px !important; 
    text-align: center;
  }

  .food-img {
    aspect-ratio: 3 / 4 !important; 
    width: auto !important;
    max-height: 55vh !important;
    object-fit: cover !important; 
    border-radius: 12px !important; /* 드디어 보일 둥근 모서리 */
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
    margin-top: 15px;
  }

  /* ⭐ RESTART 버튼: 혜리가 좋다고 한 위치 그대로 (10px 유지) ⭐ */
  .restart-btn {
    margin-top: 10px !important; 
    margin-bottom: 150px; /* 아래쪽 여백은 넉넉하게 */
    
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
