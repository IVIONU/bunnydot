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
    align-items: center;
    justify-content: center;
  }

  /* 제목은 방해되니까 아예 안 보이게 처리 */
  .title { display: none !important; }

  /* 사진 비율 3:4 고정 및 크기 조절 */
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

  /* ⭐ 우승자 전용 강조 효과 ⭐ */
  .winner-img {
    border: 3px solid gold !important;
    box-shadow: 0 0 40px rgba(255, 215, 0, 0.6) !important;
    transform: scale(1.05); /* 우승자는 살짝 더 크게 */
    transition: all 0.5s;
  }

  .winner-label {
    font-size: 24px !important;
    font-weight: 800 !important;
    color: gold !important;
    letter-spacing: 5px !important;
    margin-bottom: 20px !important;
    text-align: center;
  }

  /* 다시하기 버튼 */
  .restart-btn {
    margin-top: 30px;
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

  /* 혜리가 만족한 12px 글씨 크기 */
  .name {
    font-size: 12px !important;
    color: white !important;
    text-align: center;
    margin-top: 10px;
  }
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
