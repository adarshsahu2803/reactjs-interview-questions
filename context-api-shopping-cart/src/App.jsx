import { Routes, Route } from 'react-router-dom';
import './App.css'
import Cart from './components/Cart'
import Product from './components/Product'
import Home from './components/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  )
}

export default App
