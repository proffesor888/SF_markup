import { styled } from "styled-components";
import { breakpoints } from "@styles/breakpoints/breakpoints";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-conter: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 60px;
  @media ${breakpoints.tablet} {
    padding: ${({ theme }) => `0 ${theme.secondary_horizontal_offset}`};
  }
`;

export const StyledTestimonials = styled.p`
  font-size: 16px;
  line-height: ${({ theme }) => theme.line_height_small};
  color: ${({ theme }) => theme.main_active_color};
`;

export const StyledTitle = styled.p`
  font-size: 52px;
  line-height: ${({ theme }) => theme.line_height_extra_large};
  font-weight: 600;
  color: ${({ theme }) => theme.primary_black};
`;
