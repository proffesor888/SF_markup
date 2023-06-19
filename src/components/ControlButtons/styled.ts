import { styled } from "styled-components";

const StyledArrow = styled.img`
  width: 7px;
  height: 14px;
`;

export const StyledArrowBlock = styled.div`
  width: 55px;
  height: 55px;
  background-color: #e97937;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const StyledControlButtons = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 0;
  right: 0;
`;

export const StyledLeftArrow = styled(StyledArrow)`
  opacity: 70%;
`;

export const StyledRightArrow = styled(StyledArrow)``;
