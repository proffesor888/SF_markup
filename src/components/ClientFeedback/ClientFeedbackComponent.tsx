import { StyledFeedbackSection, StyledClientImage } from "./styled";
import { FeedBackQuoteComponent } from "../FeedbackQuote/FeedBackQuoteComponent";
import { ControlButtons } from "../ControlButtons/ControlButtonsComponent";
import client_photo from "../../assets/client_photo.jpg";

export const ClientFeedbackComponent = () => {
  return (
    <StyledFeedbackSection>
      <FeedBackQuoteComponent />
      <StyledClientImage src={client_photo} />
      <ControlButtons />
    </StyledFeedbackSection>
  );
};
