import React, { useState } from "react";
// style
import "./alcoholGame.css";

/**
 * 랜덤번호 지정
 * 유저가 번호를 입력
 * go버튼을 누름
 * 만약 유저가 번호를 맞추면, 맞췄습니다
 * 랜덤번호가 크면 down
 * 작으면 up
 * rest버튼을 누르면 rest
 * 5번의 기회를 다쓰면 게임이 끝난다
 * 유저 1~100범위 밖에 숫자를 입력하면알려준다. 기회를 깍지 않는다.
 * 유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 단, 기회를 깍지 않는다.
 * Math.random : 0~1랜덤으로 그래서 우리가 원하는 1~100 100곱해줘야해 그러나 컴퓨터는 0부터 카운트를 세기 때문에 1을 더해 줘야해
 * document.getElementById :
 * .value :
 * .textContent :
 * useState :
 */

function AlcoholGame() {
  // State
  const [computerNum, setComputerNum] = useState(0);
  setComputerNum(Math.floor(Math.random() * 100) + 1);

  console.log("setComputerNum", setComputerNum); // 랜덤번호

  // Go 버튼 클릭 이벤트
  function handlePlayButtonClick() {
    let inputNum = document.getElementById("inputNum");
    let inputValue = inputNum.value;
    let resultArea = document.getElementById("resultArea");
    // console.log("게임시작");
    // console.log("inputValue", inputValue);

    if (computerNum > inputValue) {
      resultArea.textContent = "Up!";
    } else if (computerNum < inputValue) {
      resultArea.textContent = "Down!";
    } else {
      resultArea.textContent = "정답입니다!";
    }
  }

  // Reset 버튼 클릭 이벤트
  function handleResetButtonClick() {
    // 인풋창 정리
    // 새로운 번호 생성
  }

  return (
    <>
      <div>AlcoholGame</div>
      <div id="resultArea">결과</div>
      <input type="number" id="inputNum" />
      <button onClick={handlePlayButtonClick}>Go!</button>
      <button onClick={handleResetButtonClick}>Reset!</button>
    </>
  );
}

export default AlcoholGame;
