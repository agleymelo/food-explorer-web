import * as S from './styles'

import logo from '../../assets/logo.svg'
import { Input } from '../../components/Input'

export function SignIn() {
  return (
    <S.Container>
      <div>
        <img src={logo} alt="Logo em formato poligonou na cor azul" />
        <h1>Food explorer</h1>
      </div>

      <form action="">
        <Input type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
        <Input type="password" placeholder="No mínimo 6 caracteres" />
      </form>
    </S.Container>
  )
}
