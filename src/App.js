import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { ProductsPage } from './Components/ProductsPage';
import { Cart } from './Components/Cart';


function App() {
  return (
    // <div className="App">
    //   <ProductsPage/>
    // </div>

    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to="/" className='text-white text-xl'>Products</Link>
            </li>

            <li>
              <Link to="/cart" className='text-white text-xl'>Cart</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<ProductsPage/>}></Route>
          <Route exact path="/cart" element={<Cart/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
