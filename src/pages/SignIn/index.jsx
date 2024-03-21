import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useAuth } from '../../context/AuthContext'

import * as S from './styles'

export function SignIn() {
  const { signIn } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <S.Container>
      <S.Header>
        <img src={logo} alt="Logo em formato polígono na cor azul" />
      </S.Header>

      <S.Form action="">
        <h1>Faça login</h1>

        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">Senha</label>
        <Input
          id="password"
          type="password"
          placeholder="No mínimo 6 caracteres"
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button type="button" title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar uma conta</Link>
      </S.Form>
    </S.Container>
  )
}
