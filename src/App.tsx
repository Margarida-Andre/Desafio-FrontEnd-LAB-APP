import React from 'react';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import {theme} from "./styles/theme";
import Home from './pages/home';
import { InfraestruturaProvider } from './context/useInfraestrutura';

function App() {
  return (
    <InfraestruturaProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Home/>
    </ThemeProvider>
    </InfraestruturaProvider>
  );
}

export default App;
