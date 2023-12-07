import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Categories from './Pages/Categories'
import Novidades from './Pages/Novidades'
import Promocoes from './Pages/Promocoes'
import Product from './Pages/Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/Novidades" element={<Novidades />} />
    <Route path="/Promocoes" element={<Promocoes />} />
    <Route path="/Product/:id" element={<Product />} />
  </Routes>
)

export default Rotas
