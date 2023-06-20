import { createGlobalStyle } from "styled-components";
import { size } from "@styles/breakpoints/breakpoints";

export const StyledGlobal = createGlobalStyle`
    :root {
        font-family: DM Sans, sans-serif;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        text-align: center;
        min-width: ${size.mobileM}
    }
    p {
        margin: 0;
        padding: 0;
    }
    #root {
        @media (min-width: ${size.laptopL}) {
            max-width: ${size.laptopL};
            margin: 0 auto;
        }
    }
`