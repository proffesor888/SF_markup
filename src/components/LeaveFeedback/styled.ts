import { styled } from "styled-components";
import { breakpoints } from "@styles/breakpoints/breakpoints";

export const StyledLeaveFeedback = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakpoints.tablet} {
    padding: ${({ theme }) => `0 ${theme.secondary_horizontal_offset}`};
  }
`;

export const StyledLeaveFeedbackText = styled.p<{ $isTitle?: boolean }>`
  font-weight: ${({$isTitle}) => ($isTitle ? 700 : 400)};
  font-size: ${({$isTitle}) => ($isTitle ? "52px" : "20px")};
  line-height: ${({$isTitle, theme}) => ($isTitle ? theme.line_height_extra_large : theme.line_height_large)};
  margin-bottom: 20px;
`;

export const StyledButton = styled.button`
  width: 219px;
  height: 54px;
  border-radius: 26px;
  background-color: #f3741c;
  text-transform: uppercase;
  border-color: transparent;
  color: ${({ theme }) => theme.primary_white};
  margin-top: 20px;
`;
