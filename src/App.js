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
    align-items: flex-start;
    overflow-x: hidden;
  }

  .title { display: none !important; }

  /* ⭐ 우승자 컨테이너: 이제 클래스가 연결되어 제대로 밀릴 거야! ⭐ */
  .WinnerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* 전체를 화면 위에서 200px 내려서 시작 */
    padding-top: 200px !important; 
    background: transparent !important;
  }

  /* ⭐ BUNNYDOT 글씨: 사진 윗부분 가림 방지 ⭐ */
  .winner-label {
    background: transparent !important;
    font-size: 24px !important;
    font-weight: 800 !important;
    color: gold !important;
    letter-spacing: 5px !important;
    /* 사진 모서리가 보이도록 아래 여백을 100px로 대폭 늘림 */
    margin-bottom: 100px !important; 
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
    margin-top: 15px;
  }

  /* ⭐ RESTART 버튼: 혜리가 좋다고 한 10px 간격 유지 ⭐ */
  .restart-btn {
    margin-top: 10px !important; 
    margin-bottom: 100px;
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
