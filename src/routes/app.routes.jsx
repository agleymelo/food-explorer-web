import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { CreateNewProduct } from '../pages/CreateNewProduct'
import { EditProduct } from '../pages/EditProduct'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/product/create" element={<CreateNewProduct />} />
      <Route path="/product/update/:id" element={<EditProduct />} />
    </Routes>
  )
}
