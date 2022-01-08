import ThemeProvider from './components/ThemeProvider';
import Header from './components/Header';
import GlobalStyles from './styles/global';
import SavingGoal from './components/views/SavingGoal';

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />

      <ThemeProvider>
        <Header />

        <main>
          <SavingGoal />
        </main>
      </ThemeProvider>
    </>
  );
}
