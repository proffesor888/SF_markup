import { ThemeProvider } from "styled-components";
import { AboutUs } from "./pages/AboutUs";
import { Header } from "./components/Header";
import { theme } from "@styles/theme";
import { StyledGlobal } from "@styles/global/StyledGlobal";

function App() {
  return (
    <>
    <StyledGlobal />
      <ThemeProvider theme={theme}>
        <Header />
        <AboutUs />
      </ThemeProvider>
    </>
  );
}

export default App;
