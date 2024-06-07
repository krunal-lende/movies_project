
import { createContext, useEffect, useState } from 'react';
import './App.css';
import LoginRegister from './Components/LoginRegister/LoginRegister';
import Main from './Components/Main';

export const AppContex = createContext();
function App() {
    const[showlogin,setShowLogin]=useState(true); //true

   
    
  return (
    <div >
      <AppContex.Provider value={{setShowLogin}} >

        {
          showlogin ? <LoginRegister />:<Main />
        }

  </AppContex.Provider>
    </div>
  );
}

export default App;
