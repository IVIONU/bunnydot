import React, { useState, useEffect } from "react";
import { FlexBox } from "./style";

const items = [
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
  /*
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
*/
];

const Game = () => {
  const [foods, setFoods] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setFoods(items);
    setDisplays([items[0], items[1]]);
  }, []);

  const clickHandler = food => () => {
    if (foods.length <= 2) {
      if (winners.length === 0) {
        setDisplays([food]);
      } else {
        let updatedFood = [...winners, food];
        setFoods(updatedFood);
        setDisplays([updatedFood[0], updatedFood[1]]);
        setWinners([]);
      }
    } else if (foods.length > 2) {
      setWinners([...winners, food]);
      setDisplays([foods[2], foods[3]]);
      setFoods(foods.slice(2));
    }
  };
return (
    <FlexBox>
      {/* 사진이 1장 남았을 때 (우승자 화면) */}
      {displays.length === 1 ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="winner-label">BUNNYDOT</div>
          <div className="flex-1">
            {/* 우승자 이미지에는 winner-img 클래스를 추가로 붙여줌 */}
            <img className="food-img winner-img" src={displays[0].src} alt="winner" />
            <div className="name">{displays[0].name}</div>
          </div>
          <button className="restart-btn" onClick={() => window.location.reload()}>
            RESTART
          </button>
        </div>
      ) : (
        /* 사진이 2장일 때 (게임 진행 화면) */
        <>
          <h1 className="title">25-26 ETERNITY 버니닷꾸</h1>
          {displays.map(d => {
            return (
              <div className="flex-1" key={d.name} onClick={clickHandler(d)}>
                <img className="food-img" src={d.src} />
                <div className="name">{d.name}</div>
              </div>
            );
          })}
        </>
      )}
    </FlexBox>
  );
};

export default Game;
