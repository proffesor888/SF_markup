import { StyledFeedbackSection, StyledClientImage, StyledImageContainer } from "./styled";
import { FeedBackQuoteComponent } from "@components/FeedbackQuote/FeedBackQuoteComponent";
import { ControlButtons } from "@components/ControlButtons/ControlButtonsComponent";
import client_photo from "@images/client_photo.jpg";

export const ClientFeedbackComponent = () => {
  return (
    <StyledFeedbackSection>
      <FeedBackQuoteComponent />
      <StyledImageContainer>
        <StyledClientImage src={client_photo} />
      </StyledImageContainer>
      <ControlButtons />
    </StyledFeedbackSection>
  );
};
