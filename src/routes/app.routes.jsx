import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { New } from '../pages/New'
import { EditDish } from '../pages/EditDish'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/new" element={<New />} />
      <Route path="/dish/edit/:id" element={<EditDish />} />
    </Routes>
  )
}
