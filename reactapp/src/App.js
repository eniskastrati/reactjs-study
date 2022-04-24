import './App.css';

import Welcome from './components/Welcome';
import Greet from './components/Greet';
import Message from './components/Message'
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <Welcome name="Enis" heroName="https://eniskastrati.de" /> */}
      {/* <Message /> */}
      <Counter />
    </div>
  );
}

export default App;
