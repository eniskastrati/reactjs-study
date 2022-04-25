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
import './appStyle.css'
import styles from './appStyles.module.css'



function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/* <Inline /> */}
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
