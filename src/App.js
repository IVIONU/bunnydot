import React from "react";
import { createGlobalStyle } from "styled-components";
import Game from "./components/Game/Game";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard', -apple-system, sans-serif; /* 폰트는 깔끔하게 */
  }
  
  body {
    background-color: navy; /* 배경은 남색 */
    color: white; /* 글씨는 흰색 */
    min-height: 100vh; /* 화면 꽉 채우기 */
  }

  /* 하얀 박스 투명하게 */
  #root, .App {
    background: transparent !important;
  }

  /* 메인 제목 작게 */
  h1 {
    font-size: 1.2rem; /* 제목도 아담하게 줄임 */
    margin: 30px 0;
    font-weight: 500;
    text-align: center;
  }

  /* 사진 상자 스타일 */
  img {
    max-width: 250px; /* 사진 가로 크기를 최대 250px로 제한 */
    width: 60%;       /* 모바일에서는 화면 가로의 60% 차지 */
    
    /* ⭐ 여기가 비율 심폐소생술 포인트 ⭐ */
    height: 350px;      /* 사진 세로 길이를 딱 고정 (맘에 드는 숫자로 고쳐도 됨) */
    object-fit: cover;  /* 중요! 정해진 상자(height: 350px) 안에 원본 비율대로 '꽉 차게' 넣되, 남는 부분은 깔끔하게 자름 */
    
    border-radius: 12px;
    margin: 0 auto;
    display: block;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
  }

  /* ⭐ 혜리의 핵심 요청: 사진 아래 이름 글씨 아주 작게 ⭐ */
  .name {
    /* 기존 0.9rem에서 더 작은 단위인 'px'로 아주 작게 고정 */
    font-size: 14px; /* 사진 가로폭의 5분의1 정도로 느껴질 만큼 아담하게 조절 */
    
    margin: 15px 0 35px 0; /* 사진과의 간격 조절 */
    text-align: center;
    opacity: 0.8; /* 살짝 투명하게 해서 시선 강탈 안 하게 */
    font-weight: 300; /* 글씨 두께도 얇게 해서 여리여리하게 */
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
