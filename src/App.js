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
    /* 상단에서부터 배치를 시작해서 여백을 조절할 수 있게 함 */
    align-items: flex-start; 
    overflow-x: hidden;
  }

  .title { display: none !important; }

  /* ⭐ 우승자 컨테이너: 여백을 더 과감하게! ⭐ */
  .WinnerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* 위쪽 잘림 방지 + 사진 하향 조절 (숫자를 더 키웠어!) */
    padding-top: 350px !important; 
  }

  /* BUNNYDOT 글씨 위치 */
  .winner-label {
    font-size: 24px !important;
    font-weight: 800 !important;
    color: gold !important;
    letter-spacing: 5px !important;
    /* 사진과의 간격을 조금 더 줘서 사진이 안 겹치게 함 */
    margin-bottom: 40px !important; 
    text-align: center;
  }

  .food-img {
    aspect-ratio: 3 / 4 !important; 
    width: auto !important;
    max-height: 55vh !important;
    object-fit: cover !important; 
    /* 둥근 모서리가 잘리지 않게 padding-top으로 공간을 확보했어 */
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

  /* ⭐ RESTART 버튼: 사진 쪽으로 바짝 붙여 올림 ⭐ */
  .restart-btn {
    /* 사진 이름 바로 밑으로 오도록 간격을 최소화했어 */
    margin-top: 10px !important; 
    margin-bottom: 100px; /* 아래쪽 여백은 넉넉히 */
    
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
