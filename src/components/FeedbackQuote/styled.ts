import { styled } from "styled-components";

export const StyledFeedbackQuote = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F9F9FA;
    padding: 70px 110px;
    max-width: 570px;
    width: 100%;
`

export const StyledQuoteIcon = styled.img`
    width: 29px;
    height: 23px;
    margin-bottom: 32px;
`

export const StyledFeedbackText = styled.text<{author?: boolean}>`
    font-weight: ${props => props.author ? 700 : 400};
    font-size: 16px;
    line-height: 28px;
    color: #000;
    text-align: left;
    & a:link, a:visited, a:visited:active {
        color: #000;
        text-decoration-color: #F3741C
    }   
`