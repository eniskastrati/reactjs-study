import './App.css';
//this is how we have to import it now after not exported as default
import Greet from './components/Greet';
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Greet name='Enis' heroName='BATMAN'/>
      <Greet name='Kastrati' heroName='SpiderMAN'/>
      <Greet name='SMED' heroName='wonderWoman' />
      {/* <Hello /> */}
    </div>
  );
}

export default App;
