import './App.css';
//this is how we have to import it now after not exported as default
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name='Enis' heroName='BATMAN'/>
      <Greet name='Kastrati' heroName='SpiderMAN'/>
      <Greet name='Test' heroName='TestHero'>
	  <button>Child Button</button>
	  <button>Child Button 2</button>
      </Greet>
      <Welcome name="Test2" heroName="Test2Hero">
        <button>Class Props Children </button>
      </Welcome>
    </div>
  );
}

export default App;
