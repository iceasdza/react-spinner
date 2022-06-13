import styled, { css } from "styled-components";

const ItemContainer = styled.div`
  position: absolute;
  ${(props) =>
    props.color !== null &&
    css`
      background: ${props.color || "white"};
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
        <ItemChildren childCss={data.childCss}></ItemChildren>
      </ItemContainer>
    </>
  );
};

export default Item;
