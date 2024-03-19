import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import * as S from './styles'

export function SignIn() {
  return (
    <S.Container>
      <S.Header>
        <img src={logo} alt="Logo em formato polígono na cor azul" />
      </S.Header>

      <S.Form action="">
        <h1>Faça login</h1>

        <label htmlFor="email">Email</label>
        <Input id="email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />

        <label htmlFor="password">Senha</label>
        <Input id="password" type="password" placeholder="No mínimo 6 caracteres" />

        <Button title="Entrar" />

        <Link to="/signup">Criar uma conta</Link>
      </S.Form>
    </S.Container>
  )
}
