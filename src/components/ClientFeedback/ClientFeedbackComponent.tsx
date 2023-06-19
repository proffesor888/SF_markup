import { StyledFeedbackSection, StyledClientImage } from "./styled";
import { FeedBackQuoteComponent } from "@components/FeedbackQuote/FeedBackQuoteComponent";
import { ControlButtons } from "@components/ControlButtons/ControlButtonsComponent";
import client_photo from "@assets/client_photo.jpg";

export const ClientFeedbackComponent = () => {
  return (
    <StyledFeedbackSection>
      <FeedBackQuoteComponent />
      <StyledClientImage src={client_photo} />
      <ControlButtons />
    </StyledFeedbackSection>
  );
};
