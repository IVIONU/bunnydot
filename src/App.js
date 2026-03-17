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
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
  }

  /* 제목 숨김 처리 */
  .title { display: none !important; }

  /* 게임 진행 시 이미지 설정 */
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

  /* 우승자 전용 강조 스타일 */
  .winner-img {
    border: 3px solid gold !important;
    box-shadow: 0 0 40px rgba(255, 215, 0, 0.6) !important;
    transform: scale(1.05); 
    transition: all 0.5s;
  }

  /* 우승자 문구 위치 하단 조정 */
  .winner-label {
    margin-top: 80px !important; 
    font-size: 24px !important;
    font-weight: 800 !important;
    color: gold !important;
    letter-spacing: 5px !important;
    margin-bottom: 25px !important;
    text-align: center;
  }

  /* 텍스트 크기 12px 유지 */
  .name {
    font-size: 12px !important;
    color: white !important;
    text-align: center;
    margin-top: 10px;
  }

  /* 다시하기 버튼 디자인 */
  .restart-btn {
    margin-top: 40px;
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
