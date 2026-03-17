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

  /* ⭐ 우승자 컨테이너: 위치를 적당히(100px)로 조정 ⭐ */
  .WinnerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 100px !important; /* 너무 내려가지 않게 적당히 조절 */
    background: none !important; /* 배경색 아예 삭제 */
    overflow: visible !important; /* 튀어나온 효과가 안 잘리게 */
  }

  /* ⭐ BUNNYDOT 글씨: 배경 가림막 완전 제거 ⭐ */
  .winner-label {
    background: none !important; /* 배경색 없음 */
    background-color: transparent !important; /* 투명 */
    font-size: 24px !important;
    font-weight: 800 !important;
    color: gold !important;
    letter-spacing: 5px !important;
    margin-bottom: 40px !important; /* 사진과 겹치지 않게 거리 두기 */
    text-align: center;
    z-index: 1 !important; /* 사진보다 뒤로 보냄 */
  }

  /* 사진 디자인 유지 */
  .food-img {
    aspect-ratio: 3 / 4 !important; 
    width: auto !important;
    max-height: 55vh !important;
    object-fit: cover !important; 
    border-radius: 12px !important; 
    margin: 0 auto !important;
    display: block !important;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
    
    /* ⭐ 사진이 글씨 영역에 가려지지 않게 앞으로 가져오기 ⭐ */
    position: relative !important;
    z-index: 10 !important; 
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

  /* RESTART 버튼 디자인 고수 */
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
