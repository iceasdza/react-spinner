import { Button } from "antd";
import { useCallback, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import Item from "./item";

// const PI = 3.141592653589793238;
const SpinnerContainer = styled.div`
  width: 320px;
  height: 320px;
  background-color: black;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
`;
const SpinnerIndicator = styled.div`
  width: 20px;
  height: 100px;
  background-color: black;
  transform-origin: center;
  position: absolute;
  clip-path: polygon(50% 0%, 0 50%, 100% 50%);
  ${(props) => props.deg}
`;
const CenterPoint = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: black;
  position: absolute;
`;

const BASE_ROUND = 360 * 10;

const ITEM_LIST = [
  {
    name: "1",
    color: "red",
  },
  {
    name: "2",
    color: "blue",
  },
  {
    name: "3",
    color: "green",
  },
  {
    name: "4",
    color: "yellow",
  },
  // {
  //   name: "5",
  //   color: "brown",
  // },
  // {
  //   name: "6",
  //   color: "pink",
  // },
];

const Spinner = () => {
  const [deg, setDeg] = useState(null);
  const [result, setResult] = useState();
  const [tempResult, setTempResult] = useState();

  const handleSpin = useCallback(() => {
    const randomItem = Math.floor(Math.random() * ITEM_LIST.length);
    const wedgeDeg = 360 / ITEM_LIST.length;
    const min = wedgeDeg * randomItem + 1;
    const max = wedgeDeg * randomItem + wedgeDeg;
    setTempResult(ITEM_LIST[randomItem]);
    console.log(`RANDOM SECTION = ${ITEM_LIST[randomItem].color}`);
    console.log(`start with = ${min}`);
    console.log(`end with = ${max}`);
    const randomDeg = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`random deg range ${randomDeg}`);
    const totalDeg = (randomDeg % 360) + BASE_ROUND;
    setDeg(null);
    const style = css`
      transform: rotate(${totalDeg}deg);
      transition: all ease 5s;
    `;
    setTimeout(() => {
      setDeg(style);
    }, 200);
  }, []);

  const items = useMemo(() => {
    let share = 360 / ITEM_LIST.length;
    const transformData = ITEM_LIST.map((data, index) => {
      return {
        name: data.name,
        wedgeCss: css`
          transform: rotate(${index * share}deg) skewY(${share - 90}deg);
        `,
        childCss: css`
          transform: skewY(${-(share - 90)}deg) rotate(${share / 2}deg);
        `,
        color: data.color,
      };
    });
    return transformData.map((data, index) => (
      <Item key={index} data={data} index={index} />
    ));
  }, []);

  const handleEndTransition = useCallback(() => {
    console.log(tempResult);
    setResult(tempResult);
  }, [tempResult]);

  return (
    <>
      <SpinnerContainer>
        {items}
        <SpinnerIndicator deg={deg} onTransitionEnd={handleEndTransition} />
        <CenterPoint />
      </SpinnerContainer>
      You got {result?.color}
      <Button style={{ marginTop: 24 }} block size="large" onClick={handleSpin}>
        Spin now
      </Button>
    </>
  );
};

export default Spinner;
