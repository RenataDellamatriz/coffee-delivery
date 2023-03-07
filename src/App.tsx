import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./@types/styles/global";
import { defaultTheme } from "./@types/styles/themes/default";
import { Router } from "./Router";
import { CoffeeContextProvider } from "./contexts/CoffeeContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CoffeeContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
