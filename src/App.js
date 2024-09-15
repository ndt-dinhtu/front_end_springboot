
import './App.css';
import Cart from './customer/components/Cart/Cart';
import Footer from './customer/components/Footer/Footer';
import Nagivation from './customer/components/Navigation/Nagivation';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import HomePage from './customer/pages/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <Nagivation />
      <div>
        {/* <HomePage />
        <Product />
        <ProductDetails /> */}
        <Cart />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
