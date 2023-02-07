import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import router from './Router2';
import { QueryClient,QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import { RouterProvider } from 'react-router-dom';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <RecoilRoot>
    <QueryClientProvider client={queryClient}>    
      {/* <App />    */}
      <RouterProvider router={router}></RouterProvider>
      
    </QueryClientProvider>
  </RecoilRoot>

);

