import {
  StyledFeedbackQuote,
  StyledQuoteIcon,
  StyledFeedbackText,
} from "./styled";
import quote from "@assets/quote.svg";

export const FeedBackQuoteComponent = () => {
  return (
    <StyledFeedbackQuote>
      <StyledQuoteIcon src={quote} alt="quote_icon" />
      <StyledFeedbackText>
        I have worked with a number of software developers before but none of
        them quite reached the level of professionalism, diligence and
        enthusiasm that I experienced with Vitaliy and his team. They are
        incredibly easy to work with and almost always find great programming
        solutions to our requirements. <br />
        <br /> What I especially liked about the SoftFormance team is their
        passion and understanding for our project. It’s like working with
        friends. Friends that deliver on their promises. I have nothing but
        praise for the work of SoftFormance team and look forward to working
        with this agency in the future.
      </StyledFeedbackText>
      <br />
      <br />
      <StyledFeedbackText author>Wolfgang Männel</StyledFeedbackText>
      <StyledFeedbackText>
        Founder and Managing Director,{" "}
        <a href="https://www.google.com">Fotografen365</a>
      </StyledFeedbackText>
    </StyledFeedbackQuote>
  );
};
