import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const sourceItems = [
  {
    name: "251230",
    src: require("../../img/bunnydot1.jpg")
  },
  {
    name: "260110",
    src: require("../../img/bunnydot2.jpg")
  },
  {
    name: "260116",
    src: require("../../img/bunnydot3.jpg")
  },
  {
    name: "260113",
    src: require("../../img/bunnydot4.jpg")
  },
    {
    name: "260122",
    src: require("../../img/bunnydot5.jpg")
  },
    {
    name: "260130",
    src: require("../../img/bunnydot6.jpg")
  },
    {
    name: "260127",
    src: require("../../img/bunnydot7.jpg")
  },
    {
    name: "260125",
    src: require("../../img/bunnydot8.jpg")
  },
    {
    name: "260206",
    src: require("../../img/bunnydot9.jpg")
  },
    {
    name: "260207",
    src: require("../../img/bunnydot10.jpg")
  },
    {
    name: "260216",
    src: require("../../img/bunnydot11.jpg")
  },
    {
    name: "260211",
    src: require("../../img/bunnydot12.jpg")
  },
    {
    name: "260211",
    src: require("../../img/bunnydot13.jpg")
  },
    {
    name: "260210",
    src: require("../../img/bunnydot14.jpg")
  },
    {
    name: "260301",
    src: require("../../img/bunnydot15.jpg")
  },
    {
    name: "260227",
    src: require("../../img/bunnydot16.jpg")
  },

    {
    name: "260225",
    src: require("../../img/bunnydot17.jpg")
  },
      {
    name: "260303",
    src: require("../../img/bunnydot18.jpg")
  },
      {
    name: "260304",
    src: require("../../img/bunnydot19.jpg")
  },
      {
    name: "260307",
    src: require("../../img/bunnydot20.jpg")
  },
      {
    name: "260308",
    src: require("../../img/bunnydot21.jpg")
  },
      {
    name: "260306",
    src: require("../../img/bunnydot22.jpg")
  }

];

const shuffleAndPick = (array, count) => {
  return [...array].sort(() => Math.random() - 0.5).slice(0, count);
};

const Game = () => {
  // 혜리가 유지하고 싶어 하는 foods 변수명 사용
  const [foods, setFoods] = useState([]); 
  const [winners, setWinners] = useState([]);
  const [displays, setDisplays] = useState([]);

  // 초기 세팅: 16장 랜덤 추출 및 시작
  useEffect(() => {
    const randomSixteen = shuffleAndPick(sourceItems, 16);
    setFoods(randomSixteen);
    setDisplays([randomSixteen[0], randomSixteen[1]]);
  }, []);

  const clickHandler = (selectedFood) => () => {
    if (foods.length <= 2) {
      // 결승전인 경우
      if (winners.length === 0) {
        setDisplays([selectedFood]); // 최종 우승자
      } else {
        const nextRound = [...winners, selectedFood];
        setFoods(nextRound);
        setDisplays([nextRound[0], nextRound[1]]);
        setWinners([]);
      }
    } else {
      // 일반 대결 진행
      setWinners([...winners, selectedFood]);
      const remaining = foods.slice(2);
      setFoods(remaining);
      setDisplays([remaining[0], remaining[1]]);
    }
  };
return (
    <FlexBox>
      {displays.length === 1 ? (
        /* 우승자 화면 (WinnerContainer 이름표 필수!) */
        <div className="WinnerContainer">
          <div className="winner-label">BUNNYDOT</div>
          <div className="flex-1">
            <img className="food-img winner-img" src={displays[0].src} alt="winner" />
            <div className="name">{displays[0].name}</div>
          </div>
          <button className="restart-btn" onClick={() => window.location.reload()}>
            RESTART
          </button>
        </div>
      ) : (
        /* 대결 화면 */
        <>
          <h1 className="title">25-26 ETERNITY 버니닷꾸</h1>
          {displays.map(d => (
            <div className="flex-1" key={d.name} onClick={clickHandler(d)}>
              <img className="food-img" src={d.src} alt={d.name} />
              <div className="name">{d.name}</div>
            </div>
          ))}
        </>
      )}
    </FlexBox>
  );
};

export default Game;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;