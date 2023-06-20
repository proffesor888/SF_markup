import { styled } from "styled-components";
import { breakpoints } from "@styles/breakpoints/breakpoints";

export const StyledFeedbackQuote = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.main_background_color};
  padding: ${({theme }) => theme.feedback_desktop_padding};
  flex: 1;
  @media ${breakpoints.laptopL} {
    padding: ${({theme }) => theme.feedback_mobile_padding};
  }
  @media ${breakpoints.tabletL} {
    padding: ${({theme }) => theme.feedback_desktop_padding};
  }
  @media ${breakpoints.mobileL} {
    padding: 3%;
  }
`;

export const StyledQuoteIcon = styled.img`
  width: 29px;
  height: 23px;
  margin-bottom: 32px;
`;

export const StyledFeedbackText = styled.p<{ $isAuthor?: boolean }>`
  font-weight: ${(props) => (props.$isAuthor ? 700 : 400)};
  font-size: 16px;
  line-height: ${({ theme }) => theme.line_height_medium};
  color: ${({ theme }) => theme.primary_black};
  text-align: left;
  & a:link,
  a:visited,
  a:visited:active {
    color: ${({ theme }) => theme.primary_black};
    text-decoration-color: ${({ theme }) => theme.main_active_color};
  }
`;
