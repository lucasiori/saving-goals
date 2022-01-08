import ThemeProvider from './components/ThemeProvider';
import Header from './components/Header';
import GlobalStyles from './styles/global';

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />

      <ThemeProvider>
        <Header />
        <main />
      </ThemeProvider>
    </>
  );
}
