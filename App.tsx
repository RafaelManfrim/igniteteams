import theme from './src/theme';
import { ThemeProvider } from 'styled-components';

import { Groups } from './src/screens/Groups'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}
