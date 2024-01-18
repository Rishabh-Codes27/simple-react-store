import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { ProductsPage } from './Components/ProductsPage';
import { Cart } from './Components/Cart';


function App() {
  return (
    <div className="App">
      <ProductsPage/>
    </div>
  );
}

export default App;
