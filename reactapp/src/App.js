import './App.css';
//this is how we have to import it now after not exported as default
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet />
    </div>
  );
}

export default App;
