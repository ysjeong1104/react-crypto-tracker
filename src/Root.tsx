import React from 'react';
import { ThemeProvider } from 'styled-components'
import { darkTheme,lightTheme } from './Theme';
import { GlobalStyle } from './style/GlobalSyle';
//import {ReactQueryDevtools} from "react-query/devtools";
import { Helmet } from 'react-helmet';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './states/ThemeAtoms';
import { Outlet } from 'react-router-dom';



function Root() {

   
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <Helmet>
      {/*<!--글꼴-->*/}
      <link
        type="text/css"
        media="screen"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&family=Source+Sans+Pro:wght@300&display=swap"
      />
      <script type='text/javascript'>
        console.log("이렇게 가능");
      </script>
      </Helmet>
      <ThemeProvider theme={isDark ?  darkTheme : lightTheme}>           
        <GlobalStyle />        
        <Outlet />
    {/*  <ReactQueryDevtools initialIsOpen={true}></ReactQueryDevtools>*/}
      </ThemeProvider>
    </>
  );
}

export default Root;
