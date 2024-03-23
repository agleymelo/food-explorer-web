import { Navigate, Route, Routes } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SingUp'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      <Route path="*" exact={true} element={<Navigate to="/" />} />
    </Routes>
  )
}
