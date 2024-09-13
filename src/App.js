
import './App.css';
import Footer from './customer/components/Footer/Footer';
import Nagivation from './customer/components/Navigation/Nagivation';
import HomePage from './customer/pages/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <Nagivation />
      <div>
        <HomePage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
