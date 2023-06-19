import { ThemeProvider } from "styled-components";
import { AboutUs } from "./pages/AboutUs";
import { Header } from "./components/Header";
import { theme } from "theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <AboutUs />
    </ThemeProvider>
  );
}

export default App;
