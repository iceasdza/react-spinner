import styled, { css } from "styled-components";

const ItemContainer = styled.div`
  position: absolute;
  transform-origin: bottom;
  width: 50%;
  height: 60%;
  left: 50%;
  bottom: 50%;
  padding: 0;
  transform-origin: bottom left;
  ${(props) =>
    props.color !== null &&
    css`
      background: ${props.color};
    `}
  ${(props) => props.wedgeCss}
`;
const ItemChildren = styled.div`
  position: absolute;
  bottom: 50px;
  padding: 0px;
  color: #333;
  left: 5px;
  ${(props) => props.childCss}
`;
const Item = ({ data, index }) => {
  return (
    <>
      <ItemContainer index={index} wedgeCss={data.wedgeCss} color={data.color}>
        <ItemChildren childCss={data.childCss}>
          ITEM {data.name} {data.color}
        </ItemChildren>
      </ItemContainer>
    </>
  );
};

export default Item;
