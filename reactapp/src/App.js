import React from 'react';
import './App.css';

import Welcome from './components/Welcome';
import Greet from './components/Greet';
import Message from './components/Message'
import Counter from './components/Counter';
import Click from './components/Click';
import ClassClick from './components/ClassClick';
import EvenBind from './components/EvenBind';

function App() {
  return (
    <div className="App">
      <EvenBind />
      {/* <ClassClick /> */}
      {/* <Greet name={"enis"} heroName={"Kastrati"} /> */}
      {/* <Welcome name="Enis" heroName="Spiderman" /> */}
      {/* <Click /> */}
      {/* <Message /> */}
      {/*<Counter /> */}
    </div>
  );
}

export default App;
