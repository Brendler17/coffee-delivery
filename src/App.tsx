import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { lightTheme } from './styles/themes/light';
import { GlobalStyle } from './styles/global';
import { Router } from './Router';
import { CoffeeContextProvider } from './contexts/CoffeeContext';

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
