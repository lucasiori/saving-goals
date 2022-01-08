import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={theme}>
        <header />
        <main />
      </ThemeProvider>
    </>
  );
}
