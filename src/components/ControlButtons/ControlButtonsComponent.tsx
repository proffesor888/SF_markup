import {
  StyledControlButtons,
  StyledLeftArrow,
  StyledRightArrow,
  StyledArrowBlock,
} from "./styled";
import right_arrow_icon from "@images/right_arrow.svg";
import left_arrow_icon from "@images/left_arrow.svg";

export const ControlButtons = () => {
  return (
    <StyledControlButtons>
      <StyledArrowBlock>
        <StyledLeftArrow src={left_arrow_icon} />
      </StyledArrowBlock>
      <StyledArrowBlock>
        <StyledRightArrow src={right_arrow_icon} />
      </StyledArrowBlock>
    </StyledControlButtons>
  );
};
