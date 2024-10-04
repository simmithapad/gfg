import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Tiles from './components/Tiles/Tiles.jsx';
// import Page1 from './pages/Home/Home.jsx';
import Home from './pages/Home/Home'
// import Cart from './pages/Cart/Cart'
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Tiles />} />
          {/* <Route path="/dailysports" element={<Page1 />} /> */}
          {/* <Route path="/adventuresports" element={<Page2 />} /> */}
          <Route path='/dailysports' element={<Home />} />
          {/* <Route path='/cart' element={<Cart />} /> */}
          {/* <Route path='/order' element={<PlaceOrder />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;