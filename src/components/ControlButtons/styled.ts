import { styled } from "styled-components";
import { breakpoints } from "@styles/breakpoints/breakpoints";

const StyledArrow = styled.img`
  width: 7px;
  height: 14px;
`;

export const StyledArrowBlock = styled.div`
  width: 55px;
  height: 55px;
  background-color: ${({ theme }) => theme.secondary_active_color};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media ${breakpoints.tabletL} {
    width: 40px;
    height: 40px;
  }
`;

export const StyledControlButtons = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 0;
  right: ${({ theme }) => `${theme.primary_horizontal_offset}`};
  @media ${breakpoints.laptopL} {
    right: ${({ theme }) => `${theme.secondary_horizontal_offset}`};
  }
  @media ${breakpoints.tabletL} {
    right: ${({ theme }) => `${theme.primary_horizontal_offset}`};
  }
  @media ${breakpoints.mobileL} {
    right: ${({ theme }) => `${theme.secondary_horizontal_offset}`};
    top: 0;
  }
`;

export const StyledLeftArrow = styled(StyledArrow)`
  opacity: 70%;
`;

export const StyledRightArrow = styled(StyledArrow)``;
