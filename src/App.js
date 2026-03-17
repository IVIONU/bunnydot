import React from "react";
import { createGlobalStyle } from "styled-components";
import Game from "./components/Game/Game";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard', -apple-system, sans-serif;
  }
  
  body {
    background-color: navy;
    color: white;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #root, .App {
    background: transparent !important;
    width: 100%;
  }

  /* 1. 제목 없애기 (방해되는 제목 숨기기) */
  h1 {
    display: none; 
  }

  /* 2. 사진 비율 & 컴퓨터 전체화면 대응 */
  img {
    /* 큰 화면에서도 사진이 너무 커지거나 찢어지지 않게 가로 최대폭 제한 */
    max-width: 200px; 
    width: 50%;       /* 화면이 작을 땐 유동적으로 조절 */
    
    /* 세로 길이를 고정해서 큰 화면에서도 비율 유지 */
    height: 280px;    
    object-fit: cover; 
    
    border-radius: 10px;
    margin: 0 auto;
    display: block;
    box-shadow: 0 4px 12px rgba(0,0,0,0.5);
  }

  /* 3. 글씨 크기 70% 이상 더 줄이기 */
  .name {
    /* 14px의 70% 수준인 10px 정도로 아주 아담하게 조절 */
    font-size: 10px; 
    
    margin: 10px 0 20px 0;
    text-align: center;
    opacity: 0.7;    /* 더 흐릿하게 해서 사진에만 집중되게 함 */
    font-weight: 300;
    letter-spacing: -0.5px; /* 자간을 줄여서 더 촘촘하고 세련되게 */
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
