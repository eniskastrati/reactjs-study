import './App.css';
//this is how we have to import it now after not exported as default
import { Greet } from './components/Greet';
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      <Hello />
    </div>
  );
}

export default App;
