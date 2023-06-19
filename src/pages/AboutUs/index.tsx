import { StyledMain } from "./styled";
import { TitleComponent } from "../../components/Title/TitleComponent";
import { ClientFeedbackComponent } from "../../components/ClientFeedback/ClientFeedbackComponent";
import { LeaveFeedbackComponent } from "../../components/LeaveFeedback/LeaveFeedbackComponent";

export const AboutUs = () => {
  return (
    <StyledMain>
      <TitleComponent />
      <ClientFeedbackComponent />
      <LeaveFeedbackComponent />
    </StyledMain>
  );
};
