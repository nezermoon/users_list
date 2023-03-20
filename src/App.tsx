import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter';

const App = () => {
  return (
    <BrowserRouter>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        <AppRouter />
      </div> 
     </BrowserRouter> 
  )
}

export default App;
