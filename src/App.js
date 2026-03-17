import React from "react";
import { createGlobalStyle } from "styled-components";
import Game from "./components/Game/Game";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif;
  }
  
  body {
    background-color: navy !important;
    color: white !important;
    min-height: 100vh;
    overflow-x: hidden; /* 가로 스크롤 방지 */
  }

  /* 1. 제목은 완전히 삭제 */
  h1 { display: none !important; }

  /* 2. 사진 비율 심폐소생술 (컴퓨터 화면 대응) */
  img {
    /* 사진 가로/세로 비율을 3:4로 딱 고정해버리기 */
    aspect-ratio: 3 / 4 !important; 
    
    /* 가로폭이 너무 넓어지지 않게 제한 */
    width: auto !important;
    max-height: 60vh !important; /* 화면 높이의 60% 정도만 차지 */
    
    object-fit: cover !important; /* 비율 지키면서 꽉 채우기 */
    border-radius: 15px !important;
    margin: 0 auto !important;
    display: block !important;
  }

  /* 3. 왕따시만한 글씨 아주 작게 만들기 */
  /* 사진 위에 겹쳐진 글씨나 아래 글씨 모두 잡기 위해 강력하게 적용 */
  div, p, span, .name {
    /* 기존 크기가 커도 무조건 12px로 고정 (사진 가로의 아주 작은 부분) */
    font-size: 12px !important; 
    
    color: white !important;
    text-align: center !important;
    margin-top: 10px !important;
    font-weight: 300 !important; /* 얇게 */
    text-shadow: none !important; /* 글씨 그림자 제거해서 더 작아 보이게 */
  }

  /* 사진들이 옆으로 나란히 있게 만드는 상자 조절 */
  .Game, .flex-container {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 20px !important;
    padding: 20px !important;
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
