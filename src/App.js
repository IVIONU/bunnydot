import React from "react";
import { createGlobalStyle } from "styled-components";
import Game from "./components/Game/Game";

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui,
  }
  body {
    background-color: navy;
    color: white;
    min-height: 100vh;
  }

#root, .App {
  background: transparent !important;
}

h1 {
  font-size: 1.5rem;
  margin: 30px 0;
  font-weight: 600;
  text-align: center;
}

.name {
  font-size: 0.9rem;
  margin: 15px 0 30px 0;
  text-align: center;
  opacity: 0.9;
}

img {
  max-width: 280px;
  width: 70%
  height: auto;
  border-radius: 15px;
  margin: 0 auto;
  display: block;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
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
