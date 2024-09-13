
import './App.css';
import Footer from './customer/components/Footer/Footer';
import Nagivation from './customer/components/Navigation/Nagivation';
import Product from './customer/components/Product/Product';
import HomePage from './customer/pages/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <Nagivation />
      <div>
        {/* <HomePage /> */}
        <Product />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
