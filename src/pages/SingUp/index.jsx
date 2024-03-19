import { Link } from 'react-router-dom'

import * as S from './styles'

import logo from '../../assets/logo.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
  return (
    <S.Container>
      <S.Header>
        <img src={logo} alt="Logo em formato polígono na cor azul" />
        <h1>Food explorer</h1>
      </S.Header>

      <S.Form action="">
        <h2>Crie sua conta</h2>
        <label htmlFor="name">Seu Nome</label>
        <Input id="name" type="email" placeholder="Exemplo: Maria da Silva" />

        <label htmlFor="email">Email</label>
        <Input id="email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />

        <label htmlFor="password">Senha</label>
        <Input id="password" type="password" placeholder="No mínimo 6 caracteres" />

        <Button title="Criar conta" />

        <Link to="/signin">Já tenho uma conta</Link>
      </S.Form>
    </S.Container>
  )
}
