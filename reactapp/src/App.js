import React from 'react';
import './App.css';

import Welcome from './components/Welcome';
import Greet from './components/Greet';
import Message from './components/Message'
import Counter from './components/Counter';
import Click from './components/Click';

function App() {
  return (
    <div className="App">
      <Greet name={"enis"} heroName={"Kastrati"} />
      <Welcome name="Enis" heroName="Spiderman" />
      <Click />
      {/* <Message /> */}
      {/*<Counter /> */}
    </div>
  );
}

export default App;
