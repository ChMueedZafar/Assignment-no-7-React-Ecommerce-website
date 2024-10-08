import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/mens' element={<ShopCategory Category="mens"/>}></Route>
        <Route path='/womens' element={<ShopCategory Category="womens"/>}></Route>
        <Route path='/kids' element={<ShopCategory Category="kids"/>}></Route>
        <Route path='product' element={<Product/>}></Route>
        <Route path='productId' element={<Product/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignup/>}></Route>
        
      </Routes>
      
      
      
      </BrowserRouter>


    </div>
  );
}

export default App;
