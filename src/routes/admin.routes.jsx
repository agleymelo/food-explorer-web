import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { CreateNewProduct } from '../pages/CreateNewProduct'
import { EditProduct } from '../pages/EditProduct'
import { Product } from '../pages/Product'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/product/:id" element={<Product />} />
      <Route path="/product/create" element={<CreateNewProduct />} />
      <Route path="/product/update/:id" element={<EditProduct />} />
    </Routes>
  )
}
