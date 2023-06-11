import React from 'react';
import './App.css';
import AppContext from './context/AppContext';
import LoginContainer from './containers/LoginContainer';

function App() {
  return (
    <AppContext.Provider value={{}}>
      <LoginContainer />
    </AppContext.Provider>
  );
}

export default App;
