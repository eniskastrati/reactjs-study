import React from 'react';
import './styles/App.css';


//importing components
import Welcome from './components/react-basics/Welcome';
import Greet from './components/react-basics/Greet';
import Message from './components/react-basics/Message'
import Counter from './components/react-basics/Counter';
import Click from './components/react-basics/Click';
import ClassClick from './components/react-basics/ClassClick';
import ParentComponent from './components/react-basics/ParentComponent';
import UserGreeting from "./components/react-basics/UserGreeting";
import NameList from './components/react-basics/NameList';
import Stylesheet from './components/react-basics/Stylesheet';
import Inline from './components/react-basics/Inline';
import './styles/appStyle.css'
import styles from './styles/appStyles.module.css'
import Form from './components/react-basics/Form';
import LifecycleA from './components/react-basics/LifecycleA';
import FragmentDemo from './components/react-advanced/FragmentDemo';
import Table from './components/react-advanced/Table';
import PureComp from './components/react-advanced/PureComp';
import ParentComp from './components/react-advanced/ParentComp';




function App() {
  return (
    <div className="App">
      <ParentComp />
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA />
      <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
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
