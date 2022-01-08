import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProviderCP({
  children,
}: ThemeProviderProps): JSX.Element {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
