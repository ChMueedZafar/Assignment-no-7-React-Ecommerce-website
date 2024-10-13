import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/men_banner-img.png'
import women_banner from './Components/Assets/women_banner-img.png'
import kids_banner from './Components/Assets/kidsbanner-img.png'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/mens' element={<ShopCategory banner={men_banner} Category="mens"/>}></Route>
        <Route path='/womens' element={<ShopCategory banner={women_banner}Category="womens"/>}></Route>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} Category="kids"/>}></Route>
        <Route path='product' element={<Product/>}></Route>
        <Route path='productId' element={<Product/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignup/>}></Route>
      </Routes>
        <Footer/>
      
      
      
      </BrowserRouter>


    </div>
  );
}

export default App;
