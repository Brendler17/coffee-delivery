import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes/light';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <p>Coffee Delivery</p>
      <GlobalStyle />
    </ThemeProvider>
  );
}
