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

  /* ⭐ 1. 모든 바구니의 가위 마법(hidden)을 해제 ⭐ */
  #root, .App, .Game, div {
    overflow: visible !important; 
  }

  /* ⭐ 2. 우승자 컨테이너 위치 유지 (100px) ⭐ */
  .WinnerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 100px !important; 
    background: none !important;
    /* 여기서도 한 번 더 확실하게 잘림 방지 */
    overflow: visible !important; 
  }

  /* BUNNYDOT 글씨 디자인 & 위치 유지 */
  .winner-label {
    background: none !important;
    background-color: transparent !important;
    font-size: 24px !important;
    font-weight: 800 !important;
    color: gold !important;
    letter-spacing: 5px !important;
    margin-bottom: 40px !important; 
    text-align: center;
  }

  /* 사진 디자인 & 비율 유지 */
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

  /* 우승자 강조 효과 유지 */
  .winner-img {
    border: 3px solid gold !important;
    box-shadow: 0 0 40px rgba(255, 215, 0, 0.6) !important;
    transform: scale(1.05); /* 커져도 이제 안 잘릴 거야! */
    transition: all 0.5s;
    position: relative;
    z-index: 99;
  }

  /* 이름 크기 12px 유지 */
  .name {
    font-size: 12px !important;
    color: white !important;
    text-align: center;
    margin-top: 15px;
  }

  /* RESTART 버튼 디자인 & 위치 유지 */
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
