import { styled } from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-conter: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 60px;
`;

export const StyledTestimonials = styled.text`
  font-size: 16px;
  line-height: 21px;
  color: ${props => props.theme.main_active_color};
`;

export const StyledTitle = styled.text`
  font-size: 52px;
  line-height: 68x;
  font-weight: 600;
  color: #000;
`;
