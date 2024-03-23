import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'
import toast from 'react-hot-toast'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      })

      const { token, user } = response.data

      localStorage.setItem('@food-explorer:user', JSON.stringify(user))
      localStorage.setItem('@food-explorer:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })

      toast.success('Login feito com sucesso')
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error('Erro ao fazer login, tente novamente.')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@food-explorer:user')
    localStorage.removeItem('@food-explorer:token')

    setData({})

    toast.success('Logout feito com sucesso')
  }

  useEffect(() => {
    const user = localStorage.getItem('@food-explorer:user')
    const token = localStorage.getItem('@food-explorer:token')

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user: JSON.parse(user), token })
    }
  }, [])

  return <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
