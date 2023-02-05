import React from 'react';
import Router from "./Router";
import { ThemeProvider } from 'styled-components'
import { Theme } from './Theme';
import { GlobalStyle } from './style/GlobalSyle';
//import {ReactQueryDevtools} from "react-query/devtools";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>   
        <GlobalStyle />
        <Router></Router>
    {/*  <ReactQueryDevtools initialIsOpen={true}></ReactQueryDevtools>*/}
      </ThemeProvider>
    </>
  );
}

export default App;
