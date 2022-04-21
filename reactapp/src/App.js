import './App.css';
import Welcome from './components/Welcome';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
    </div>
  );
}

export default App;
