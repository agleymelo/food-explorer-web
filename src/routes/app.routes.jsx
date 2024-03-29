import { Navigate, Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Product } from '../pages/Product'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/product/:id" element={<Product />} />

      <Route path="*" exact={true} element={<Navigate to="/" />} />
    </Routes>
  )
}
