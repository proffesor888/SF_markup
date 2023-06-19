import {
  StyledLeaveFeedback,
  StyledLeaveFeedbackText,
  StyledButton,
} from "./styled";

export const LeaveFeedbackComponent = () => {
  return (
    <StyledLeaveFeedback>
      <StyledLeaveFeedbackText isTitle>
        Leave your feedback
      </StyledLeaveFeedbackText>
      <StyledLeaveFeedbackText>
        If you had a chance to work with us, please, leave your feedback <br />{" "}
        and we’ll happily add it to our testimonials page. Thank you!
      </StyledLeaveFeedbackText>
      <StyledButton>leave your feedback</StyledButton>
    </StyledLeaveFeedback>
  );
};
