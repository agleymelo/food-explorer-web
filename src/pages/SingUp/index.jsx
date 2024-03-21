import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import * as S from './styles'
import toast from 'react-hot-toast'
import { api } from '../../services/api'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function onHandleSignUp() {
    if (!name || !email || !password) {
      return toast.error('Preencha todos os campos')
    }

    api
      .post('/users', {
        name,
        email,
        password,
      })
      .then(() => {
        toast.success('Usuário criado com sucesso')
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          return toast.error(error.response.data.message)
        }
        toast.error('Erro ao criar usuário')
      })
  }

  return (
    <S.Container>
      <S.Header>
        <img src={logo} alt="Logo em formato polígono na cor azul" />
      </S.Header>

      <S.Form action="">
        <h1>Crie sua conta</h1>
        <label htmlFor="name">Seu Nome</label>
        <Input
          id="name"
          type="email"
          placeholder="Exemplo: Maria da Silva"
          onChange={(event) => setName(event.target.value)}
        />

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

        <Button type="button" title="Criar conta" onClick={onHandleSignUp} />

        <Link to="/signin">Já tenho uma conta</Link>
      </S.Form>
    </S.Container>
  )
}
