
import './App.css';
import Nagivation from './customer/components/Navigation/Nagivation';
import HomePage from './customer/pages/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <Nagivation />
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
