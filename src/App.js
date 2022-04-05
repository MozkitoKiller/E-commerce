import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Component/Footer/Footer';
import Cart from './Component/Cart/Cart'
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductPage from './Component/Products/ProductPage/ProductPage';
import axios from 'axios'

import { ProductContext } from './Component/Context/ProductsContext';





function App() {

  const [produtos, setprodutos] = useState([])
  



  useEffect(() => {
      const fetchData = async () => {
          await axios.get('http://localhost:3000/produtos').then(res => {
              setprodutos(res.data)
          }).catch(err => {
              console.log(err)
          })
      }
      fetchData()
  }, [])


  return (
    <>
      <ProductContext.Provider value={{ produtos }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Produto/:name" element={<ProductPage produto={produtos} />} />
          </Routes>
          <Footer />
        </Router>
      </ProductContext.Provider>
    </>
  )
}
export default App;
