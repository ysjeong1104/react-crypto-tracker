import React, { useState } from 'react';
import Router from "./Router";
import { ThemeProvider } from 'styled-components'
import { darkTheme,lightTheme } from './Theme';
import { GlobalStyle } from './style/GlobalSyle';
//import {ReactQueryDevtools} from "react-query/devtools";




function App() {

  const [isDark, setIsDark] = useState(true);

  const toggleDark=()=>{
    setIsDark(current => !current);
  }
  
  return (
    <>
      <ThemeProvider theme={ isDark ? darkTheme : lightTheme}>           
        <GlobalStyle />        
        <Router toggleDark={toggleDark} isDark={isDark}></Router>
    {/*  <ReactQueryDevtools initialIsOpen={true}></ReactQueryDevtools>*/}
      </ThemeProvider>
    </>
  );
}

export default App;
