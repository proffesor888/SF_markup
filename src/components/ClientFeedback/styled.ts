import { styled } from "styled-components";
import { breakpoints } from "@styles/breakpoints/breakpoints";

export const StyledFeedbackSection = styled.section`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 160px;
  padding: ${({ theme }) => `0 ${theme.primary_horizontal_offset}`};
  max-height: 597px;
  height: 100%;
  overflow: hidden;
  @media ${breakpoints.laptopL} {
    padding: ${({ theme }) => `0 ${theme.secondary_horizontal_offset}`};
  }
  @media ${breakpoints.tabletL} {
    padding: ${({ theme }) => `0 ${theme.primary_horizontal_offset}`};
  }
  @media ${breakpoints.mobileL} {
    padding: ${({ theme }) => `0 ${theme.secondary_horizontal_offset}`};
  }
`;

export const StyledClientImage = styled.img`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const StyledImageContainer = styled.div`
  flex: 1;
  @media ${breakpoints.tabletL} {
    display: none;
  }
`
