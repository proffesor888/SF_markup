import { styled } from "styled-components";

export const StyledLeaveFeedback = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLeaveFeedbackText = styled.text<{ isTitle?: boolean }>`
  font-weight: ${(props) => (props.isTitle ? 700 : 400)};
  font-size: ${(props) => (props.isTitle ? "52px" : "20px")};
  line-height: ${(props) => (props.isTitle ? "67px" : "32px")};
  margin-bottom: 20px;
`;

export const StyledButton = styled.button`
  width: 219px;
  height: 54px;
  border-radius: 26px;
  background-color: #f3741c;
  text-transform: uppercase;
  border-color: transparent;
  color: #fff;
  margin-top: 20px;
`;
