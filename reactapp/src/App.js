import React from 'react';
import './App.css';

import Welcome from './components/Welcome';
import Greet from './components/Greet';
import Message from './components/Message'
import Counter from './components/Counter';
import Click from './components/Click';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import UserGreeting from "./components/UserGreeting";
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';

function App() {
  return (
    <div className="App">
      <Inline />
      {/* <Stylesheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <EvenBind /> */}
      {/* <UserGreeting />
      <ParentComponent /> */}
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
