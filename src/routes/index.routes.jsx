import { BrowserRouter } from 'react-router-dom'

import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'
import { useAuth } from '../context/AuthContext'

import { USER_ROLE } from '../utils/roles'
import { AdminRoutes } from './admin.routes'

export function Routes() {
  const { user } = useAuth()

  function AccessRoutes() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />
      case USER_ROLE.CUSTOMER:
        return <AppRoutes />
      default:
        return <AuthRoutes />
    }
  }

  return <BrowserRouter>{user ? <AccessRoutes /> : <AuthRoutes />}</BrowserRouter>
}
