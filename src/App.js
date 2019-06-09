import React from 'react';
import Header from './components/Header'
import Main from './components/Main'

import './scss/main.scss';
import Minimenu from "./components/Minimenu";

function App() {
  return (
    <div className="App wrapper">
        {/*<Minimenu name="zenek"/>*/}
      <Header />
      <Main />

    </div>
  );
}

export default App;
